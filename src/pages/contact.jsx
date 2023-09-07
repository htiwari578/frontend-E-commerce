import React from 'react'
import {GrTwitter} from 'react-icons/gr';
import {Link} from 'react-router-dom';
import {BsInstagram} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';
import {BsLinkedin} from 'react-icons/bs';


const contact = () => {
  return <>
  <section className="contact-wrapper">
    <div className="container-xxl">
      <div className="row">
        <div className="text-center mb-3">
          <h1 className="text-white">React Out To Us</h1>
          <p>We are Only One Step Away</p>
        </div>
        </div>
      </div>
    </section>


    <section className="contact-info m-3 p-5">
    <div className="d-flex align-items-center justify-content-center">
          
            <div className="col-6">
              <map name="" >
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3598.663314076439!2d83.98741519999999!3d25.582865899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1693900375072!5m2!1sen!2sin" 
              allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </map>
       
            
          </div>
          
            <div className="col-6">
             <div className="text-start">
             <h1>Contact Information</h1>
             </div>
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
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis nisi, eveniet dicta cumque illo ipsum inventore placeat delectus optio praesentium reprehenderit quae? Quibusdam ipsum nemo unde expedita tempora modi quaerat.</p>

            </div>
          </div>
         
    </section>
    <section className="form">
  <div className="container-xxl">
    <div className="row">
      <div className="col-12 text-center mb-3">
        <h2>Send Us a Message</h2>
      </div>
      <div className="col-12 d-flex justify-content-center align-items-center">
        <div className="card col-8">
          <div className="row">
            <div className="col-6 p-2">
              <input type="text" className="form-control p-2" placeholder="First Name" aria-label="Enter First Name" aria-describedby="basic-addon2" />
            </div>
            <div className="col-6 p-2">
              <input type="text" className="form-control p-2" placeholder="Last Name" aria-label="Enter Last Name" aria-describedby="basic-addon2" />
            </div>
          </div>
          <div className="row">
            <div className="col-12 p-2">
              <label>Enter Your Email Address</label>
              <input type="email" className="form-control p-2" placeholder="Email Address" aria-label="Recipient's username" aria-describedby="basic-addon2" />
            </div>
          </div>

          <label>Type Your Message</label>
          <textarea name="" id="" cols="40" row="10"></textarea>
          <button>Submit</button>
        </div>
      </div>
    </div>
  </div>
</section>
  
  </>;
   
}

export default contact