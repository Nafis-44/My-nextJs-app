export interface IBook {
  bookId: number | string;
  bookName: string;
  author: string;
  image: string;
  rating: number;
  category: string;
  tags?: string[];
  totalPages: number;
  publisher: string;
  yearOfPublishing: number;
  pages?:number,
  year?:number
}