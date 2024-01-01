import React from 'react'

const PutProducts = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      rowGap: '20px'
    }}>
      <h3>Edit a Product</h3>
      <form action="">
        <input type="number" placeholder='Id'name='id' />
        <input type="text" placeholder='Title'name='title' />
        <input type="text" placeholder='Category'name='category' />
        <input type="text" placeholder='Description'name='descriptio' />
        <input type="number" placeholder='Price'name='price' />
        <input type="file" name='file' />
        <button type='submit'>Edit Product</button>
      </form>
    </div>
  )
}

export default PutProducts