import React from 'react';
import style from './ItemProduct.module.css'

const ItemProduct = (props) => {
  const {title, category, image,description, price} = props.data;


  return (
      <div className={style.IpContainer}>
            <img src={image} alt="" />
            <h2>{title.substring(0, 20)}</h2>
            <span>{category}</span>
            <p>{description.substring(0, 60)}</p>
            <div className={style.IpCTA}>
                <span>${price}</span>
                <button>Add to Cart</button>
            </div>
        </div>
  )
}

export default ItemProduct