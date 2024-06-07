import React from 'react'
import "./product.css"
const Product = ({img}) => {
  return (
    <div className='text-center h-[40vh] border-2 rounded-t-lg overflow-hidden'>
      <div className="browser h-[30px] bg-slate-300 flex items-center sticky z-10">
        <div className="circle h-[10px] w-[10px] bg-slate-100 rounded-full ml-3"></div>
        <div className="circle h-[10px] w-[10px] bg-slate-100 rounded-full ml-3"></div>
        <div className="circle h-[10px] w-[10px] bg-slate-100 rounded-full ml-3"></div>
      </div>
      <a href="http://lama.dev" target='_blank' rel='noreferrer'>
        <img src={img} alt="" className='img w-[100%] ' />
      </a>
    </div>
  )
}

export default Product
