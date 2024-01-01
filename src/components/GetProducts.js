import React from 'react'
import ItemProduct from './ItemProduct'
import Loading from './Loading'

const GetProducts = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      rowGap: '50px'
    }}>
      <Loading />
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
    </div>
  )
}

export default GetProducts