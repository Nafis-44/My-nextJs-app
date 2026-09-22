import React from "react";
import BookCard from "@/component/BookCard";
import { IBook } from "@/type/Book";

// ১২টি বইয়ের ডেটা
const booksData: IBook[] = [
  {
    bookId: 1,
    bookName: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    image: "/hero_img.jpg",
    rating: 4.5,
    category: "Fiction",
    tags: ["Classic", "Novel"],
    totalPages: 180,
    publisher: "Scribner",
    yearOfPublishing: 1925,
  },
  {
    bookId: 2,
    bookName: "To Kill a Mockingbird",
    author: "Harper Lee",
    image: "/hero_img.jpg",
    rating: 4.8,
    category: "Classic",
    tags: ["Drama", "Justice"],
    totalPages: 281,
    publisher: "J.B. Lippincott & Co.",
    yearOfPublishing: 1960,
  },
  {
    bookId: 3,
    bookName: "1984",
    author: "George Orwell",
    image: "/hero_img.jpg",
    rating: 4.7,
    category: "Dystopian",
    tags: ["Sci-Fi", "Politics"],
    totalPages: 328,
    publisher: "Secker & Warburg",
    yearOfPublishing: 1949,
  },
  {
    bookId: 4,
    bookName: "Pride and Prejudice",
    author: "Jane Austen",
    image: "/hero_img.jpg",
    rating: 4.6,
    category: "Romance",
    tags: ["Classic", "Drama"],
    totalPages: 279,
    publisher: "T. Egerton",
    yearOfPublishing: 1813,
  },
  {
    bookId: 5,
    bookName: "The Catcher in the Rye",
    author: "J.D. Salinger",
    image: "/hero_img.jpg",
    rating: 4.3,
    category: "Fiction",
    tags: ["Coming-of-age", "Novel"],
    totalPages: 234,
    publisher: "Little, Brown and Company",
    yearOfPublishing: 1951,
  },
  {
    bookId: 6,
    bookName: "The Hobbit",
    author: "J.R.R. Tolkien",
    image: "/hero_img.jpg",
    rating: 4.9,
    category: "Fantasy",
    tags: ["Adventure", "Magic"],
    totalPages: 310,
    publisher: "George Allen & Unwin",
    yearOfPublishing: 1937,
  },
  {
    bookId: 7,
    bookName: "Fahrenheit 451",
    author: "Ray Bradbury",
    image: "/hero_img.jpg",
    rating: 4.4,
    category: "Sci-Fi",
    tags: ["Dystopian", "Classics"],
    totalPages: 249,
    publisher: "Ballantine Books",
    yearOfPublishing: 1953,
  },
  {
    bookId: 8,
    bookName: "Jane Eyre",
    author: "Charlotte Brontë",
    image: "/hero_img.jpg",
    rating: 4.5,
    category: "Romance",
    tags: ["Gothic", "Drama"],
    totalPages: 500,
    publisher: "Smith, Elder & Co.",
    yearOfPublishing: 1847,
  },
  {
    bookId: 9,
    bookName: "Animal Farm",
    author: "George Orwell",
    image: "/hero_img.jpg",
    rating: 4.6,
    category: "Satire",
    tags: ["Political", "Classic"],
    totalPages: 112,
    publisher: "Secker & Warburg",
    yearOfPublishing: 1945,
  },
  {
    bookId: 10,
    bookName: "Brave New World",
    author: "Aldous Huxley",
    image: "/hero_img.jpg",
    rating: 4.2,
    category: "Dystopian",
    tags: ["Sci-Fi", "Future"],
    totalPages: 311,
    publisher: "Chatto & Windus",
    yearOfPublishing: 1932,
  },
  {
    bookId: 11,
    bookName: "The Alchemist",
    author: "Paulo Coelho",
    image: "/hero_img.jpg",
    rating: 4.7,
    category: "Philosophical",
    tags: ["Adventure", "Inspiration"],
    totalPages: 208,
    publisher: "HarperTorch",
    yearOfPublishing: 1988,
  },
  {
    bookId: 12,
    bookName: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    image: "/hero_img.jpg",
    rating: 4.9,
    category: "Fantasy",
    tags: ["Epic", "Adventure"],
    totalPages: 1178,
    publisher: "Allen & Unwin",
    yearOfPublishing: 1954,
  },
];

const BooksPage = () => {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">All Books</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {booksData.map((book) => (
          <BookCard key={book.bookId} book={book} />
        ))}
      </div>
    </div>
  );
};

export default BooksPage;