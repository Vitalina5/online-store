import dataHandbag from '../../data/dataHandbag';
import Handbag from './Handbag';
import { getselectedCategory } from '../../redux/purseSlice';
import { useSelector } from 'react-redux';


const Handbags = () => {
    const selectedCategory = useSelector(getselectedCategory);
    return (<div>
        {dataHandbag
        .filter(bag => {
            if (selectedCategory === 'УСІ СУМКИ') return true;
            return selectedCategory === bag.category;
        })
        .map((bag, index) => <Handbag bag={bag} 
        key={index} />)}
    </div>)
}

export default Handbags;