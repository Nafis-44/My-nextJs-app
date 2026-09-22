import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IBook } from "@/type/Book"; // আপনার Type Path অনুযায়ী

const BookCard = ({ book }: { book: IBook }) => {
  const {
    // bookId,
    bookName,
    author,
    image,
    rating,
    category,
    tags,
    totalPages,
    publisher,
    yearOfPublishing,
  } = book;

  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-all border border-gray-100 flex flex-col justify-between">
      <div>
        {/* Image & Overlay Badges Container */}
        <div className="relative w-full h-52 rounded-xl overflow-hidden bg-gray-100 mb-4">
          <Image
            src={image}
            alt={bookName}
            fill
            className="object-cover"
          />
          {/* Category Badge (Top Left) */}
          <span className="absolute top-3 left-3 bg-white/80 backdrop-blur-md text-gray-800 text-xs font-medium px-2.5 py-1 rounded-full shadow-sm">
            {category}
          </span>
          {/* Rating Badge (Top Right) */}
          <span className="absolute top-3 right-3 bg-black/60 backdrop-blur-md text-white text-xs font-semibold px-2.5 py-1 rounded-full flex items-center gap-1">
            ★ {rating}
          </span>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-2">
          {tags?.map((tag, index) => (
            <span
              key={index}
              className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Book Title & Author */}
        <h3 className="text-lg font-bold text-gray-800 line-clamp-1">{bookName}</h3>
        <p className="text-sm text-gray-500 mb-3">By: {author}</p>

        {/* Additional Info (Pages, Publisher, Year) */}
        <div className="flex items-center justify-between text-xs text-gray-400 border-t border-dashed pt-3 my-3">
          <span>{totalPages} Pages</span>
          <span className="line-clamp-1 max-w-20">{publisher}</span>
          <span>{yearOfPublishing}</span>
        </div>
      </div>

      {/* View Details Button */}
      <Link
        href={`/books/${book.bookId}`}
        className="w-full mt-2 py-2.5 bg-indigo-900 hover:bg-indigo-950 text-white font-medium rounded-xl text-center text-sm transition-colors block"
      >
        View Details →
      </Link>
    </div>
  );
};

export default BookCard;





