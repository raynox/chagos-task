import { Plus } from 'lucide-react';

interface SquareButtonProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function SquareButton({ onClick }: SquareButtonProps) {
  return (
    <button
      className="absolute right-3 top-3 bg-blue-500 hover:bg-blue-600 text-white rounded-md p-2 shadow-md transition-colors"
      onClick={(e) => onClick(e)}
    >
      <Plus className="h-5 w-5" />
    </button>
  );
}
