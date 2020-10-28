export interface User {
  id: string;
  name: string;
  avatar: string;
  address: string;
  province?: string;
  categories: Category[];
}

export interface Category {
  id: string;
  name: string;
  thumbnail: string;
  services?: Service[];
}

export interface Service {
  id: string;
  name: string;
  price: number;
}

export interface Order {
  id: string;
  name: string;
  services: string[];
  total: number;
}

export const enum LSItemName {
  SERVICES = 'db-services',
  CATEGORIES = 'db-categories',
  USERS = 'db-users',
  ORDERS = 'db-orders,',
  SEARCH_HISTORY = 'db-search-history',
}
