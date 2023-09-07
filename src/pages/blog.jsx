import React from 'react'
import image1 from '../assets/images/blgd/blgd1.avif'
import image2 from '../assets/images/blgd/blgd2.avif'
import image3 from '../assets/images/blgd/blgd3.avif'


const blog = () => {
  return <>
  <section className="blog-wrapper p-5">
    <div className="container-xxl">
      <div className="row">
        <div className="text-center">
          <h1 className="text-warning mb-3">#Read More</h1>
          <p1 className="text-dark">Get to know what our Customer Says..</p1>
        </div>
      </div>
    </div>

  </section>

  <section className="blog-details">
    <div className="container-xxl">
      <div className="row">
        <div className="text-center">
          <h1 className="fs-2 mn-3">Explore more in our Library</h1>
          <p>We Have Trending Outfits Everywhere</p>
        </div>
        <div className="card blog-details-page">
          <div className="p-4 d-flex">
          <div className="col-4">
          <img src={image1} alt="" className="img-fluid img-rounded-start" />

          </div>
          <div className="card-body col-8">
        
                <span>Raghav Jain</span>
              
                <p>This is my very first order through site, and I am totally and completely satisfied! The fit is great and so are the prices. I will definitely return again and again...</p>
                <div className="card-footer mt-4">
                  <p>Last Updated: Now</p>
                </div>
                 
              </div>  
       </div>

        </div>
        <div className="card blog-details-page">
          <div className="p-4 d-flex">
          <div className="col-4">
          <img src={image3} alt="" className="img-fluid img-rounded-start" />

          </div>
          <div className="card-body col-8">
        
                <span>Shreya Tripathi</span>
              
                <p>I love these clothes!! I love the fit!!! I love the price!!! I am on my 3rd order from you!! I too was skeptical because you were international.. My order was here within a week and when I pulled out the clothes and tried them on.. I was skeptical no more. Keep those high low tops coming and thank you for making mje look great at work!!!</p>
                <div className="card-footer mt-4">
                  <p>Last Updated: Now</p>
                </div>
                 
              </div>  
       </div>

        </div>
        <div className="card blog-details-page">
          <div className="p-4 d-flex">
          <div className="col-4">
          <img src={image2} alt="" className="img-fluid img-rounded-start" />

          </div>
          <div className="card-body col-8">
        
                <span>Anmol Singh</span>
              
                <p>I love the way your website is done with the flip images and the catwalks. Makes it wonderful to shop online. Thank you. I'll be back again and again!</p>
                <div className="card-footer mt-4">
                  <p>Last Updated: Now</p>
                </div>
                 
              </div>  
       </div>

        </div>
      </div>
    </div>

  </section>
  </>;
    
  
}

export default blog