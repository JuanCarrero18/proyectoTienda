export interface Products {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}
export interface Rating {
  rate: number;
  count: number;
}

// export interface Products {
//   id: number;
//   title: string;
//   slug?: string;
//   price: number;
//   description: string;
//   category: Category;
//   images: string[];
//   creationAt: string;
//   updatedAt: string;
// }
// export interface Category {
//   id: number;
//   name: string;
//   slug?: string;
//   image: string;
//   creationAt: string;
//   updatedAt: string;
// }
