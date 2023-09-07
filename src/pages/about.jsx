import React from 'react'
import abb1 from '../assets/images/about/abb1.jpg'
import {Link} from 'react-router-dom'

const about = () => {
  return <>
  <section className="about-wrapper p-5 mb-3">
    <div className="container-xxl">
      <div className="row">
          <div className="text-center">
            <h1 className="text-white">
              Get To Know Us!
            </h1>
            <p className="text-white">Take a Moment To Know Us Better</p>
          </div>
      </div>
    </div>
  </section>

  <section className="know-us p-5">
    <div className="conatiner-xxl">
      <div className="row">
      <div className="d-flex">
        <div className="col-6">
          <img src= {abb1}  alt= "" className="img-fluid p-3" />
        </div>
        <div className="col-6 d-flex flex-column text-center  align-items-center justify-content-center p-3">
        <div>
        <h1 className="mb-3">Who Are We?</h1>
        </div>
        <div className="mb-3">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ab ex maxime veniam? Similique ad, omnis rem eum aspernatur quia. Consequuntur error velit eveniet soluta pariatur nulla facere odio similique. <br />
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi odio, cum error facilis doloribus eum quae deleniti beatae a! Quas veritatis provident ratione nobis, aperiam sunt. Blanditiis minima obcaecati temporibus!
        </p>
        </div>
        <div className="mt-5">
          <Link className="fs-3" to={'/contact'}>Contact Us</Link>
        </div>
        </div>
      </div>
      </div>
    </div>

  </section>

  <section className="download">
    <div className="conatiner-xxl">
      <div className="row">
      <div className="d-flex align-items-center justify-content-center">
        <div>
          <h2>
            Download Our <Link className="fs-3"><b>App</b></Link>
          </h2>
        </div>
      </div>

      </div>
    </div>
  </section>
  </>;
 
}

export default about