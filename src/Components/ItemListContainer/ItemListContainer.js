import { useEffect, useState } from 'react'
import '../styles/ItemListContainer.css'
import { getProducts } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'




const ItemListContainer = ({ greeting }) => {
    const[products, setProducts] = useState([])

    useEffect(() => {
        getProducts()
        .then(response =>{
            setProducts(response)
        })
        .catch(error => {
            console.log(error);
        })
    }, [])




 return(
    <div className='BodyContainer'>
        <h1>
            {greeting}
        </h1>

        <ItemList products={products}/>
        

    </div>
 )
}

export default ItemListContainer