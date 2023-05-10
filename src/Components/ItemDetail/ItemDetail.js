import React, { useContext, useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { getProductById } from '../../asyncMock'
import { link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'


const ItemDetail = ({ id, name, Image, category, description, price, stock }) => {
    const [quantityAdded, setQuantityAdded] = useState(0)

    const{ addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id, name, price
        }

        addItem (item, quantity)
    }


    return (
        <article className='CardItem'>
            <header className='Header'>
                <h2 className='ItemHeader'>
                    {name}
                </h2>
            </header>
            <h2 className='Descripcion'>

                {description}

            </h2>

            <picture>
                <img src={Image} alt={name} className='ItemImg' />
            </picture>
            <section>
                <p className='Info'>
                    Categoria : {category}
                </p>
                <p className='Info'>
                    Descripcion: {description}
                </p>
                <p className='Info'>
                    Precio: ${price}
                </p>

            </section>

            <footer className='ItemFooter'>
                {
                    quantityAdded > 0 ? (
                        <link to='/cart' className='Option'>Terminar Compra</link>
                    ) : (
                        <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
                    )
                }
            </footer>
        </article>

    )
}

export default ItemDetail