import React from 'react'
import {ShopContext} from './shopContext';
import ReactStars from 'react-rating-stars-component';
import {useContext} from 'react'
import {Link} from 'react-router-dom';

const Prod = (props) => {
    const {id , name , image , price , brand} = props.data;

    const {viewProductDetails , addToCart, cartItems} = useContext(ShopContext);

    const cartItemCount = cartItems[id];

  return <>
  <div kay={id} className="col-3">
    <div className="card">
       <div className="p-2">
       <img src={image} alt="" className='img-fluid card-img-top ' />
       </div>
        <div className="card-details p-3">
            <span>{brand}</span>
            <h5 className="my-3">{name}</h5>
            <ReactStars
            count={5}
           edit={false}
            value={4}
            size={24}
            activeColor="#f57645"
        />
        <p className="price mb-3">
            {price} <span className="text-danger"> &nbsp;<strike>{price * 2}</strike></span>
        </p>
        <div className="d-flex align-items-center justify-content-around">
            <div className="col-6">
            <Link to ={'/details'}className="view-button"onClick={()=>viewProductDetails(id)}>View Details</Link>
            </div>

           <div className="col-6">
           <button 
               className={`add-btn ${cartItemCount > 0 ? "text-success" : ""}`}
               onClick={(event) => {
                 addToCart(id);
                 event.target.classList.toggle("text-success");
               }}
            
            >
                Add To Cart
                {cartItemCount > 0 && `(${cartItemCount})`}

            </button>

           </div>
        </div>
            
        
        </div>

    </div>
  </div>
  
  </>;

  
  
}

export default Prod;