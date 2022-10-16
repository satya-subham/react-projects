import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './ProductPage.css'

export function ProductPage(props) {
    const [products, setProducts] = useState([]);
    const [filteredProduct, setFilteredProduct] = useState([]);

    useEffect(()=>{
        axios
        .get(`https://dummyjson.com/products`)
        .then((response)=>{
            setProducts([...response.data['products']]);
            setFilteredProduct([...response.data['products']])
        }).catch(()=>{})
    },[])

    useEffect(()=>{
      let filterItem = products.filter((item)=>{
        if(item.brand){
          return item.brand.toLowerCase().includes(props.search.toLowerCase())
        }
      })
      setFilteredProduct(filterItem);
    },[props.search])
  return (
    <>
    <main>
        <div className='products_main_container'>
          <div className='products_heading_div'>
          <h1>Products</h1>
          </div>
            {
              filteredProduct.map((item)=>(
                <div className='product_container'>
                  <div className='product_img_div'>
                  <h2>{item.brand}</h2>
                  <img src={item.images[0]} alt='product img' width='200px' height='200px'/>
                  </div>
                  <h3>{item.title}</h3>
                  <h4>{item.category}</h4>
                  <h>"{item.description}"</h>
                  <h4>Price : $ {item.price} <del>{item.discountPercentage}</del> % off</h4>
                  <h4>Rating : {item.rating}</h4>
                  <button>Add</button>
                  <button>Buy</button>
                </div>
              ))
            }
        </div>
    </main>
    </>
  )
}
