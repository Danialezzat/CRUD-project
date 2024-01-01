import React from 'react'

const DeleteProduct = () => {
  return (
    <div>
      <h3>Delete a Product</h3>
      <form action="">
        <input type="number" placeholder='Type Id...'name='id' />
        <button type='submit'>Delete Product</button>
      </form>
    </div>
  )
}

export default DeleteProduct