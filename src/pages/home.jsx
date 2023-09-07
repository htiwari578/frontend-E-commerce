import React from 'react'
import {Link} from 'react-router-dom'
import FeaturesProducts from '../components/featuresProducts'
import NewArrival from '../components/newArrival'
import Cd1 from '../assets/images/cd1.jfif';
import Cd2 from '../assets/images/cd2.jfif';
import Blogs from '../components/blogs';





const Home = () => {
  return <>
    <section className = 'banner'>
        <div className="container-xxl">
          <div className="row">
          <div className="banner-details p-5 d-flex flex-column align-items-start justify-content-center">
          <span className="shadow-lg p-4 mt-3 text-white">Grab the offer!</span>
          <h1>Great Deals For You</h1>
          <h2>On every products</h2>
          <p className='p-3 m-0'>Explore the Site </p>
          <Link to={'/shop'}className='button-link mb-4'>Shop Now</Link>
          </div>
          </div>
        </div>
    </section>
    <section className="features-products p-5">
      <div className="container-xxl">
        <div className="row">
          <div className="text-center">
            <h1>Our Features Products</h1>
            <p>Explore All The New Collection</p>
          </div>
          <FeaturesProducts />
        </div>
      </div>
    </section>

   <section className = "offer">
    <div className ="container-xxl">
      <div className="row">
        <div className="offer-details text-center d-flex flex-column align-items-center p-3">
          <span className="text-white mt-1">Explore Offer</span>
          <h2 className="text-white"> <span className="text-warning">75%</span> Off an All Products And Accessories</h2>
          <button className="button-offer p-2">Explore Now</button>

        </div>
      </div>
    </div>
   </section>
   <section className="new-products p-5">
      <div className="container-xxl">
        <div className="row">
          <div className="text-center">
            <h1>New Arrivals</h1>
            <p>Check Out Best Brands Outfit</p>
          </div>
          <NewArrival  />
        </div>
      </div>
    </section>

    <section className="deals p-5">
      <div className="container-xxl">
        <div className="row">
          <div className="col-6 p-4">
          <div className="card row">
            <div className="d-flex">
            <div className="col-md-4">
              <img src={Cd2} alt="" className="img-fluid rounded-start p-2 h-100" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <span>Hot Deals</span>
                <h3 className="card-title">
                  Buy Two Get One Free
                </h3>
                <p>The latest best collection in our closet feel cute with
                  our Outfits</p>
                  
                    <button className="button-deals mt-3">
                      Explore More
                    </button>
                  
              </div>
            </div>
            </div>
          </div>
          
          
          </div>
          <div className="col-6 p-4">
          <div className="card row">
            <div className="d-flex">
            <div className="col-md-4">
              <img src={Cd1} alt="" className="img-fluid rounded-start p-2 h-100" />
            </div>
            <div className="col-md-8">
            <div className="card-body">
                <span>Hot Deals</span>
                <h3 className="card-title">
                  Buy Two Get One Free
                </h3>
                <p>The latest best collection in our closet feel cute with
                  our Outfits</p>
                  
                    <button className="button-deals mt-3">
                      Explore More
                    </button>
                  
              </div>
            </div>
            </div>



            </div>
          </div>
        </div>
      </div>
    </section>
   
    <section className="blogs p-5 mb-2">
  <div className="container-xxl">
    <div className="row">
    <div className="text-center mb-3">
            <h1>What Our Experts Says..</h1>
            <p>Our customer never miss a bit on providing feedback</p>
          </div>
      <Blogs />
    </div>
  </div>
    </section>
  </>;

   
}

export default Home;