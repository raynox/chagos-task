import { cn } from '@/src/shared/lib/utils';

interface PriceProps {
  amount: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function Price({ amount, size = 'md', className }: PriceProps) {
  const styles = {
    sm: 'text-base font-medium',
    md: 'text-lg font-semibold',
    lg: 'text-xl font-semibold',
  };

  return <span className={cn(styles[size], className)}>{amount}</span>;
}
