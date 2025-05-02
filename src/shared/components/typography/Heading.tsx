import { cn } from '@/src/shared/lib/utils';
import { ElementType } from 'react';

interface HeadingProps {
  children: React.ReactNode;
  level?: 1 | 2 | 3;
  className?: string;
}

export function Heading({ children, level = 1, className }: HeadingProps) {
  const Tag = `h${level}` as ElementType;

  const styles = {
    1: 'text-3xl font-bold',
    2: 'text-2xl font-semibold',
    3: 'text-xl font-semibold',
  };

  return <Tag className={cn(styles[level], className)}>{children}</Tag>;
}
