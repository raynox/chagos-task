import { SelectOption } from '@/src/shared/types';
import { ChevronDown, X } from 'lucide-react';
import { useState } from 'react';

interface SelectProps<T extends string> {
  options: Array<SelectOption<T>>;
  onChange: (option: SelectOption<T>) => void;
}

export default function Select<T extends string>({ options, onChange }: SelectProps<T>) {
  const [selectedOption, setSelectedOption] = useState<SelectOption<T> | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const option = options.find((option) => option.value === e.target.value);
    if (option) {
      setSelectedOption(option);
      onChange(option);
    }
  };

  const handleClear = () => {
    setSelectedOption(null);
    onChange({ value: 'default' as T, label: 'Sort by' });
  };

  return (
    <div className="relative">
      <select
        className="appearance-none bg-white border rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-gray-200"
        value={selectedOption?.value || 'default'}
        onChange={handleChange}
      >
        <option value="default" disabled>
          Sort by
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 pointer-events-none" />
      {selectedOption && (
        <button
          onClick={handleClear}
          className="absolute -bottom-6 left-0 text-sm text-gray-500 hover:text-gray-700 flex items-center gap-1"
        >
          <span>Clear: {selectedOption.label}</span>
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}
