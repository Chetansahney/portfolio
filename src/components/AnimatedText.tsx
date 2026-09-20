import { useRef } from 'react';
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';

type AnimatedTextProps = {
  text: string;
  className?: string;
  style?: React.CSSProperties;
};

function Char({
  char,
  range,
  progress,
}: {
  char: string;
  range: [number, number];
  progress: MotionValue<number>;
}) {
  const opacity = useTransform(progress, range, [0.2, 1]);

  // One span per character, not an invisible placeholder plus an absolutely
  // positioned overlay. The overlay version put every character in the DOM
  // twice, so copying the paragraph produced "II bbuuiilldd" and screen
  // readers announced each letter twice. Opacity does not affect layout, so
  // a single span animates identically with none of that.
  return <motion.span style={{ opacity, display: 'inline-block', whiteSpace: 'pre' }}>{char}</motion.span>;
}

export default function AnimatedText({ text, className, style }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  });

  const total = Array.from(text).length;
  const step = 1 / total;

  // Characters are inline-block, which lets the browser break a line anywhere.
  // Grouping each word in its own inline-block keeps words whole; the spaces
  // between them stay as the only break opportunities.
  const words = text.split(' ');
  let index = 0;

  return (
    <p ref={ref} className={className} style={style}>
      {words.map((word, w) => {
        const chars = Array.from(word);
        const start = index;
        index += chars.length + (w < words.length - 1 ? 1 : 0);

        return (
          <span key={`w-${w}`}>
            <span style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
              {chars.map((char, c) => (
                <Char
                  key={`c-${w}-${c}`}
                  char={char}
                  progress={scrollYProgress}
                  range={[(start + c) * step, Math.min(1, (start + c + 1) * step)]}
                />
              ))}
            </span>
            {/* A real text-node space: the only thing the browser will treat
                as a soft wrap opportunity between two inline-block words. */}
            {w < words.length - 1 && ' '}
          </span>
        );
      })}
    </p>
  );
}
