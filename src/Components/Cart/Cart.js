import { useSelector } from 'react-redux';
import { getCarItems, getTotalPrice } from '../../redux/cartSlice';
import CartItem from './CartItem';

const Cart = () => {
    const cartItem = useSelector(getCarItems);
    const totalPrice = useSelector(getTotalPrice)
    
    return (<div>
        <img className='cartIcon' src='https://img.icons8.com/clouds/100/000000/add-shopping-cart.png' alt='cart'/> 
        <div className='cartBlock'>
        <p>Всього: {totalPrice} грн.</p>
        {cartItem.map(cartItem => <CartItem cartItem={cartItem}/>)}
        </div>
        <img className='bag' src='bag.png'  alt='backpack'/>
    </div>)
}

export default Cart;