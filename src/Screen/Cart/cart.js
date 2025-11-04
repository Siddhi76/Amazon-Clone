import React, { useState, useEffect } from 'react'
import './cart.css';
import { useSelector, useDispatch } from 'react-redux';
import {toast,ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { removeFromCart } from '../../redux/actions/actions';



const Cart = () => {
    const [cartItem, setCartItem] = useState([]);
    const dispatch = useDispatch();

    const cartItems = useSelector((state) => state.cart.items);

    let a = 0;
    let cost = cartItems.map((item) => { return a = a + item.price })

    
    useEffect(() => {
        setCartItem(cartItems);
    }, [cartItems])

    const handleRemoveFromCart = (id) =>
    {
        toast.error("Removed from cart",{
                position: 'bottom-right'
            });
        dispatch(removeFromCart(id));

    }
    return (
        <div className="cart">
            <div className="topLeftCart">
                <div className="topLeftCartTitle">Shopping Cart</div>
                <div className='deselectAllCart'>Deselcet all items</div>
                <div className="cartPriceTextDivider">Price</div>

                <div className="cartItemDiv">

                    {
                        cartItems.map((item, ind) => {
                            return (
                                <div className="cartItemBlock">
                                    <div className="cartItemLeftBlock">
                                        <div className="cartItemLeftBlockImage">
                                            <img className='cartItemLeftBlockImg' src={item.imageUrl} />
                                        </div>
                                        <div className="cartItemLeftBlockDetails">
                                            <div className="cartItemProductName">{item.name}</div>
                                            <div className="inStockCart">In Stock</div>
                                            <div className="elgFreeShp">Eligible for FREE Shipping</div>
                                            <div className="amazonfulfilledImage"><img className='fulfilling' src="" /> </div>
                                            <div className="removeFromCart" onClick={() =>{handleRemoveFromCart(item.id)}}>Remove From Basket</div>
                                        </div>
                                    </div>

                                    <div className="cardItemRightBlock">
                                        Rs {item.price}
                                    </div>
                                </div>
                            );
                        })
                    }


                </div>
            </div>

            <div className="topRightCart">
                <div className="subTotalTitle">Subtotal ({cartItem.length} items) : <span className='subTotalTitleSpan'>Rs {a}</span></div>
                <div className="giftAudio">
                    <input type="checkbox" />
                    <div>This Order Contains a gift</div>
                </div>
                <div className="proceedToBuy">Proceed To Buy</div>

            </div>
            <ToastContainer/>
        </div>
    )
}

export default Cart
