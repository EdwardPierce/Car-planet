export interface HomeProps {
  searchParams: FilterProps;
}

export interface FilterProps {
  manufacturer?: string;
  year?: number;
  model?: string;
  limit?: number;
  fuel?: string;
}

export interface CarCardProps {
  make: string;
  model: string;
  transmission: string;
  year: number;
  drive: string;
  city_mpg: number;
}

export interface CarProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

export interface ModalProps {
  isOpen: boolean;
  hasCloseButton?: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  car: CarProps;
}

export interface SearchManuFacturerProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}

export interface CustomFilterProps {
  title: string;
  options: OptionProps[];
}

interface OptionProps {
  title: string;
  value: string;
}

export interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
}

export type ModalDialog = {
  closeModal: () => void;

  isOpen: boolean;
};
