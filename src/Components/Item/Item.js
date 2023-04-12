import '../styles/Item.css'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



const Item = ({id, name,Image,price,stock}) => {

    return(

        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          ${price} en stock hay  {stock}
        </Card.Text>
        <Button variant="primary">comprar</Button>
      </Card.Body>
    </Card>


    )
}

export default Item