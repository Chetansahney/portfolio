import { useEffect, useRef } from 'react';

/* A rotating node field: an evenly distributed point sphere wired to its
   nearest neighbours, three inclined orbital rings, and packets running the
   links. Drawn on a canvas with a real 3D -> 2D projection, so depth reads as
   depth rather than as a flat pattern. */

const NODE_COUNT = 150;
const NEIGHBOURS = 2;
const GOLDEN_ANGLE = Math.PI * (3 - Math.sqrt(5));
const FOV = 3;

const ACCENT = '#B600A8';
const ACCENT_DEEP = '#7621B0';
const ACCENT_WARM = '#BE4C00';
const LIGHT = '#D7E2EA';

type Vec3 = { x: number; y: number; z: number };

const rings = [
  { tilt: 0.05, radius: 1.34, speed: 0.22, colour: ACCENT },
  { tilt: 1.08, radius: 1.52, speed: -0.15, colour: ACCENT_DEEP },
  { tilt: 2.12, radius: 1.18, speed: 0.1, colour: ACCENT_WARM },
];

function rgba(hex: string, alpha: number) {
  const n = parseInt(hex.slice(1), 16);
  return `rgba(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}, ${alpha})`;
}

function rotY(p: Vec3, a: number): Vec3 {
  const c = Math.cos(a);
  const s = Math.sin(a);
  return { x: p.x * c + p.z * s, y: p.y, z: -p.x * s + p.z * c };
}

function rotX(p: Vec3, a: number): Vec3 {
  const c = Math.cos(a);
  const s = Math.sin(a);
  return { x: p.x, y: p.y * c - p.z * s, z: p.y * s + p.z * c };
}

/** Evenly spaced points on a sphere — the spiral keeps the spacing regular,
 *  so the wireframe looks deliberate instead of clumped. */
function fibonacciSphere(count: number): Vec3[] {
  const points: Vec3[] = [];
  for (let i = 0; i < count; i++) {
    const y = 1 - (i / (count - 1)) * 2;
    const r = Math.sqrt(Math.max(0, 1 - y * y));
    const theta = i * GOLDEN_ANGLE;
    points.push({ x: Math.cos(theta) * r, y, z: Math.sin(theta) * r });
  }
  return points;
}

/** Nearest-neighbour links, computed once so the mesh stays stable as it
 *  turns rather than flickering frame to frame. */
function buildLinks(points: Vec3[], k: number): [number, number][] {
  const seen = new Set<string>();
  const links: [number, number][] = [];

  points.forEach((p, i) => {
    const nearest = points
      .map((q, j) => ({
        j,
        d: (p.x - q.x) ** 2 + (p.y - q.y) ** 2 + (p.z - q.z) ** 2,
      }))
      .filter((entry) => entry.j !== i)
      .sort((a, b) => a.d - b.d)
      .slice(0, k);

    nearest.forEach(({ j }) => {
      const key = i < j ? `${i}:${j}` : `${j}:${i}`;
      if (!seen.has(key)) {
        seen.add(key);
        links.push([i, j]);
      }
    });
  });

  return links;
}

export default function HeroVisual({ className = '' }: { className?: string }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const nodes = fibonacciSphere(NODE_COUNT);
    const links = buildLinks(nodes, NEIGHBOURS);
    const packets = Array.from({ length: 7 }, () => ({
      link: Math.floor(Math.random() * links.length),
      t: Math.random(),
      speed: 0.13 + Math.random() * 0.22,
    }));

    let width = 0;
    let height = 0;

    // Motion state lives up here so `resize` can repaint at the current angles.
    let spin = 0.6;
    let dial = 0;
    let targetTiltX = 0;
    let targetTiltY = 0;
    let tiltX = 0;
    let tiltY = 0;

    const resize = () => {
      const rect = wrap.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      // Assigning canvas.width clears the bitmap, so repaint straight away.
      // Without this a resize -- including ResizeObserver's initial call --
      // leaves the canvas blank until the next frame, and blank permanently
      // when motion is reduced and no frame loop is running.
      draw(spin + tiltY, dial);
    };

    const onMove = (e: MouseEvent) => {
      const rect = wrap.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      targetTiltY = Math.max(-1, Math.min(1, (e.clientX - cx) / (window.innerWidth / 2))) * 0.32;
      targetTiltX = Math.max(-1, Math.min(1, (e.clientY - cy) / (window.innerHeight / 2))) * 0.22;
    };
    window.addEventListener('mousemove', onMove, { passive: true });

    const draw = (spinAngle: number, dialAngle: number) => {
      const cx = width / 2;
      const cy = height / 2;
      const radius = Math.min(width, height) * 0.32;

      ctx.clearRect(0, 0, width, height);

      const turn = (p: Vec3) => rotX(rotY(p, spinAngle), -0.22 + tiltX);
      const project = (p: Vec3) => {
        const k = FOV / (FOV + p.z);
        return { x: cx + p.x * radius * k, y: cy + p.y * radius * k, k, z: p.z };
      };
      // Depth 0 (far) to 1 (near).
      const depth = (z: number) => (z + 1.6) / 3.2;

      /* Instrument dial — a flat ring of ticks framing the field. */
      const dialRadius = radius * 1.6;
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(dialAngle);
      ctx.strokeStyle = rgba(LIGHT, 0.08);
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(0, 0, dialRadius, 0, Math.PI * 2);
      ctx.stroke();
      for (let i = 0; i < 72; i++) {
        const a = (i / 72) * Math.PI * 2;
        const major = i % 18 === 0;
        const len = major ? 10 : 4;
        ctx.strokeStyle = rgba(LIGHT, major ? 0.24 : 0.1);
        ctx.lineWidth = major ? 1.4 : 1;
        ctx.beginPath();
        ctx.moveTo(Math.cos(a) * dialRadius, Math.sin(a) * dialRadius);
        ctx.lineTo(Math.cos(a) * (dialRadius + len), Math.sin(a) * (dialRadius + len));
        ctx.stroke();
      }
      ctx.restore();

      /* Core glow. */
      ctx.save();
      ctx.globalCompositeOperation = 'lighter';
      const glow = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius * 1.15);
      glow.addColorStop(0, rgba(ACCENT, 0.17));
      glow.addColorStop(0.5, rgba(ACCENT_DEEP, 0.07));
      glow.addColorStop(1, rgba(ACCENT_DEEP, 0));
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(cx, cy, radius * 1.15, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      const turned = nodes.map(turn);
      const projected = turned.map(project);

      /* Mesh. */
      links.forEach(([a, b]) => {
        const pa = projected[a];
        const pb = projected[b];
        const d = depth((turned[a].z + turned[b].z) / 2);
        ctx.strokeStyle = rgba(LIGHT, 0.05 + d * 0.24);
        ctx.lineWidth = 0.6 + d * 0.5;
        ctx.beginPath();
        ctx.moveTo(pa.x, pa.y);
        ctx.lineTo(pb.x, pb.y);
        ctx.stroke();
      });

      /* Orbital rings. */
      rings.forEach((ring, ri) => {
        const steps = 96;
        for (let i = 0; i < steps; i++) {
          const a0 = (i / steps) * Math.PI * 2;
          const a1 = ((i + 1) / steps) * Math.PI * 2;
          const phase = spinAngle * ring.speed * 4 + ri;
          const build = (angle: number) =>
            turn(
              rotX(
                {
                  x: Math.cos(angle + phase) * ring.radius,
                  y: 0,
                  z: Math.sin(angle + phase) * ring.radius,
                },
                ring.tilt,
              ),
            );
          const v0 = build(a0);
          const v1 = build(a1);
          const p0 = project(v0);
          const p1 = project(v1);
          const d = depth((v0.z + v1.z) / 2);
          ctx.strokeStyle = rgba(ring.colour, 0.08 + d * 0.55);
          ctx.lineWidth = 0.8 + d * 1.5;
          ctx.beginPath();
          ctx.moveTo(p0.x, p0.y);
          ctx.lineTo(p1.x, p1.y);
          ctx.stroke();
        }
      });

      /* Nodes, far ones first so near ones sit on top. */
      projected
        .map((p, i) => ({ p, i }))
        .sort((a, b) => a.p.z - b.p.z)
        .forEach(({ p, i }) => {
          const d = depth(turned[i].z);
          ctx.fillStyle = rgba(LIGHT, 0.2 + d * 0.8);
          ctx.beginPath();
          ctx.arc(p.x, p.y, 0.7 + d * 1.9, 0, Math.PI * 2);
          ctx.fill();
        });

      /* Packets running the links. */
      ctx.save();
      ctx.globalCompositeOperation = 'lighter';
      packets.forEach((packet) => {
        const [a, b] = links[packet.link];
        const va = turned[a];
        const vb = turned[b];
        const v = {
          x: va.x + (vb.x - va.x) * packet.t,
          y: va.y + (vb.y - va.y) * packet.t,
          z: va.z + (vb.z - va.z) * packet.t,
        };
        const p = project(v);
        const d = depth(v.z);
        const r = 1.6 + d * 2.4;
        const halo = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, r * 4);
        halo.addColorStop(0, rgba(ACCENT, 0.55 + d * 0.35));
        halo.addColorStop(1, rgba(ACCENT, 0));
        ctx.fillStyle = halo;
        ctx.beginPath();
        ctx.arc(p.x, p.y, r * 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = rgba('#FFFFFF', 0.5 + d * 0.5);
        ctx.beginPath();
        ctx.arc(p.x, p.y, r * 0.5, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.restore();
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(wrap);

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduced) {
      draw(spin, dial);
      return () => {
        ro.disconnect();
        window.removeEventListener('mousemove', onMove);
      };
    }

    let raf = 0;
    let last = performance.now();
    let visible = true;

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) {
        last = performance.now();
        raf = requestAnimationFrame(frame);
      } else {
        cancelAnimationFrame(raf);
      }
    });
    io.observe(wrap);

    function frame(now: number) {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;

      spin += dt * 0.16;
      dial -= dt * 0.05;
      tiltX += (targetTiltX - tiltX) * Math.min(1, dt * 4);
      tiltY += (targetTiltY - tiltY) * Math.min(1, dt * 4);

      packets.forEach((packet) => {
        packet.t += dt * packet.speed;
        if (packet.t >= 1) {
          packet.t = 0;
          packet.link = Math.floor(Math.random() * links.length);
        }
      });

      draw(spin + tiltY, dial);
      if (visible) raf = requestAnimationFrame(frame);
    }

    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      ro.disconnect();
      window.removeEventListener('mousemove', onMove);
    };
  }, []);

  return (
    <div ref={wrapRef} className={`aspect-square w-full ${className}`}>
      <canvas ref={canvasRef} className="block h-full w-full" aria-hidden="true" />
    </div>
  );
}
