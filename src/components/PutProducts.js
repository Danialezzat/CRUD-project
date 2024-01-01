import axios from 'axios';
import React, { useState } from 'react'

const PutProducts = () => {
  const [inputValue, setInputValue] = useState({
    id: '',
    title: '',
    category: '',
    description: '',
    price: '',
    image: ''
  })


  
  const onInputChange = (event) => {
    switch (event.target.name) {
      case 'id':
        setInputValue({...inputValue, id: event.target.value});
        break;
      case 'title':
        setInputValue({...inputValue, title: event.target.value});
        break;
      case 'category':
        setInputValue({...inputValue, category: event.target.value});
        break;
      case 'description':
        setInputValue({...inputValue, description: event.target.value});
        break;
      case 'price':
        setInputValue({...inputValue, price: event.target.value});
        break;
      case 'file':
        setInputValue({...inputValue, image: event.target.files[0]});
        break;
    
      default:
        break;
    }
  };

  const putData = (event) => {
    event.preventDefault();
    
    axios.put(`/products/${inputValue.id}` , inputValue).then(response => {
    }).catch(error =>{

    })
  }



  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      rowGap: '20px'
    }}>
      <h3>Edit a Product</h3>
      <form onSubmit={putData}>
        <input onChange={onInputChange} value={inputValue.id} type="number" placeholder='Id'name='id' />
        <input onChange={onInputChange} value={inputValue.title} type="text" placeholder='Title'name='title' />
        <input onChange={onInputChange} value={inputValue.category} type="text" placeholder='Category'name='category' />
        <input onChange={onInputChange} value={inputValue.description} type="text" placeholder='Description'name='description' />
        <input onChange={onInputChange} value={inputValue.price} type="number" placeholder='Price'name='price' />
        <input onChange={onInputChange} type="file" name='file' />
        {inputValue.title
        && inputValue.id
        && inputValue.category
        && inputValue.price
        && inputValue.description 
        && inputValue.image 
        &&
          <button type='submit'>Edit Product</button>
        }
      </form>
    </div>
  )
}

export default PutProducts