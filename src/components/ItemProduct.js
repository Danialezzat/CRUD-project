import React from 'react';
import style from './ItemProduct.module.css'

const ItemProduct = () => {
  return (
      <div className={style.IpContainer}>
            <img src="" alt="" />
            <h2>title</h2>
            <span>Category</span>
            <p>Decription</p>
            <div className={style.IpCTA}>
                <span>$20.04</span>
                <button>Add to Cart</button>
            </div>
        </div>
  )
}

export default ItemProduct