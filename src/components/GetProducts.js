import axios from 'axios';
import React, { useEffect } from 'react';
import ItemProduct from './ItemProduct'
import Loading from './Loading'

const GetProducts = () => {


  useEffect(() => {
    getAllData()
  }, []);

  const getAllData =() => {
    axios.get(`/products`).then(response => console.log(response)).catch(error => console.log(error.message))
  };



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