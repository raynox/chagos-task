interface CircleButtonProps {
  onClick: () => void;
  icon: React.ReactNode;
  className?: string;
}

export default function CircleButton({ onClick, icon, className = '' }: CircleButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`w-12 h-12 p-2 rounded-full hover:bg-gray-100 flex items-center justify-center ${className}`}
    >
      {icon}
    </button>
  );
}
