import './Cart.css';
import { useDispatch, useSelector } from 'react-redux';

const Cart = ()=>{

    const cart = useSelector((state) => state);
    const dispatch = useDispatch();



    // console.log(cart);
    const addition = (acc, currentvalue)=>{
        return acc + currentvalue.price * currentvalue.quantity;
        }

    let total = cart.reduce(addition, 0);

    let selected_cart = cart.map((items)=>{



      
        return(
            <>
            <div className="cart__product_details cart__lines">
            <img className='cart__product_details_img cart_selected_img' src={items.image} alt="" />
                            
                            <div className="cart__product_more__meta_details">
                                    <span className="cart__product_details_title">
                                        {/* <a href="" className='cart__product_details_title_link'>WD_BLACK 1TB SN850X NVMe Internal Gaming SSD Solid State Drive - Gen4 PCIe, M.2 2280, Up to 7,300 MB/s - WDS100T2X0E</a> */}
                                        <a href="" className='cart__product_details_title_link'>{items.title}</a>
                                    </span>
                                    <span className="cart__product_details_price">
                                        {items.price * items.quantity}
                                    </span>
                                    <span className="cart__product_details_available">
                                        In Stock
                                    </span>
                                    <span className="cart__product_details_gift_available">
                                            <input type="checkbox" />
                                            <span>This is a gift<a href=""> Learn more</a></span>
                                    </span>
                                    <span className="cart__product_details_meta">
                                            <p>
                                            <span className='cart__product_details_meta_tags'>Capacity: </span>
                                            <span className='cart__product_details_meta_tags_details'>1TB</span>
                                            </p>

                                            <p>
                                            <span className='cart__product_details_meta_tags'>Style:  </span>
                                            <span className='cart__product_details_meta_tags_details'>SN850X - Up to 7,300 MB/s</span>
                                            </p>
                                            <p>
                                            <span className='cart__product_details_meta_tags'>Pattern:  </span>
                                            <span className='cart__product_details_meta_tags_details'>SSD</span>
                                            </p>
                                    </span>

                                    <div className="cart__product_details_actions">
                                        <div className="cart__product_details_actions_qty">
                                            {/* <select name="" id="">
                                                <option value="">Qty: 1</option>
                                                <option value="">Qty: 1</option>
                                                <option value="">Qty: 1</option>
                                                <option value="">Qty: 1</option>
                                                <option value="">Qty: 1</option>
                                                <option value="">Qty: 1</option>
                                            </select> */}

                                            <button className='cart__inc_dec_btn' onClick={()=> dispatch({ type: "INCREMENT" , payload : items})}>+</button><span>{items.quantity}</span>
                                            <button className='cart__inc_dec_btn' onClick={ items.quantity > 1 ? ()=> dispatch({ type: "DECREMENT" , payload : items})  : ()=> dispatch({ type: "removefromcart" , payload : items})}>-</button>
                                        </div>
                                        <i className='cart__product_details_actions_splitters'>|</i>

                                        <a  onClick={(e)=> dispatch({ type: "removefromcart", payload: items})} className='cart__product_details_actions_links'>Delete</a>
                                        <i className='cart__product_details_actions_splitters'>|</i>

                                        <a href="" className='cart__product_details_actions_links'>Save for later</a>
                                        <i className='cart__product_details_actions_splitters'>|</i>

                                        <a href="" className='cart__product_details_actions_links'>Compare with similar items</a>
                                        <i className='cart__product_details_actions_splitters'>|</i>

                                        <a href="" className='cart__product_details_actions_links'>Share</a>
                                    </div>
                            </div>
                            </div>
            </>
            
        )
    })
    return(
        <div className='cart__products'>
            <div className="cart__container">
                <div className="cart__left">
                    <h2 className='cart__lines'>Shopping Cart</h2>
                            {selected_cart}
                    
                    
                    
                </div>
                <div className="cart__right">
                    <div className="cart__right_subtotal">
                        <span>Subtotal ({cart.length} items): </span>
                        <span>${total}</span>
                    </div>

                    <div className="cart__right_gift">
                        <div className="cart__right_gift_container">
                            <input type="checkbox" />
                            <span>This order contains a gift</span>
                        </div>

                        <button>Proceed to checkout</button>
                    </div>
                </div>  
            </div>
        </div>
    )
}

export default Cart;