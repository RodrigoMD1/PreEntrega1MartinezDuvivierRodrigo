import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { getProductById } from '../../asyncMock'


const ItemDetail = ({ id, name, Image, category, description, price, stock }) => {
    return (
        <h2 className='Descripcion'>

            descripcion:  {description}

        </h2>
    )
}

export default ItemDetail