import SwiperImage from '@/components/Home/SwiperImage'
import Navbar from '@/components/Navbar/Navbar'
import Sales from '@/components/Sales/Sales'
import ShopCategory from '@/components/ShopByCategory/ShopCategory'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar />
      <SwiperImage />
      <ShopCategory />
      <Sales />
    </div>
  )
}

export default page