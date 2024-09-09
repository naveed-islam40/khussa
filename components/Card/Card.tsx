import Image from 'next/image';
import React from 'react';

interface CardElement {
  image?: string;
  title?: string;
  crossPrice?: number;
  originalPrice?: number;
  save?: number;
}


const Card: React.FC<CardElement> = ({ image, title, crossPrice, originalPrice, save }) => {
  return (
    <section className='flex flex-col items-center justify-center my-5'>
      <div>
       {image &&  <Image src={image} alt="Sales" width={300} height={200} className='rounded-md' />}
      </div>
      <div className='flex flex-col gap-3 mt-3 justify-center items-center font-fira'>
        <h2 className='font-[600]'>{title}</h2>
       <div className='flex justify-center items-center gap-3'>
       <del>Rs.{crossPrice}</del>
        <p>Rs.{originalPrice}</p>
        <p className='text-lime-700'>Save: {save} %</p>
       </div>
      </div>
    </section>
  );
};

export default Card;
