import { cn } from '@/src/shared/lib/utils';

interface TextProps {
  children: React.ReactNode;
  variant?: 'body' | 'small' | 'label';
  className?: string;
}

export function Text({ children, variant = 'body', className }: TextProps) {
  const styles = {
    body: 'text-base text-gray-700',
    small: 'text-sm text-gray-500',
    label: 'text-sm text-gray-500 font-medium',
  };

  return <p className={cn(styles[variant], className)}>{children}</p>;
}
