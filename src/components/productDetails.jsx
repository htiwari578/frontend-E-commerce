import React,{useContext} from 'react'
import {ShopContext} from '../components/shopContext';
import {PRODUCTS, PRODUCTS1} from './products';


const ProductDetails = () => {
    
    const {viewProductDetails , addToCart, cartItems, closeProductDetails,
        selectedProduct,updateCartItemCount,removeToCart, } = useContext(ShopContext);

        const productId = selectedProduct || 0;

    const product = PRODUCTS.find((p)=> p.id === productId) || PRODUCTS1.find((p)=> p.id ===
    productId);
    return <>
    <div className="d-flex ">
        <div className="col-6 card">
            <img src={product.image} alt ="" className="img-fluid p-5" />
        </div>
        <div className="col-6 card">
         <div className="p-4">
         <span>{product.brand}</span>
            <h5 className="my-3">{product.name}</h5>
           <div className="card-details">
           <p className="mb-3">was<strike className="text-danger">{product.price*2}</strike> &nbsp; Now<span className="price">
             ${product.price}  </span></p>
             <p>
             Trendyol Blue Men Striped Slim Fit Shirt The product on the mannequin is the M size; Model Size: Height: 1.85 m, Chest: 98, Waist: 80, Hip: 96;45% Polyester 55% Cotton; Colors may vary due to difference in light in concept shots;
             </p>
       
           </div>
           <button 
               className="add-btn" 
               onClick={() => {
                 addToCart(product.id);
               }}
            
            > +
               

            </button>
          <input type ="text" value ={cartItems[product.id]} onChange={(e)=>
           updateCartItemCount(Number(e.target.value),product.id) }/>
            <button 
               className="add-btn" 
               onClick={() => {
                removeToCart(product.id);
               }}
            
            > -
               

            </button>
            <div className="input-group p-4">
              <input type="text" className="form-control" placeholder="Copy Coupons Code"
               aria-label="Recipient's username" aria-describedby="basic-addon2" />
            <span className="input-group-text" id="basic-addon2">Search</span>
              </div>
              <div className="card-footer">
                <h3 className="price my-3 text-center">More Products</h3>
                <div className="row mt-4">
                        {PRODUCTS.slice(0,4).map(product => (
                        <div className="col-3 ">
                        <div key={product.id}> 
                        
                        <div className="card h-100 m-auto p-3">
                        <img src={product.image} alt="" className ='card-img-top img-fluid m-auto p-3' />
                        <div className="cad-details">
                       
                        <h4 className='mt-2'>{product.name}</h4>
                        </div>
                       
                    </div>
                </div>
            </div>
        
    ))}
    </div>


     </div>
        </div>
    </div>
</div>
    </>;
}
export default ProductDetails;