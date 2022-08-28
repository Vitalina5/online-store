const Button = () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });

    return (<div className='contBtn'>
        <button className='btn' onClick={Button} type='button'><img className='arrow' src='icon-up-arrow.png' alt='arrow'/></button>
        </div>
    )
}

export default Button;