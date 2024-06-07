import React from 'react'
import { products } from '../../data.js';
import Product from '../product/Product'

const ProductList = () => {
  return (
    <div className=' container mx-auto px-[50px] py-[100px]'>
      <div className="text flex items-center flex-col justify-center mb-20">
        <h2 className='font-medium text-[30px] mb-1'>The world’s destination for design</h2>
        <p className='text-[18px] text-gray-600 w-[60%] text-center'>Get inspired by the work of millions of top-rated designers & agencies around the world.</p>
      </div>
      <div className="container mx-auto product grid md:grid-cols-3 sm:grid-cols-2 gap-8">
        {products.map(item => (
          <Product key={item.id} img={item.image}/>
        ))}
      </div>
    </div>
  )
}

export default ProductList
