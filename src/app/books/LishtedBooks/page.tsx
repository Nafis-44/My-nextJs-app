'use client';
// import BookCard from '@/component/BookCard';
import ListedBooksCard from '@/component/shared/ListedBooksCard';
import { BookContex } from '@/context/BookProvider';
import { IBook } from '@/type/Book';
// import Image from 'next/image';
import React, { useContext, useState } from 'react';

const ListedBooks = () => {
    const { readbook, wishlist } = useContext(BookContex) as {
        readbook:IBook[];
        wishlist:IBook[];
    }

    const [sortBy, setsortBy] = useState<"rating" | "pages" | "year">("rating")
    
    const sortBook = (book:IBook[])=>{
        const sortedBooks = [...book]
        if(sortBy === "rating"){
            sortedBooks.sort((a,b) => b.rating - a.rating)
        }else if(sortBy === "pages"){
            sortedBooks.sort((a,b) => b.totalPages - a.totalPages)
        }else if(sortBy === "year"){
            sortedBooks.sort((a,b) => b.yearOfPublishing - a.yearOfPublishing)
        }
        return sortedBooks;
    

}

    const sortedReadBooks = sortBook(readbook)
    const sortedWishList = sortBook(wishlist)

    return (
        <div className='container mx-auto py-5'>
            <h2 className='font-bold bg-amber-100 text-center py-16 my-4 text-4xl rounded-3xl'>
                Listed Books</h2>

            <div className='text-center'>
                <select value= {sortBy}
                onChange={(e) => setsortBy(e.target.value as "rating" | "pages" | "year")}
                 className="select select-success">
                    <option disabled={false}>Sort By</option>
                    <option value={"rating"}>Rating</option>
                    <option value={"page"}>Numberb Of Page</option>
                    <option value={"year"}>Publised Year</option>
                </select>
            </div>



            {/* name of each tab group should be unique */}
            <div className="tabs tabs-lift">
                <input type="radio" name="my_tabs_3" className="tab" aria-label={`Read Books (${readbook.length})`}
                />
                <div className="tab-content bg-base-100 border-base-300 p-6 space-x-100">
                    {
                        sortedReadBooks.length > 0 ? (
                            sortedReadBooks.map((book: IBook) => {
                                return <ListedBooksCard key={book.bookId} book={book} />
                            })) : (<p className='text-center text-lg font-semibold'>
                                No read Books Found
                            </p>
                        )}
                </div>

                <input type="radio" name="my_tabs_3" className="tab" aria-label={`WishList Books (${wishlist.length})`} defaultChecked />
                <div className="tab-content bg-base-100 border-base-300 p-6">
                    {
                        sortedWishList.length > 0 ? (
                            sortedWishList.map((book: IBook) => {
                                return <ListedBooksCard key={book.bookId} book={book} />
                            })
                        ) : (<p className='text-center text-lg font-semibold'>
                            No read Books Found
                        </p>
                        )}
                </div>

            </div>
        </div>
    );
};

export default ListedBooks;