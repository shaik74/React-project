import React from 'react';


const Book = () =>{
const image='https://m.media-amazon.com/images/I/81+PHjGRAqL._AC_UY218_.jpg';
const title="World's Greatest Library : A Collection Of 200 Inspiring Personalities (Box Set of 8 Biographies)";
const author='by Wonder House Books ';
const price='₹599';
    return(
        <article className='book'>
            <div className='book_img-container'>
        <img src={image} alt ={title} className='book-img' />
        </div>
        <h3 className='book-title'>{title}</h3>
        <h4 className='book-author'>{author}</h4>
        <h5 className='book-price'>{price}</h5>
        </article>
    );
};

export default Book; 
