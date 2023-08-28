import React from 'react'
import './Products.css';


// Redux
import { useDispatch, useSelector } from 'react-redux';

function Products({products}) {

    const cart = useSelector(state => state);
    const dispatch = useDispatch();

    // let something = products.slice(0, 8);
  let allproducts =   products.map((items)=>{
    items.quantity = 1;
        return(
            <div className="box__product">
          
                <div className="box__product_heading">
                    <h2>{items.title.substr(0, 20)}</h2>
                </div>

                <div className="box__img">
                    <img className='box__product_img img-cover' src={items.image} alt="" />
                </div>
                
                <div className="box__product_link">
                    {/* <a href="">Shop now</a> */}
                    <button onClick={()=>dispatch({ type: "addtocart", payload: items })} className='products__addto_cart'>Add to Cart</button>
                </div>
                
        </div>
        )
    })

    
  return (
    
        <>

            {allproducts}
        
        </>


      
  )
}

export default Products