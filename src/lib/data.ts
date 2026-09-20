export const profile = {
  name: 'Chetan Sahney',
  first: 'chetan',
  role: 'Software Engineer',
  tagline:
    'a software engineer building real-time backends, ml systems and open-source internals',
  location: 'Delhi, India',
  email: 'chetansahney19@gmail.com',
  about:
    'I build software systems — the backends, real-time layers and data pipelines that products actually run on. Services for autonomous robot fleets, recommendation engines over real transaction data, and Rust internals shipped through Google Summer of Code. Mathematics and Computing at BIT Mesra. If it has to hold up under load, I want to be the one who built it.',
};

/* Hero centrepiece. Leave null for the generated node field; point it at a
   photo in /public (e.g. '/decor/chetan.jpg') to use a portrait instead. */
export const heroPortrait: string | null = null;

export const links = {
  github: 'https://github.com/Chetansahney',
  linkedin: 'https://www.linkedin.com/in/chetan-sahney-911b3b207',
  leetcode: 'https://leetcode.com/Chetans0407',
  codeforces: 'https://codeforces.com/profile/Tango0407',
  codechef: 'https://www.codechef.com/users/tango2712',
  kaggle: 'https://www.kaggle.com/chetansahney',
};

/* Companies and orgs -- marquee row 1 + logo wall */
export const orgLogos = [
  { src: '/logos/swift-wordmark.png', alt: 'Swift Robotics', pad: 'p-7' },
  { src: '/logos/gsoc.svg', alt: 'Google Summer of Code', pad: 'p-3' },
  { src: '/logos/graphite.svg', alt: 'Graphite', pad: 'p-6' },
  { src: '/logos/ekam.png', alt: 'Ekam Apps', pad: 'p-6' },
  { src: '/logos/cern-hsf.png', alt: 'CERN HEP Software Foundation', pad: 'p-5' },
  { src: '/logos/sktime.png', alt: 'sktime', pad: 'p-8' },
  { src: '/logos/amazon.png', alt: 'Amazon ML Summer School', pad: 'p-6' },
  { src: '/logos/neev.png', alt: 'Neev Herbal Handmade Soaps', pad: 'p-6' },
  { src: '/logos/bitmesra.png', alt: 'BIT Mesra', pad: 'p-6' },
];

/* Stack -- marquee row 2 */
export const stackLogos = [
  { src: '/tech/nodedotjs.svg', alt: 'Node.js' },
  { src: '/tech/express.svg', alt: 'Express' },
  { src: '/tech/react.svg', alt: 'React' },
  { src: '/tech/typescript.svg', alt: 'TypeScript' },
  { src: '/tech/rust.svg', alt: 'Rust' },
  { src: '/tech/python.svg', alt: 'Python' },
  { src: '/tech/mongodb.svg', alt: 'MongoDB' },
  { src: '/tech/postgresql.svg', alt: 'PostgreSQL' },
  { src: '/tech/redis.svg', alt: 'Redis' },
  { src: '/tech/socketdotio.svg', alt: 'Socket.io' },
  { src: '/tech/fastapi.svg', alt: 'FastAPI' },
  { src: '/tech/webassembly.svg', alt: 'WebAssembly' },
  { src: '/tech/openjdk.svg', alt: 'Java' },
  { src: '/tech/cplusplus.svg', alt: 'C++' },
  { src: '/tech/numpy.svg', alt: 'NumPy' },
  { src: '/tech/pandas.svg', alt: 'pandas' },
  { src: '/tech/scikitlearn.svg', alt: 'scikit-learn' },
  { src: '/tech/pytorch.svg', alt: 'PyTorch' },
  { src: '/tech/docker.svg', alt: 'Docker' },
  { src: '/tech/git.svg', alt: 'Git' },
  { src: '/tech/githubactions.svg', alt: 'GitHub Actions' },
  { src: '/tech/googlemaps.svg', alt: 'Google Maps Platform' },
  { src: '/tech/vercel.svg', alt: 'Vercel' },
  { src: '/tech/render.svg', alt: 'Render' },
  { src: '/tech/tailwindcss.svg', alt: 'Tailwind CSS' },
];

export type Role = {
  company: string;
  logo: string;
  logoPad: string;
  title: string;
  place: string;
  period: string;
  stack: string[];
  bullets: string[];
  href: string;
};

export const experience: Role[] = [
  {
    company: 'Swift Robotics',
    logo: '/logos/swift-wordmark.png',
    logoPad: 'p-6 sm:p-7',
    title: 'Software Development Engineering Intern',
    place: 'London, UK / Remote',
    period: 'Jul 2026 — Present',
    stack: ['Node.js', 'Express', 'MongoDB', 'WebSockets', 'REST'],
    bullets: [
      'Built and maintained REST APIs for fleet task scheduling and delivery tracking of autonomous indoor delivery robots, driving real-time status updates across multiple deployed units.',
      'Designed the WebSocket communication layer streaming live telemetry from robots to a central dashboard — 45% lower status-update latency for hospital and facility staff.',
      'Modelled and optimised MongoDB schemas for task queues, delivery logs and device state, working alongside hardware engineers on reliable device-to-cloud sync.',
    ],
    href: 'https://swiftrobotics.ai',
  },
  {
    company: 'Ekam Apps',
    logo: '/logos/ekam.png',
    logoPad: 'p-5 sm:p-6',
    title: 'Software Development Engineering Intern',
    place: 'Gurugram, India',
    period: 'May 2026 — Aug 2026',
    stack: ['React', 'Node.js', 'Express', 'FastAPI', 'PostgreSQL'],
    bullets: [
      'Shipped product features end-to-end across the React front-end and Node.js/Express back-end inside an Agile team of QA, design and senior engineers.',
      'Resolved many GitHub issues spanning bug fixes, UI inconsistencies and API edge cases, cutting production defects by 25%.',
      'Designed and documented RESTful API specifications on PostgreSQL, optimising queries for a 30% system performance gain.',
    ],
    href: 'https://ekamapps.com',
  },
  {
    company: 'Google Summer of Code',
    logo: '/logos/gsoc.svg',
    logoPad: 'p-3 sm:p-4',
    title: 'Open Source Contributor — Graphite',
    place: 'Remote',
    period: 'Jan 2026 — Present',
    stack: ['Rust', 'WebAssembly', 'GitHub Actions'],
    bullets: [
      'Profiled memory allocation patterns in Rust and lifted allocation efficiency by 30% across the editor core.',
      'Scoped and implemented a Marching Ants selection algorithm from first principles, resolving jitter and coordinate drift across Wasm environments.',
      'Expanded regression test coverage by 40% through GitHub Actions, measurably reducing regression incidents at scale.',
    ],
    href: 'https://graphite.rs',
  },
  {
    company: 'sktime',
    logo: '/logos/sktime.png',
    logoPad: 'p-7 sm:p-8',
    title: 'Open Source Contributor — Time-Series ML',
    place: 'Remote',
    period: '2025 — Present',
    stack: ['Python', 'scikit-learn', 'PyTorch', 'Git', 'CI/CD'],
    bullets: [
      'Contributing to sktime, the unified framework for machine learning with time series, and to pytorch-forecasting alongside it.',
      'Contributions merged across open-source ecosystems, delivering measurable improvements through data-driven insights and attention to detail.',
      'Also contributed to CERN HSF / CLAD — automatic differentiation for C/C++ — through Google Summer of Code 2025.',
    ],
    href: 'https://github.com/sktime/sktime',
  },
  {
    company: 'Neev Herbal Handmade Soaps',
    logo: '/logos/neev.png',
    logoPad: 'p-5 sm:p-6',
    title: 'Software Development Engineering Intern',
    place: 'Jamshedpur, India',
    period: 'Oct 2024 — Jan 2026',
    stack: ['Node.js', 'Express', 'MongoDB', 'REST'],
    bullets: [
      'Interviewed stakeholders to map day-to-day pain points, then designed scalable backend APIs that automated inventory and cut manual data handling by 50%.',
      'Diagnosed bottlenecks across multiple legacy modules and consolidated them into a single MVC layer for 35% faster average API response.',
      'Optimised MongoDB schema and queries across multiple collections, reducing latency by 40% through index optimisation and normalisation.',
    ],
    href: 'https://neevsoaps.com',
  },
];

/* Skills, straight from the resume */
export const skills = [
  {
    group: 'Languages',
    items: ['Java', 'C++', 'Python', 'Rust', 'JavaScript', 'SQL', 'HTML', 'CSS'],
  },
  {
    group: 'Frameworks & Tools',
    items: ['React', 'Node.js', 'Express', 'WebSockets', 'Redis', 'PostgreSQL', 'Git', 'CI/CD Pipelines'],
  },
  {
    group: 'Data & Analytics',
    items: [
      'Pandas',
      'NumPy',
      'Scikit-learn',
      'Streamlit',
      'Matplotlib',
      'Collaborative Filtering',
      'Matrix Factorization',
      'Information Retrieval',
      'Statistical Analysis',
    ],
  },
  {
    group: 'Concepts',
    items: [
      'Data Structures & Algorithms',
      'OOP',
      'System Design',
      'DBMS',
      'Operating Systems',
      'Computer Networks',
      'SDLC',
      'Agile / Scrum',
    ],
  },
];

export const expertise = [
  {
    name: 'Backend & APIs',
    desc: 'REST services in Node.js and Express over MongoDB and PostgreSQL — schema modelling, query optimisation and API contracts that survive real traffic.',
  },
  {
    name: 'Real-Time Systems',
    desc: 'WebSocket and Socket.io layers streaming robot telemetry and live driver location, tuned for sub-200ms propagation across fleets and ride flows.',
  },
  {
    name: 'Machine Learning',
    desc: 'Recommender systems, matrix factorisation and time-series forecasting — implemented from first principles and evaluated leakage-free.',
  },
  {
    name: 'Full-Stack Delivery',
    desc: 'React front-ends wired to backends I own, shipped end-to-end with GitHub CI/CD onto Vercel and Render with train-at-build pipelines.',
  },
  {
    name: 'Systems & Open Source',
    desc: 'Rust and WebAssembly internals, memory profiling and regression coverage — contributions merged across sktime, pytorch-forecasting, CERN HSF and Graphite.',
  },
];

export type Project = {
  name: string;
  category: string;
  blurb: string;
  metrics: string[];
  live: string;
  repo: string;
  col1: [string, string];
  col2: string;
};

export const projects: Project[] = [
  {
    name: 'RetailRadar',
    category: 'Machine Learning',
    blurb:
      'A hybrid recommendation engine over hundreds of thousands of real e-commerce transactions. Confidence-weighted ALS matrix factorisation written from scratch with closed-form alternating least squares, blended with item-item collaborative filtering and TF-IDF content models for cold-start coverage.',
    metrics: ['+113% NDCG@10', 'Real transaction data', 'Multiple REST endpoints', 'FastAPI on Render'],
    live: 'https://retail-radar-zrv6.onrender.com/',
    repo: 'https://github.com/Chetansahney/RetailRadar',
    col1: ['/projects/rr-1.jpg', '/projects/rr-2.jpg'],
    col2: '/projects/rr-3.jpg',
  },
  {
    name: 'SwiftRide',
    category: 'Full-Stack',
    blurb:
      'A ride-hailing platform owned end-to-end. Socket.io real-time layer for live driver location and OTP-verified trip initiation, Google Maps Distance Matrix for geospatial matching and dynamic fares, JWT auth with role-based access across rider and captain flows.',
    metrics: ['Sub-200ms events', 'Google Maps APIs', 'JWT + RBAC', 'Vercel / Render / Atlas'],
    live: 'https://swiftride-red.vercel.app/',
    repo: 'https://github.com/Chetansahney/SwiftRide',
    col1: ['/projects/sw-1.png', '/projects/sw-2.png'],
    col2: '/projects/sw-3.png',
  },
  {
    name: 'Graphite',
    category: 'Open Source / GSoC',
    blurb:
      'A Rust and WebAssembly 2D content-creation suite where I work on editor internals. A Marching Ants selection algorithm implemented from first principles, 30% better allocation efficiency after memory profiling, and 40% wider regression coverage in CI.',
    metrics: ['Marching Ants from scratch', '+30% allocation efficiency', '+40% CI coverage', 'Rust to Wasm'],
    live: 'https://graphite.rs/',
    repo: 'https://github.com/GraphiteEditor/Graphite',
    col1: ['/projects/gr-1.jpg', '/projects/gr-3.jpg'],
    col2: '/projects/gr-2.jpg',
  },
];

export const achievements = [
  {
    logo: '/logos/amazon.png',
    pad: 'p-2.5',
    label: 'Amazon ML Summer School 2026',
    note: 'Selected for a highly competitive program for top ML talent, with industry-mentored coursework in machine learning, deep learning and applied data science.',
  },
  {
    logo: '/logos/cern-hsf.png',
    pad: 'p-2',
    label: 'Merged upstream in open source',
    note: 'sktime, pytorch-forecasting, CERN HSF / CLAD and Graphite, across Google Summer of Code 2025 and 2026.',
  },
];

/* Competitive programming — one card per platform, each linking to the profile */
export const platforms = [
  {
    logo: '/logos/codeforces.svg',
    pad: 'p-3',
    name: 'Codeforces',
    rank: 'Specialist',
    note: 'Specialist rating band (1400+), earned across rated contests.',
    handle: 'Tango0407',
    href: links.codeforces,
  },
  {
    logo: '/logos/codechef.svg',
    pad: 'p-2.5',
    name: 'CodeChef',
    rank: '3 Star',
    note: 'Three-star rated, competing in Division contests.',
    handle: 'tango2712',
    href: links.codechef,
  },
  {
    logo: '/logos/leetcode.svg',
    pad: 'p-3',
    name: 'LeetCode',
    rank: '400+',
    note: 'Problems solved across data structures, algorithms and system-design patterns.',
    handle: 'Chetans0407',
    href: links.leetcode,
  },
  {
    logo: '/logos/kaggle.svg',
    pad: 'p-1.5',
    name: 'Kaggle',
    rank: 'Silver',
    note: 'Silver-medal ranked competitor on applied machine-learning competitions.',
    handle: 'chetansahney',
    href: links.kaggle,
  },
];

export const contestNote =
  'Ranked 2,123 of 30,000+ in CodeCraft 2026 — top 8% of the field.';

export const stats = [
  { value: '8.86', label: 'CGPA, Maths & Computing at BIT Mesra' },
  { value: 'Merged', label: 'Pull requests upstreamed across open source' },
  { value: 'GSoC', label: 'Contributor in 2025 and 2026' },
  { value: 'Fleet', label: 'Autonomous robots served by APIs I built' },
];
