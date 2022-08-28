const ChangeQuantity = ({quantity, setQuantity}) => {

    const addQuantity = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity)
    }

    const removeQuantity = () => {
        if (quantity <= 1) return;
        const newQuantity = quantity - 1;
        setQuantity(newQuantity)
    }

    return (<div>
        <button className='btnAddToCart' onClick={addQuantity}>+</button>
        <span className='quantity'> {quantity} </span>
        <button className='btnAddToCart' onClick={removeQuantity}>--</button>
    </div>)
}

export default ChangeQuantity;