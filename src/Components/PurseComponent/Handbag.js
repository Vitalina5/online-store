import ChangeQuantity from '../Cart/ChangeQuantity';
import { useState } from 'react';
import { addItemToCart } from '../../redux/cartSlice';
import { useDispatch } from 'react-redux';


const Handbag = ({bag}) => {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    return (<div>
        <img className='purse' src={`./${bag.img}.jpg`} alt='bag' width='400px'/>
        <h2>{bag.name}</h2>
        <p>{bag.price} грн.</p>
        <ChangeQuantity quantity={quantity} setQuantity={setQuantity} />
        <button className='btnAddToCart' onClick={() => {dispatch(addItemToCart({bag, quantity}));
    }}>ADD TO CART</button>
    </div>)
}
export default Handbag;