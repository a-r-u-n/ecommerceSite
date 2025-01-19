import React, { useContext, useEffect, useState } from 'react';
import './Product.css';
import { ShopContext } from '../context/ShopContext';
import { useParams } from 'react-router-dom';
import ProductDisplay from '../Assets/ProductDisplay';
import DescriptionBox from '../Assets/DescriptionBox';
const Product = (props) => {
  const {all_product} =useContext(ShopContext);
  const {productId} = useParams();
  const [product, setProduct] = useState({});
  console.log(productId);
 useEffect(()=>{
  const foundProduct=all_product.find((e)=>e.id===Number(productId));
  setProduct(foundProduct);console.log(foundProduct);},[all_product,productId])
  console.log(product);
  return (
    <div>
<ProductDisplay product={product}/>
<DescriptionBox />
    </div>
  )
}

export default Product