import { Text } from '@/src/shared/components/typography/Text';
import Range from 'rc-slider';
import 'rc-slider/assets/index.css';

interface PriceRangeFilterProps {
  minPrice: number;
  maxPrice: number;
  onMinPriceChange: (value: number) => void;
  onMaxPriceChange: (value: number) => void;
  min: number;
  max: number;
  step?: number;
}

export default function PriceRangeFilter({
  minPrice,
  maxPrice,
  onMinPriceChange,
  onMaxPriceChange,
  min,
  max,
  step = 1,
}: PriceRangeFilterProps) {
  const handleChange = (value: number | number[]) => {
    if (Array.isArray(value)) {
      onMinPriceChange(value[0]);
      onMaxPriceChange(value[1]);
    }
  };

  return (
    <div className="flex flex-col w-64 min-w-[200px]">
      <div className="flex justify-between mb-1 px-1">
        <Text variant="small" className="text-gray-600">
          ${minPrice}
        </Text>
        <Text variant="small" className="text-gray-600">
          ${maxPrice}
        </Text>
      </div>
      <Range
        min={min}
        max={max}
        step={step}
        range
        value={[minPrice, maxPrice]}
        onChange={handleChange}
      />
    </div>
  );
}
