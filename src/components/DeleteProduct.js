import React from 'react'

const DeleteProduct = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      rowGap: '20px'
    }}>
      <h3>Delete a Product</h3>
      <form action="">
        <input type="number" placeholder='Type Id...'name='id' />
        <button type='submit'>Delete Product</button>
      </form>
    </div>
  )
}

export default DeleteProduct