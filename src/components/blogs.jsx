import React from 'react'
import {Link} from 'react-router-dom'
import blog1 from '../assets/images/blogs/blog1.avif';
import blog2 from '../assets/images/blogs/blog2.avif';
import blog3 from '../assets/images/blogs/blog3.avif';
import blog4 from '../assets/images/blogs/blog4.avif';

const blogs = () => {
  return <>
    <div className="col">
        <div className="card">
            <img src={blog1} alt="" className="card-img-top img-fluid mb-3 p-5" />
            <div className="card-body">
                <p className='mb-3'>
                  <em>This is my very first order through site, and I am totally and completely satisfied! The fit is great and so are the prices. I will definitely return again and again.
                  </em>
                  </p>
                  <Link to ={'/blog'}>
                <button className="button-blog">
                  See More
                </button>
                </Link>
            </div>
        </div>
    </div>
    <div className="col">
        <div className="card">
            <img src={blog2} alt="" className="card-img-top img-fluid mb-3 p-5" />
            <div className="card-body">
                <p className='mb-3'>
                  <em>I love the way your website is done with the flip images and the catwalks. Makes it wonderful to shop online. Thank you. I'll be back again and again!
                  </em>
                  </p>
                  <Link to={'/blog'}>
              <button className="button-blog">
                  See More
                </button>
              </Link> 
            </div>
        </div>
    </div>
    <div className="col">
        <div className="card">
            <img src={blog3} alt="" className="card-img-top img-fluid mb-3 p-5" />
            <div className="card-body">
                <p className='mb-3'>
                  <em>I absolutely adore the trendy styles this store offers. The clothes fit so well and they look amazing on a curvy figure. I really appreciate.
                  </em>
                  </p>
                  <Link to={'/blog'}>
              <button className="button-blog">
                  See More
                </button>
              </Link> 
            </div>
        </div>
    </div>
    <div className="col">
        <div className="card">
            <img src={blog4} alt="" className="card-img-top img-fluid mb-3 p-5" />
            <div className="card-body">
                <p className='mb-3'>
                  <em>I have ordered and received several items now, and I have to say, I am in love with this store!!!! Everything I have received fit perfectly, and is good quality.
                  </em>
                  </p>
              <Link to={'/blog'}>
              <button className="button-blog">
                  See More
                </button>
              </Link> 
            </div>
        </div>
    </div>
  </>;
    
  
  }

export default blogs;