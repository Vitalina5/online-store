import Filter from './Filter';
 
const AllCategories = () => {
    return (<div>
        <h1>Які сумки вам до вподоби?</h1>
        {['КЛАСИКА' , 'КЛАТЧІ','СУМКИ-КОРОБКИ', 'КРУГЛІ СУМКИ', 'САКВОЯЖІ', 'УСІ СУМКИ']
        .map((category, index) => <Filter category={category} 
        key={index} />)}
    </div>)
}

export default AllCategories;