import logo from './logo.svg';
import './App.css';
import React, {useEffect} from 'react';
import Layout from './components/layout';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from './pages/home';
import Shop from './pages/shop';
import Blog from './pages/blog';
import About from './pages/about';
import Contact from './pages/contact';
import Cart from './pages/cart';
import Login from './pages/login';
import Wishlist from './pages/wishlist';
import Signup from './pages/signup'
import Forgotpassword from './pages/forgetpassword'
import {useLocation}  from 'react-router-dom'

import ShopContext  from './components/shopContext';
import Details from './pages/details';


function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}



function App() {
  return (
    <>
    <ShopContext>
    <BrowserRouter>
    <ScrollToTop />
   
   <Routes>
     <Route path='/' element={<Layout />}>
       <Route index element={<Home />} />
       <Route path='shop' element ={<Shop />} />
       <Route path='blog' element ={<Blog />} />
       <Route path='about' element ={<About />} />
       <Route path='contact' element ={<Contact />} />
       <Route path='cart' element ={<Cart />} />
       <Route path='login' element ={<Login />} />
       <Route path='signup' element={<Signup />} />
       <Route path='forgotpassword' element={<Forgotpassword />} />
       <Route path='wishlist' element ={<Wishlist />} />
       <Route path='details' element ={<Details />} />
       </Route>
   </Routes>
  
   </BrowserRouter>
    </ShopContext>
    </>
    
  );

}

export default App; 
