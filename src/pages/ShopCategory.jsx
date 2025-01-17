import React, { useContext, useEffect, useState } from 'react'
import {ShopContext} from '../context/ShopContext'
import dropdown_icon from '../Assets/dropdown_icon.png'
import Items from '../Assets/Items';


const ShopCategory = (props) => {
  const {all_product}= useContext(ShopContext);
  const [categoryProducts,setCategoryProducts]=useState([]);
  useEffect(()=>{
  const filteredProducts =all_product.filter((item)=> props.category===item.category);
  setCategoryProducts(filteredProducts);},[props.category,all_product]);

  return (
    <div className='ShopCategory'> 
<img src={props.banner}></img>
<div className="shopcategory-index">
  <p>
    <span>Showing 1-12 </span> of 36 products.
  </p>
</div>
<div className='shopcategory-sort'>
  <img src={dropdown_icon}></img>
</div>
<div className='shopcategory-products'>
  {categoryProducts.map((item,index)=>(
      <Items key={index} id={item.id} name={item.name} image={item.image} oldPrice={item.old_price} newPrice={item.new_price} />))}
</div>
    </div>
  )
}

export default ShopCategory