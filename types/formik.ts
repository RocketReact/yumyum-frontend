import { Category } from '@/types/recipe';

export interface SelectOption {
  value: string;
  label: string;
  data: Category;
}

export interface FormikSelectProps {
  name: string;
  label: string;
  options: SelectOption[];
  placeholder: string;
}
