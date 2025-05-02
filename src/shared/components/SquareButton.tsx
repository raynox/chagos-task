interface SquareButtonProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  icon: React.ReactNode;
  variant?: 'primary' | 'default';
}

export default function SquareButton({
  onClick,
  icon,
  className = '',
  variant = 'primary',
}: SquareButtonProps) {
  const variantStyles = {
    primary: 'bg-blue-500 hover:bg-blue-600 text-white',
    default: 'bg-white hover:bg-gray-100 text-gray-700',
  };

  return (
    <button
      className={`w-10 h-10 rounded-md p-2 shadow-md transition-colors flex items-center justify-center ${variantStyles[variant]} ${className}`}
      onClick={(e) => onClick(e)}
    >
      {icon}
    </button>
  );
}
