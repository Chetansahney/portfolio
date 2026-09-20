import { useMemo, type ElementType, type ReactNode } from 'react';
import { motion } from 'framer-motion';

type FadeInProps = {
  children: ReactNode;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  as?: ElementType;
  className?: string;
  style?: React.CSSProperties;
  id?: string;
};

export default function FadeIn({
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  as = 'div',
  className,
  style,
  id,
}: FadeInProps) {
  const Tag = useMemo(() => motion.create(as as ElementType), [as]);

  return (
    <Tag
      id={id}
      className={className}
      style={style}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '50px', amount: 0 }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </Tag>
  );
}
