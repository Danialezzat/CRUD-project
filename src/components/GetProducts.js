import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ItemProduct from './ItemProduct'
import Loading from './Loading'

const GetProducts = () => {
  const [listProducts, setListProducts] = useState([])

  useEffect(() => {
    getAllData()
  }, []);

  const getAllData =() => {
    axios.get(`/products`).then(response => setListProducts(response)).catch(error => console.log(error.message))
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
          {
            listProducts.map((element) => <ItemProduct key={element.id} data={element} />)
          }
      </div>
    </div>
  )
}

export default GetProducts