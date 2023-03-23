import cart from './assets/cart.svg'
import '../styles/CartWidget.css'


const CartWidget = () => {
    return(
        <div>

            <img src={cart} alt="cart-widget" className="lOGO" />
            0
        </div>
    )
}
export default CartWidget