import React from 'react'
import ItemProduct from './ItemProduct'

const GetProducts = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
      width: "90%",
      margin: 'auto'
    }}>
        <ItemProduct />
        <ItemProduct />
        <ItemProduct />
        <ItemProduct />
        <ItemProduct />
        <ItemProduct />
        <ItemProduct />
    </div>
  )
}

export default GetProducts