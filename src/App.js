import React, { useState } from 'react'

import './App.css';
import tshirt from './assets/classic-tee.jpg'

function App() {
  // 
  const productName = 'Classic Tee'
  const productPrice = '$75.00'
  const [cart, setCart] = useState([
    {
      size: 'S',
      count: 0
    },
    {
      size: 'M',
      count: 0
    },
    {
      size: 'L',
      count: 0
    }
  ])
  const [selectedSize, selectSize] = useState('')
  const [error, setError] = useState(false)
  const [display, setDisplay] = useState(false)

  const addToCart = () => {
    // Only add if user selected a size
    if (selectedSize) {
      const idx = cart.findIndex((item => item.size == selectedSize))
      const currentCount = cart[idx].count
      // Replacing the element
      cart[idx] = {
        size: selectedSize,
        count: currentCount + 1
      }      
      setCart(cart)
    } else {
      // Trigger error message
      setError(true)
    }
  }
  
  return (
    <div className='container'>
      {/* Cart */}
      <div className='cart'>
        <button onClick={() => setDisplay(!display)}>My Cart (<span>{cart.length}</span>)</button>
        <div className={`cart-items ${!display ? 'hidden' : ''}`}>
          {cart.map((item, idx) => {
            return (
            <div key={idx} className='details'>
              <img src={tshirt} width={90}/>
              <div>
                <p className='product-name'>{productName}</p>
                <p>{item.count} x <span className='product-price'>{productPrice}</span></p>
                <p>Size: {item.size}</p>
              </div>
            </div>)
          })}
        </div>
      </div>
      <div className='item-view'>
        <img src={tshirt} alt='product-image' className='product-image' />
        <div>
          <h3 className='product-name'>{productName}</h3>
          <p className='product-price'>{productPrice}</p>
          <p className='product-description'>
          Dolor sit amet, consectetur adipiscing elit. Vestibulum imperdiet sem ut sapien faucibus faucibus id imperdiet urna. Etiam sollicitudin pulvinar ipsum, ut venenatis sapien faucibus non. Duis auctor vestibulum rhoncus. Vestibulum leo ligula, commodo ut condimentum ut, facilisis sed metus.
          </p>
          <p className='size'>SIZE 
            <span className='required'>*</span>
            <span className='selected'>{selectedSize}</span>
          </p>
          <div className='options'>
            <p onClick={() => selectSize('S')} className={selectedSize === 'S' ? 'selected' : ''}>S</p>
            <p onClick={() => selectSize('M')} className={selectedSize === 'M' ? 'selected' : ''}>M</p>
            <p onClick={() => selectSize('L')} className={selectedSize === 'L' ? 'selected' : ''}>L</p>
          </div>
          <button
            className='add-button'
            onClick={() => addToCart()}>
            ADD TO CART
          </button>
          {error && <p>Please select a size first!</p>}         
        </div>
      </div>
    </div>
  );
}

export default App;
