import axios from 'axios';
import React, { useState } from 'react'

const AddProducts = () => {

  const [inputValue, setInputValue] = useState({
    title: '',
    category: '',
    description: '',
    price: '',
    image: ''
  })

  let formData = new FormData();

  const onInputChange = (event) => {
    switch (event.target.name) {
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
  }

  const postData = (event) => {
    event.preventDefault();
    
    axios.post(`/products` , inputValue).then(response => {
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
      <h3>Add a New Product</h3>
      <form action="" onSubmit={postData}>
        <input value={inputValue.title} onChange={onInputChange} type="text" placeholder='Title' name='title' />
        <input value={inputValue.category} onChange={onInputChange} type="text" placeholder='Category' name='category' />
        <input value={inputValue.description} onChange={onInputChange} type="text" placeholder='Description' name='description' />
        <input value={inputValue.price} onChange={onInputChange} type="number" placeholder='Price' name='price' />
        <input onChange={onInputChange} type="file" name='file' />

        {/* showing button if everyfield is filled */}
        {inputValue.title && inputValue.category && inputValue.price && inputValue.description && inputValue.image &&
          <button type='submit'>Add Product</button>
        }
      </form>
    </div>
  )
}

export default AddProducts