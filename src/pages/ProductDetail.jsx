import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useProductStore } from '../stores/useProductStore'
import { useCartStore } from '../stores/useCartStore'

const ProductDetail = () => {
  const {id}= useParams();
  const {singleProduct, product}= useProductStore();
  const {addToCart}=useCartStore();

  useEffect(()=>{
    singleProduct(id);
  },[singleProduct])
console.log(product)
const handleAddToCart =()=>{
  addToCart(product);
  toast.success("Product added to cart successfully!");
 // window.location.href = '/cart'; // Redirect to cart page after adding product to cart
}

  return (
<div className='container w-[80%]  m-auto my-24'>
  <div className='flex flex-col md:flex-row justify-between border border-gray-400 rounded-md text-gray-500 mb-10 lg:mb-0 p-10'>
    <div className='w-full md:w-1/2 '>
      <img className='w-full h-64 object-contain object-center' src={product?.detail.image} alt='Product Image'/>
    </div>
    <div className='text-center my-10 mx-12 w-full md:w-1/2'>
      <h1 className='text-2xl font-bold mb-4'>{product?.name}</h1> 
      <p className='py-2'>{product?.description}</p>
      <p className='py-3 '>Price: ${product?.price}</p>
      <button className='bg-blue-500 hover:bg-blue-700  text-white font-bold py-2 my-5 px-4 rounded' onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  </div>
</div>

  )
}

export default ProductDetail