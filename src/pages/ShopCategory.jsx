import React, { useContext, useEffect, useState } from 'react'
import {ShopContext} from '../context/ShopContext'
import dropdown_icon from '../Assets/dropdown_icon.png'
import Items from '../Assets/Items';
import './ShopCategory.css'
import Footer from '../Assets/Footer';
const ShopCategory = (props) => {
  console.log(props.category);
  const {all_product}= useContext(ShopContext);
  const [categoryProducts,setCategoryProducts]=useState([]);
  useEffect(()=>{
  const filteredProducts =all_product.filter((item)=>{ return props.category===item.category});
  setCategoryProducts(filteredProducts);},[props.category,all_product]);

  return (
    <div className='ShopCategory'> 
<img className='banner' src={props.banner}></img>
<div className="shopcategory-index">
  <p>
    <span>Showing 1-12 </span> of 36 products.
  </p>

<div className='shopcategory-sort'>
 <p>Short By <img src={dropdown_icon}></img></p>
</div>
</div>
<div className='shopcategory-products'>
  {categoryProducts.map((item,index)=>{
      return <Items key={index} id={item.id} name={item.name} image={item.image} oldPrice={item.old_price} newPrice={item.new_price} />})}
</div>
<div className='explore-more'>
  Explore More
</div>

    </div>

  )
}

export default ShopCategory