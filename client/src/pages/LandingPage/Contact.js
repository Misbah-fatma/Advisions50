import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
const Contact = () => {
  return (
    <div>
      
<Navbar />

<div className="container-fluid pt-5 hero-header" style={{backgroundColor : "white"}}>
        <div className="container pt-5">
            <div className="row g-5 pt-5">
                <div className="col-lg-6 align-self-center text-center text-lg-start mb-lg-5">
                    <h1 className="display-4 mb-4 animated slideInRight">Contact Us</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb justify-content-center justify-content-lg-start mb-0">
                            <li className="breadcrumb-item"><a className="" href="*">Home</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Contact Us</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    </div>
   

       <div style={{ marginTop : '0 px'}} className="row no-margin">
        
      
        <iframe style= {{width : "100%"}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.281217053276!2d77.34740031440764!3d28.53551698244892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce51df4d55263%3A0x60a7f59e57fd7e8d!2sNoida%2C%20Uttar%20Pradesh%2C%20India!5e0!3m2!1sen!2sin!4v1646881447381!5m2!1sen!2sin" width="600" height="450"  allowfullscreen="" loading="lazy"></iframe>


      </div>
      <br />

      <section className="site-section bg-light" id="contact-section">
  <div className="container">
    <div className="row mb-5">
      <div className="col-12 text-center">
        <h2 className="text-black h1 site-section-heading">If You Have Any Query, Please Contact Us</h2>
      </div>
    </div>
    <div className="row">
      <div className="col-md-7 mb-5">

        

        <form action="#" className="p-5 bg-white">
          
          <h2 className="h4 text-black mb-5">Contact Form</h2> 

          <div className="row form-group">
            <div className="col-md-6 mb-3 mb-md-0">
              <label className="text-black" for="fname">First Name</label>
              <input type="text" id="fname" className="form-control"/>
            </div>
            <div className="col-md-6">
              <label className="text-black" for="lname">Last Name</label>
              <input type="text" id="lname" className="form-control"/>
            </div>
          </div>

          <div className="row form-group">
            
            <div className="col-md-12">
              <label className="text-black" for="email">Email</label> 
              <input type="email" id="email" className="form-control"/>
            </div>
          </div>

          <div className="row form-group">
            
            <div className="col-md-12">
              <label className="text-black" for="subject">Subject</label> 
              <input type="subject" id="subject" className="form-control"/>
            </div>
          </div>

          <div className="row form-group">
            <div className="col-md-12">
              <label className="text-black" for="message">Message</label> 
              <textarea name="message" id="message" cols="30" rows="7" className="form-control" placeholder="Write your notes or questions here..."></textarea>
            </div>
          </div>

          <div className="row form-group">
            <div className="col-md-12">
              <input type="submit" value="Send Message" className="btn btn-primary btn-md text-white"/>
            </div>
          </div>


        </form>
      </div>
      <div className="col-md-5">
        
        <div className="p-4 mb-3 bg-white">
          <p className="mb-0 font-weight-bold">Address</p>
          <p className="mb-4">27,STPI, Botanical Garden, Noida, India</p>

          <p className="mb-0 font-weight-bold">Phone</p>
          <p className="mb-4"><a href="#">+91 8810316395</a></p>

          <p className="mb-0 font-weight-bold">Email Address</p>
          <p className="mb-0"><a href="#">info@advisionslab.com</a></p>

        </div>
        
      </div>
    </div>
  </div>
</section>

<Footer/>
    </div>
    
  )
}

export default Contact
