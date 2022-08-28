import './App.css';
import Handbags from './Components/PurseComponent/Handbags';
import AllCategories from './Components/Filter/AllCategories';
import Cart from './Components/Cart/Cart';
import Button from './Components/Button';

function App() {
  return (
    <div>
    <div className='cont'>
    <div className='block'>
      <AllCategories />
      <Cart />
    </div>
    <div className='block'>
      <Handbags />
    </div>
    </div>
    <Button />
    </div>
  );
}

export default App;
