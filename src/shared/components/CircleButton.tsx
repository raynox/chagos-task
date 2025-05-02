interface CircleButtonProps {
  onClick: () => void;
  icon: React.ReactNode;
}

export default function CircleButton({ onClick, icon }: CircleButtonProps) {
  return (
    <button
      onClick={onClick}
      className="w-12 h-12 p-2 rounded-full hover:bg-gray-100 flex items-center justify-center"
    >
      {icon}
    </button>
  );
}
