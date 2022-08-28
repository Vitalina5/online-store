import { useDispatch } from 'react-redux';
import dataHandbag from '../../data/dataHandbag'; 
import { removeItemFromCart } from '../../redux/cartSlice';

const CartItem = ({cartItem}) => {
    const handbags = dataHandbag.find(item => item.id === cartItem.bagId);
    const dispatch = useDispatch();

    return (<div>
        <div className='contCart'>
        <p className='par'>{handbags.name}</p>
        <p className='par'>{cartItem.quantity}</p>
        <p className='par'>Ціна: {handbags.price * cartItem.quantity} грн.</p>
        <span onClick={() => dispatch(removeItemFromCart({cartItemId: cartItem.id}))}>
        <img className='icon' src='https://img.icons8.com/material-outlined/48/000000/trash--v1.png' alt='icon'/> 
        </span>
        </div>
    </div>)
}

export default CartItem;