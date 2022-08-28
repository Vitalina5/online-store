import { getselectedCategory, filterCategory } from '../../redux/purseSlice';
import { useDispatch ,useSelector } from 'react-redux';

const Filter = ({category}) => {
    const dispatch = useDispatch();
    const selectedCategory = useSelector(getselectedCategory);

    return(<div>
       <p onClick={() => {dispatch(filterCategory(category))}} className={selectedCategory === category ? 'categoryButtonSelected categoryButton' : 'categoryButton'} >{category}</p>
    </div>)
}

export default Filter;