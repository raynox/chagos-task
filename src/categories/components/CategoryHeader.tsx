import Select from '@/src/shared/components/Select';
import TextInput from '@/src/shared/components/TextInput';
import { Heading } from '@/src/shared/components/typography/Heading';
import { SortOption } from '@/src/shared/types';
import { Search } from 'lucide-react';

interface CategoryHeaderProps {
  selectedCategory: string;
  searchTerm: string;
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSort: (option: SortOption) => void;
}

export default function CategoryHeader({
  selectedCategory,
  searchTerm,
  handleSearch,
  handleSort,
}: CategoryHeaderProps) {
  return (
    <div className="sticky top-0 bg-gray-50 z-10 py-4 border-b">
      <Heading level={2} className="mb-4">
        {selectedCategory}
      </Heading>

      <div className="flex justify-between items-center mb-6">
        <TextInput
          placeholder="Search product"
          icon={
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          }
          value={searchTerm}
          onChange={handleSearch}
        />

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
