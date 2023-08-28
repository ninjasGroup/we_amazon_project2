import React from 'react'
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
        <div className="navbar">
            <div className="navbar-logo border">
            <Link to="/"><div className="logo">
                     
                </div></Link>
            </div>


            <div className="deliver__area border">
                <div className="deliver__top">
                    <span>Deliver to</span>        
                </div>
                <div className="deliver__bottom">
                        <i className='deliver__icon'></i>
                        <span>Egypt</span>
                </div>
            </div>


            <div className="search__area">
                <select name="" className='search__select' id="">
                    <option value="">All</option>
                </select>

                <input type="Search Amazon" className='search__area_input' placeholder='Search Amazon' />

                <div className="search__area_icon">
                    <i className='search__area_icon_glass'></i>
                </div>

            </div>





            {/* Right Area */}

            <div className="flag__area border">
                <div className="flag__top">
                    {/* <span>Hello, Sign in</span>         */}
                    <div className="flag__img">

                    </div>
                    <div className="flag__countryname">
                        <span>EN</span>
                    </div>
                    <div className="flag__downarrow">

                    </div>
                </div>
               
            </div>
            
            <div className="signIn__area border">
                <div className="signIn__top">
                    <span>Hello, Sign in</span>        
                </div>
                <div className="signIn__bottom">
                        {/* <i className='deliver__icon'></i> */}
                        <span>Accounts & links</span>
                </div>
            </div>



            <div className="returns_orders__area border">
                <div className="returns__top">
                    <span>Returns </span>        
                </div>
                <div className="returns_orders__bottom">
                        {/* <i className='deliver__icon'></i> */}
                        <span>& Orders</span>
                </div>
            </div>

   
            <Link to='/cart'><div className="cart__area border">
                <div className="cart__top">
                      
                    <i className='cart__icon'>
                        <span className='cart__icon_count'>2</span>
                    </i>

                </div>
                <div className="cart__bottom">
                        {/* <i className='deliver__icon'></i> */}
                        <span className='cart__word'>Cart</span>
                </div>
            </div></Link>




            

            




        </div>

        <div className="navbottom">
               <div className="navbar__bottom_area">
                    <ul className='navbar__bottom_uls'>
                        <li className='navbar__collapse border'><i className='navbar__all_icon'></i><a href=""> All</a></li>
                        <li className='border'><a href="">Today's Deal</a></li>
                        <li className='border'><a href="">Customer Service</a></li>
                        <li className='border'><a href="">Registry</a></li>
                        <li className='border'><a href="">Gift Cards</a></li>
                        <li className='border'><a href="">Sell</a></li>
                    </ul>
               </div>
        </div>
    </nav>
  )
}

export default Navbar