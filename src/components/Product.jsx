import React from 'react'
import { Link } from 'react-router-dom'

const Product = ({product}) => {
  const {title,price,thumbnail} = product;


  return (
    <div>
    <Link href={`/product-detail`}>
      <div className="cursor-pointer transform transition-transform ease-linear duration-500 text-[#324d67] hover:scale-110">
        <img
          src={thumbnail}
          width={250}
          height={250}
          className="rounded-lg bg-gray-200 transform transition-transform ease-linear duration-500 w-64 h-64 object-cover"
          
        />
        <p className="font-medium">{title}</p>
        <p className="absolute bottom-3 right-1 transform -rotate-45 pr-1 text-black font-bold mb-6 rounded">${price}</p>
      </div>
    </Link>
  </div>
  )
}

export default Product
