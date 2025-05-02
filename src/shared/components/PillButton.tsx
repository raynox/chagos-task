interface PillButtonProps {
  selected: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  label: string;
}

export default function PillButton({ selected, onClick, label }: PillButtonProps) {
  return (
    <button
      className={`px-6 py-2 rounded-full whitespace-nowrap cursor-pointer ${
        selected
          ? 'bg-gray-800 text-white'
          : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-100'
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
