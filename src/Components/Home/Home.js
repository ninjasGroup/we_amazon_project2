import React, { useState } from 'react'
import './Home.css';
import Products from "../Products/Products";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';



function Home({products}) {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    
    <div className="home__area">
        {/* <img className='home__img' src="https://m.media-amazon.com/images/I/71QRxZvKnGL._SX3000_.jpg" alt="" /> */}
        <img className='home__img' src="https://m.media-amazon.com/images/I/81KkrQWEHIL._SX3000_.jpg" alt="" />
    


    
        <div className="boxes">
          {/* <Products products={products} /> */}

          { products.length != 0 ? <Products products={products} /> :   
          <svg class="spinner" viewBox="0 0 50 50">
          <circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle>
        </svg>  }
        </div>

        <div className="splitter">
            <hr color="#ddd" />
            <div className="signin__area_home">
                <span>See personalized recommendations

                  </span>
                  <button className='signin__btn'>Sign in</button>
                  <span>New customer? <a href="">start here.</a>

                </span>
            </div>
            <hr color="#ddd"/>
        </div>


        <footer>
          <div className="backto__top">
              <div className="backto__top_btn">
                <a href="">Back to top</a>
              </div>

              <div className="footer__middle">
                  <ul>
                  <p>Get to Know Us</p>
                    <li><a href="">Careers</a></li>
                    <li><a href="">Careers</a></li>
                    <li><a href="">Careers</a></li>
                    <li><a href="">Careers</a></li>
                    <li><a href="">Careers</a></li>
                    <li><a href="">Careers</a></li>
                  </ul>
                  <ul>
                  <p>Get to Know Us</p>
                    <li><a href="">Careers</a></li>
                    <li><a href="">Careers</a></li>
                    <li><a href="">Careers</a></li>
                    <li><a href="">Careers</a></li>
                    <li><a href="">Careers</a></li>
                    <li><a href="">Careers</a></li>
                  </ul>
                  <ul>
                  <p>Get to Know Us</p>
                    <li><a href="">Careers</a></li>
                    <li><a href="">Careers</a></li>
                    <li><a href="">Careers</a></li>
                    <li><a href="">Careers</a></li>
                    <li><a href="">Careers</a></li>
                    <li><a href="">Careers</a></li>
                  </ul>
                  <ul>
                  <p>Get to Know Us</p>
                    <li><a href="">Careers</a></li>
                    <li><a href="">Careers</a></li>
                    <li><a href="">Careers</a></li>
                    <li><a href="">Careers</a></li>
                    <li><a href="">Careers</a></li>
                    <li><a href="">Careers</a></li>
                  </ul>
              </div>
          </div>
        </footer>

    </div>
  )
}

export default Home