'use client';
import { BookContex } from '@/context/BookProvider';
import { IBook } from '@/type/Book';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const WishListButton = ({book}:{book:IBook}) => {

const {wishlist, setWishList} = useContext(BookContex) as {
    wishlist:IBook[];
    setWishList:React.Dispatch<React.SetStateAction<IBook[]>>;
};

const handleAddtoWishList = () =>{
    setWishList([...wishlist,book]);
    toast.success(`You have read ${book.bookName}`)
}

    return (
        <button className="btn btn-primary text-white" onClick={()=>
            handleAddtoWishList()
        }>Add To Wishlist</button>
    );
};

export default WishListButton;