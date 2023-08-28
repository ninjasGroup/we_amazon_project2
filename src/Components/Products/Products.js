import React from 'react'

function Products({products}) {

    // let something = products.slice(0, 8);
  let allproducts =   products.map((items)=>{
        return(
            <div className="box__product">
          
                <div className="box__product_heading">
                    <h2>{items.title.substr(0, 20)}</h2>
                </div>

                <div className="box__img">
                    <img className='box__product_img img-cover' src={items.image} alt="" />
                </div>
                
                <div className="box__product_link">
                    <a href="">Shop now</a>
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