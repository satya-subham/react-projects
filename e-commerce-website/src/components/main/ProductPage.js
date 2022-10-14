import React, { useState, useEffect } from 'react'
import axios from 'axios'

export function ProductPage() {
    const [products, setProducts] = useState([])

    useEffect(()=>{
        axios
        .get(`https://dummyjson.com/products`)
        .then((response)=>{
            console.log(response.data['products']);
            setProducts([...response.data['products']])
        }).catch(()=>{})
    },[])
  return (
    <>
    <main>
        <div className='products_main_container'>
          <div className='products_heading_div'>
          <h1>Products</h1>
          </div>
            {
              products.map((item)=>(
                <div className='product_container'>
                  <img src={item.images[0]} alt='product img'/>
                </div>
              ))
            }
        </div>
    </main>
    </>
  )
}
