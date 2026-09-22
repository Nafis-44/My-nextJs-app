'use client';
import React, { createContext, ReactNode, useState } from 'react';

 export const BookContex = createContext({})


const BookProvider = ({children}:{children:ReactNode}) => {

const [readbook, setReadBook] = useState([]);
const [wishlist, setWishList] = useState([]);


const sharedData = {
    readbook,
    setReadBook,
    wishlist,
    setWishList,
};


    return <BookContex.Provider value={sharedData}>{children}</BookContex.Provider>
};

export default BookProvider;