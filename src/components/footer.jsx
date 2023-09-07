import React from 'react'
import {GrTwitter} from 'react-icons/gr';
import {Link} from 'react-router-dom';
import {BsInstagram} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';
import {BsLinkedin} from 'react-icons/bs';
import google from '../assets/images/gpa.jpg';
import apple from '../assets/images/apple.jpg';
import pay from '../assets/images/pay.png';

const footer = () => {
 
    return <>
     <footer className="footer p-5">
    <div className="container-xxl">
    <div className="row">
      <div className="col-12 d-flex">
         <div className="col-8 text-center mb-3">
            <h3>Signup For News-Letter </h3>
            <p>To get updates on All <Link>Special Offers</Link></p>
         </div>
         <div className="col-4">
         <div className="input-group mb-3 text-center">
                
                <input type="text" className="form-control p-2" placeholder="Enter email here" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                <button className="input-group-text" id="basic-addon2">Subscribe</button>
                </div>
         </div>
      </div>
      <hr className="m-2"/>
      <div className="col-4 d-flex flex-column">
        <h5 className="mb-4">Contacts us</h5>
        <div className="footer-details">
          <p className="mb-3"><b>Address:</b>Near Kalisthan sheopuri,Buxar(Bihar)</p>
          <p className="mb-3"><b>Phone:</b><a href ="phone: +917595977965">Call us +917595977965</a></p>
          <p className="mb-5"><b>Hours Open:</b>From 9 am to 10 pm</p>
          <p className="mb-3"><b>Follow us</b></p>
          <div className="col-4 social-icons justify-content-around">
            <Link> <GrTwitter /></Link>
            <Link> <BsInstagram /></Link>
            <Link> <BsGithub /></Link>
            <Link> <BsLinkedin /></Link>
          </div>
        </div>
       
        
      </div>
      <div className="col-2">
        <h5 className="mb-4">About</h5>
        <div className="footer-details d-flex flex-column">
         <Link className ='mb-3 text-black'>
            About Us
         </Link>
         <Link className ='mb-3 text-black'>
            Delivery
         </Link>
         <Link className ='mb-3 text-black'>
            Privacy Policy
         </Link>
         <Link className ='mb-3 text-black'>
            Tax Policy
         </Link>
         <Link className ='mb-3 text-black'>
            Terms & Conditions
         </Link>
        </div>
      </div>
      <div className="col-2">
        <h5 className="mb-4">Account</h5>
        <div className="footer-details d-flex flex-column">
         <Link className ='mb-3 text-black'>
            Profile
         </Link>
         <Link className ='mb-3 text-black'>
            View Cart
         </Link>
         <Link className ='mb-3 text-black'>
            My Orders
         </Link>
         <Link className ='mb-3 text-black'>
            My Wishlist
         </Link>
         <Link className ='mb-3 text-black'>
            Need Help
         </Link>
         <Link className ='mb-3 text-black'>
            Coupons
         </Link>
        </div>
      </div>
      <div className="col-4">
        <h5 className="mb-3">Install Apps</h5>
        <div className="footer-details">
          <p>Available On Google Play Services & App Store</p>
          <div className="pay">
         <Link>
         <img src={google} alt="" className="img-fluid " ></img> 
         </Link>
         <Link>
         <img src={apple} alt="" className="img-fluid " ></img>
         </Link>
          </div>
            <p className="pay1">Payment Method</p> 
            <Link>
         <img src={pay} alt="" className="img-fluid " ></img> 
         </Link>      
        </div>
      </div>
    </div>
    <hr/>
    <div className="row d-flex justify-content-between align-items-center">
          <div className="col-md-3">
            <p> &copy; Developed by Himanshu 2023</p>
          </div>
          <div className="col-md-3 d-flex justify-content-around">
            <Link className='text-black mx-3'>Privacy Policy</Link>
            <Link className='text-black mx-3'>Terms & Use</Link>
            <Link className='text-black mx-3'>Contact Me</Link>
          </div>
        </div>
    
    </div>
     </footer>
    </>;
  }
  
  export default footer;
  