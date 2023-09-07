import React from 'react'
import { PRODUCTS1 } from './products';

const newArrival = () => {
  return <>
      <div className="row mt-4">
    {PRODUCTS1.slice(0,5).map(product => (
     <div className="col-3 ">
       <div key={product.id}> 
    
    <div className="card h-100 m-auto p-3">
     <img src={product.image} alt="" className ='card-img-top img-fluid m-auto p-3' />
     <div className="cad-details">
     <div className="tittle">
     <span>{product.brand}</span>
     <h4 className='mt-2'>{product.name}</h4>
     </div>
     <div className="card-footer text-center">
     <p>{product.status}</p>
     
     <p><strike className="text-danger">{product.rate}</strike></p>
    
     </div>
     </div>
     </div>
    </div>
     </div>
      
    ))}
  </div>
  </>

}

export default newArrival