'use client';

import PillButton from '@/src/shared/components/PillButton';

interface CategoryTabsProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function CategoryTabs({
  categories,
  selectedCategory,
  onCategoryChange,
}: CategoryTabsProps) {
  return (
    <div className="flex overflow-x-auto py-4 gap-2 no-scrollbar">
      {categories.map((category) => (
        <PillButton
          key={category}
          label={category}
          selected={selectedCategory === category}
          onClick={() => onCategoryChange(category)}
        />
      ))}
    </div>
  );
}
