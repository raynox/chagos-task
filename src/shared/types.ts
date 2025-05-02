export interface SelectOption<T extends string = string> {
  label: string;
  value: T;
}

export type SortOption = 'price-asc' | 'price-desc' | 'name-asc' | 'name-desc';
