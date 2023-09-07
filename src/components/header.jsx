import React ,{useContext} from 'react'
import {BiPhoneCall} from 'react-icons/bi'
import {AiOutlineMail} from 'react-icons/ai'
import {Link, useLocation} from 'react-router-dom';
import logo from '../assets/images/logo.png';
import {HiOutlineInboxIn} from 'react-icons/hi';
import {RiAccountBoxFill} from 'react-icons/ri';
import {GiShoppingBag} from 'react-icons/gi';
import {ShopContext} from './shopContext';




const Header = () => {
    const location =  useLocation();
    const {getTotalCartProducts} = useContext(ShopContext);
    const totalProducts = getTotalCartProducts();

  return <>
    <header className = 'header-top-strip p-1 px-4 shadow-md'style={{ backgroundColor: '#b2b8b3' }} >
        <div className="container-xxl">
        <div className="row">
            <div className="col-6">
                <p>Grab 75% off on Every Products</p>
            </div>
            <div className="col-6 d-flex justify-content-between">
                <div>
                <a href ="phone: +917595977965">Call us +917595977965</a>
                </div>
                <div>
                <Link><BiPhoneCall className ='fs-3 mx-4'/></Link>
                <Link>  <AiOutlineMail className ='fs-3 mx-4'/> </Link>  
                </div>

              
            </div>
        </div>
        </div>
    </header>
    <header className = 'header-upper sticky-top' style={{ backgroundColor: '#84f09f' }}>
        <div className="container-xx1">
            <div className="row">
               <div className="col-2 m-auto text-center shadow-sm">
               <Link to={'/'}><img src ={logo} alt="Logo" className='img-fluid logo'/></Link>
               </div>
               <div className="col-3 d-flex p-3 align-items-center mt-3">
                <div className="input-group mb-3 ">
                <span class="input-group-text" id="basic-addon1">All</span>
                <input type="text" className="form-control p-2" placeholder="Search Products" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                <button className="input-group-text" id="basic-addon2">Search</button>
                </div>

               </div>
               <div className="nav-links col-4 d-flex align-items-center justify-content-between text-center m-auto">
                <Link to='/' className={location.pathname === '/' ? 'active' : 'incative'}>Home</Link>
                <Link to='/shop' className={location.pathname === '/shop' ? 'active' : 'incative'}>Shop</Link>
                <Link to='/blog' className={location.pathname === '/blog' ? 'active' : 'incative'}>Blog</Link>
                <Link to='/about' className={location.pathname === '/about' ? 'active' : 'incative'}>About</Link>
                <Link to='/contact' className={location.pathname === '/contact' ? 'active' : 'incative'}>Contact</Link>
                </div>
                <div className="nav-links-nav col-3 d-flex align-items-center justify-content-around">
                <Link to={'wishlist'} className={location.pathname === '/wishlist' ? 'inactive' : 'active' } >
                    <div className="d-flex">
                   <span><HiOutlineInboxIn className="fs-3 mx-2"/> </span>
                <p>Wishlist</p>
                    </div>

                </Link>
               
                <Link to = {'login'} className={location.pathname === '/login' ? 'inactive' : 'active' } >
                <div className="d-flex">
                    <span><RiAccountBoxFill className="fs-3 mx-2" /></span>
                <p>Account</p>
                </div>
                </Link>
                <Link to= {'cart'} className={location.pathname === '/cart' ? 'inactive' : 'active' } >
                <div className="d-flex"> 
                    <span><GiShoppingBag className="fs-3 mx-2" /></span>
                <p>Cart
                <span className="text-danger">
                {totalProducts  > 0 && `(${totalProducts })`}


                </span>
                </p>
                </div>
                </Link>
               </div>
            </div>
            </div>
        

    </header>


    </>;
  
}

export default Header;