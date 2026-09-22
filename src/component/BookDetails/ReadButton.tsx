'use client';
import { BookContex } from '@/context/BookProvider';
import { IBook } from '@/type/Book';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const ReadButton = ({book}:{book:IBook}) => {

const {readbook, setReadBook} = useContext(BookContex) as {
    readbook:IBook[];
    setReadBook:React.Dispatch<React.SetStateAction<IBook[]>>;
};

const handleReadBook = () =>{
    setReadBook([...readbook,book]);
    toast.success(`You have read ${book.bookName}`)
}

    return (
        <button className="btn btn-primary text-white" onClick={()=>
            handleReadBook()
        }>Read</button>
    );
};

export default ReadButton;