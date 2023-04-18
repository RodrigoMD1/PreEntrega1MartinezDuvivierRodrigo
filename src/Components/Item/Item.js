import '../styles/Item.css'

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ItemCount from '../ItemCount/ItemCount';
import ItemDetail from '../ItemDetail/ItemDetail';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';

const Item = ({ id, name, Image, price, stock }) => {
  const [showDetail, setShowDetail] = useState(false);

  const handleAdd = (quantity) => {
    console.log('cantidad agregada', quantity);
  };

  return (
    <div className='EstiloLista'>
      <div className='containerr'>
        <div className='card'>
          <img src={Image}></img>
          <h4 className='NombrePrincipal'>{name}</h4>
          <p>{price}$</p>
          <p>cantidad disponible {stock}</p>
          <ItemCount initial={1} stock={15} onAdd={handleAdd} />
          <a href='#' onClick={(e) => {e.preventDefault(); setShowDetail(!showDetail);}}>
            {showDetail ? 'Ocultar detalles' : 'Ver detalles'}
          </a>
          {showDetail && <ItemDetailContainer />}
        </div>
      </div>
    </div>
  )
}

export default Item;
