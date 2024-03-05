import React from 'react'
import CategoryItems from './CategoryItems'
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../utils/redux/cartSlice';


const Cart = () => {
  const dispatch = useDispatch();
  const  cartItems = useSelector((store) => store.cart.item);
  const clearCartHandler = () =>
  {
   dispatch(clearCart());
  }

    return (
<div className="cart">
        <h2>Cart</h2>
    <CategoryItems items={cartItems} />
        {cartItems.length === 0 ? <p>  Your Cart is empty, Please add some items to the cart</p> : <button className='rate_btn' onClick={clearCartHandler}>
          clear cart
        </button>}
      
</div>
        )
}

export default Cart