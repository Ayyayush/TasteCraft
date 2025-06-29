import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import ItemList from "./ItemList";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    };
    
    return (
        <div className="cart-container text-center m-4 p-4 min-h-screen">
            <h1 className="text-xl md:text-2xl font-bold">Your Cart</h1>
            {cartItems.length === 0 ? (
                <p className="text-gray-600 mt-4">Your cart is empty. Add some delicious items!</p>
            ) : (
                <div className="w-full max-w-4xl mx-auto px-4">
                    <button 
                        className="p-2 m-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                        onClick={handleClearCart}
                    >
                        Clear Cart
                    </button>
                    <p className="text-gray-600 mt-4">Items in your cart:</p>
                    <ItemList items={cartItems.map(item => ({ card: { info: item } }))} />
                </div>
            )}
        </div>
    );
}

export default Cart;