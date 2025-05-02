import Select from '@/src/shared/components/Select';
import { Heading } from '@/src/shared/components/typography/Heading';
import { SortOption } from '@/src/shared/types';

interface CategoryHeaderProps {
  selectedCategory: string;
  handleSort: (option: SortOption) => void;
  children: React.ReactNode;
}

export default function CategoryHeader({
  selectedCategory,
  handleSort,
  children,
}: CategoryHeaderProps) {
  return (
    <div className="sticky top-0 bg-gray-50 z-10 py-4 border-b">
      <Heading level={2} className="mb-4">
        {selectedCategory}
      </Heading>

      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-4">{children}</div>

        <div className="relative">
          <Select<SortOption>
            options={[
              { label: 'Price: Low to High', value: 'price-asc' },
              { label: 'Price: High to Low', value: 'price-desc' },
              { label: 'Name: A to Z', value: 'name-asc' },
              { label: 'Name: Z to A', value: 'name-desc' },
            ]}
            onChange={(option) => handleSort(option.value)}
          />
        </div>
      </div>
    </div>
  );
}
