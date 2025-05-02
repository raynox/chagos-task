interface ButtonProps {
  icon?: React.ReactNode;
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  variant?: 'default' | 'primary';
}

export default function Button({
  icon,
  label,
  onClick,
  variant = 'primary',
  className,
}: ButtonProps) {
  const baseStyles = `w-full py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors ${className}`;

  const variantStyles = {
    primary: 'bg-blue-500 hover:bg-blue-600 text-white',
    default: 'bg-gray-100 hover:bg-gray-200 text-gray-800 border border-gray-300',
  };

  return (
    <button className={`${baseStyles} ${variantStyles[variant]}`} onClick={(e) => onClick(e)}>
      {icon}
      {label}
    </button>
  );
}
