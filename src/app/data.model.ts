export interface User {
  id: string;
  name: string;
  avatar: string;
  address: string;
  province?: string;
  categories: Category[];
}

export interface Category {
  name: string;
  thumbnail: string;
  services?: Service[];
}

export interface Service {
  name: string;
  price: number;
}

export interface Order {
  id: string;
  name: string;
  services: string[];
  total: number;
}
