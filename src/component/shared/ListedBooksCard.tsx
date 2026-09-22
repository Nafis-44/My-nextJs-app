import BookDetailPage from '@/app/books/[id]/page';
import { IBook } from '@/type/Book';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ListedBooksCard = ({ book }:{book: IBook}) => {
    return (
        <div className="card bg-base-100 shadow-md border border-gray-200">
            <div className="flex flex-col sm:flex-row">

                {/* Book Image */}
                <figure className="sm:w-48 h-64 sm:h-auto">
                    <Image
                        src="https://images.unsplash.com/photo-1543002588-bfa74002ed7e"
                        alt="Book cover"
                        className="w-full h-full object-cover"
                        width={300}
                        height={400}
                    />
                </figure>

                {/* Book Details */}
                <div className="card-body">
                    <h2 className="card-title text-2xl">
                        The Silent Library
                    </h2>

                    <p className="text-gray-500">
                        A beautiful journey through stories, memories, and forgotten pages.
                    </p>

                    <div className="mt-2">
                        <p><span className="font-semibold">Author:</span> James Wilson</p>
                        <p><span className="font-semibold">Category:</span> Fiction</p>
                        <p><span className="font-semibold">Published:</span> 2024</p>
                    </div>

                    <div className="card-actions justify-between items-center mt-4">
                        <span className="text-xl font-bold text-primary">
                            $24.99
                        </span>

                        <Link href={`/books/${book.bookId}`}> <button className="btn btn-primary">
                            View Details
                        </button></Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ListedBooksCard;