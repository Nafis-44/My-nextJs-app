// import Banner from '@/component/homepage/Banner';
// import BookCard from '@/component/BookCard';
import Banner from '@/component/homepage/Banner';
import BooksList from '@/component/homepage/Books';
import Navber from '@/component/shared/Navber';
import React from 'react';

const page = () => {
  return (
    <div>
      <Navber/>
         <Banner/>
        <BooksList/>
        {/* <BookCard/>
       */}
    </div>
  );
};

export default page;