
import React, { useEffect } from 'react';
import Typed from 'typed.js';
import Navbar from './Navbar';
import Footer from './Footer';

const Home = () => {
    useEffect(() => {
        var typed = new Typed('.typed-words', {
          strings: ["new explorations"," career advancement"," or learn a different skill"],
          typeSpeed: 80,
          backSpeed: 80,
          backDelay: 4000,
          startDelay: 1000,
          loop: true,
          showCursor: true
        });
    
        return () => {
          typed.destroy();
        };
      }, []);
      
  return (
    <div>
        <div className="site-wrap">

<Navbar/>

<div className="site-blocks-cover overlay" style={{ background: `url(/images/hero_1.jpg)`, backgroundSize: "cover" }}>
      <div className="container">
        <div className="row align-items-center justify-content-center text-center">
          <div className="col-md-12" data-aos="fade-up" data-aos-delay="400">
            <div className="row justify-content-center mb-4">
              <div className="col-md-8 text-center">
                <h1>   We're dedicated to empowering your learning journey,  </h1>
                <p className="lead mb-5 h4">whether you seek skill enhancement, <span className="typed-words"></span> </p>
                <p>Unlock your potential with our tailored courses designed to meet your unique learning goals.</p>
                <div>
                  <a data-fancybox data-ratio="2" href="./Advisions.mp4" className="btn btn-primary btn-md">Watch Video</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
 






<section className="site-section">
  <div className="container">
    <div className="row">
      <div className="col-md-6 col-lg-4">
        <div className="p-3 box-with-humber">
          <div className="number-behind">01.</div>
          <h2 className="text-primary">Innovate</h2>
          <p className="mb-4">Revolutionize your learning experience with our innovative LMS platform, offering cutting-edge features and personalized education solutions.</p>
          <ul className="list-unstyled ul-check primary">
            <li>Customer Experience</li>
            <li>Product Management</li>
            <li>Proof of Concept</li>
          </ul>
        </div>
      </div>

      <div className="col-md-6 col-lg-4">
        <div className="p-3 box-with-humber">
          <div className="number-behind">02.</div>
          <h2 className="text-primary">Create</h2>
          <p className="mb-4">Create, collaborate, and innovate with our dynamic LMS website, empowering learners with interactive tools and personalized learning experiences.</p>
          <ul className="list-unstyled ul-check primary">
            <li>Web Design</li>
            <li>Branding</li>
            <li>Web &amp; App Development</li>
          </ul>
        </div>
      </div>

      <div className="col-md-6 col-lg-4">
        <div className="p-3 box-with-humber">
          <div className="number-behind">03.</div>
          <h2 className="text-primary">Scale</h2>
          <p className="mb-4">Scale your learning initiatives effortlessly with our innovative LMS website, designed to adapt and grow with your organization's needs.</p>
          <ul className="list-unstyled ul-check primary">
            <li>Social Media</li>
            <li>Paid Campaigns</li>
            <li>Marketing &amp; SEO</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>

<a href="#" className=" py-5 d-block" style={{backgroundColor : "black"}}>
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-md10"
      ><h2 className="text-white">Let's Get Started</h2></div>
    </div>
  </div>  
</a>

<section className="site-section" id="work-section">
  <div className="container">
    <div className="row mb-5 justify-content-center">
      <div className="col-md-8 text-center">
        <h2 className="text-black h1 site-section-heading text-center">Our Popular Courses</h2>
        <p className="lead">Discover courses in mindfulness, productivity, time management, and other essential life skills to help you become the best version of yourself.</p>
      </div>
    </div>
  </div>
  <div className="container">
    <div className="row">
      <div className="col-md-6 col-lg-4 mb-4">
        <div className="card h-100">
          <img src="images/100.png" className="card-img-top img-fluid" alt="Image" style={{ height: '300px' }} />
          <div className="card-body">
            <h2 className="card-title h5">100 Days of Code Challenge: Master Web Development in 100 Days</h2>
            <hr className="my-3" />
            <p className="card-text">Learn the Fundamentals: Master HTML, CSS, and JavaScript, the building blocks of web development.</p>
            <p className="card-text">Explore Advanced Topics: Dive into frameworks and libraries like React.js, Node.js, and MongoDB to build full-stack web applications.</p>
         <p className='card-text'> Build Real-World Projects: Put your skills to the test by building a portfolio of projects, including responsive websites, web applications, and more.</p>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-4 mb-4">
        <div className="card h-100">
          <img src="images/python.png" className="card-img-top img-fluid" alt="Image" style={{ height: '300px' }} />
          <div className="card-body">
            <h2 className="card-title h5">The Complete Python Course: From Beginner to Advanced</h2>
            <hr className="my-3" />
            <p className="card-text">Master the Basics: Learn Python syntax, data types, control structures, and functions.</p>
            <p className="card-text">Explore Advanced Topics: Dive into object-oriented programming, file handling, and working with databases.</p>
            <p className="card-text">Build Real-World Projects: Put your skills to the test by building practical projects, including web applications, data analysis tools, and more.</p>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-4 mb-4">
        <div className="card h-100">
          <img src="images/react.png" className="card-img-top img-fluid" alt="Image" style={{ height: '300px' }} />
          <div className="card-body">
            <h2 className="card-title h5">Master React.js and Build Dynamic Web Applications</h2>
            <hr className="my-3" />
            <p className="card-text">Our comprehensive React.js course will teach you everything you need to know to build dynamic and interactive web applications.</p>
        <p className='card-text'>Explore Advanced Topics: Dive into React Router, Redux, Hooks, Context API, and other advanced React.js concepts.</p>
        <p className='card-text'>Understand React Ecosystem: Explore popular React.js libraries and tools like React Bootstrap, Material-UI, Axios, and Redux Toolkit.</p>
        
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-4 mb-4">
        <div className="card h-100">
          <img src="images/webs.png" className="card-img-top img-fluid" alt="Image" style={{ height: '300px' }} />
          <div className="card-body">
            <h2 className="card-title h5">Creating Responsive Websites</h2>
            <hr className="my-3" />
            <p className="card-text">Master HTML5 and CSS3 techniques for building flexible layouts.</p>
            <p className="card-text">Learn how to use media queries to target different devices and screen sizes.</p>
            <p className="card-text">Discover the latest tools and frameworks for responsive web design, including Bootstrap and Flexbox.</p>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-4 mb-4">
        <div className="card h-100">
          <img src="images/node.png" className="card-img-top img-fluid" alt="Image" style={{ height: '300px' }} />
          <div className="card-body">
            <h2 className="card-title h5">Master Node.js and Build Scalable Web Applications</h2>
            <hr className="my-3" />
            <p className="card-text">Gain a deep understanding of Node.js and its core modules.</p>
            <p className="card-text">Learn how to build server-side applications using Express.js, the most popular web application framework for Node.js.</p>
          <p className='card-text'>Explore asynchronous programming and understand how to work with callbacks, promises, and async/await.
Build RESTful APIs and integrate them with databases like MongoDB.</p>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-4 mb-4">
        <div className="card h-100">
          <img src="images/mongo.png" className="card-img-top img-fluid" alt="Image" style={{ height: '300px' }} />
          <div className="card-body">
            <h2 className="card-title h5">Master MongoDB: The NoSQL Database for Modern Applications</h2>
            <hr className="my-3" />
            <p className="card-text">Gain a deep understanding of MongoDB's document-based data model and how it differs from traditional relational databases.</p>
            <p className="card-text">Learn how to perform CRUD operations (Create, Read, Update, Delete) using MongoDB's powerful query language.</p>
            <p className="card-text">Explore advanced MongoDB features such as indexing, aggregation, and replication.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>





<section className="section ft-feature-1">
  <div className="container">
    <div className="row align-items-stretch">
      <div className="col-12 bg-black w-100 ft-feature-1-content">
        <div className="row align-items-center">
          <div className="col-lg-5">
            
              <img src="images/about_1.jpg" alt="Image" className="img-fluid mb-4 mb-lg-0"/>
            
          </div>
          <div className="col-lg-3 ml-auto">
            <div className="mb-5">
              <h3 className="d-flex align-items-center"><span className="icon icon-beach_access mr-2"></span><span>Strategy</span></h3>
              <p>Set goals, engage actively, seek feedback, progress consistently, apply knowledge. Unlock your potential with our proven strategy!</p>
             
            </div>

            <div>
              <h3 className="d-flex align-items-center"><span className="icon icon-build mr-2"></span><span>Copywriting</span></h3>
              <p> Research, outline, write, edit, proofread, and refine. Craft compelling content that captivates and converts your audience.</p>
     
            </div>

          </div>
          <div className="col-lg-3">
            <div className="mb-5">
              <h3 className="d-flex align-items-center"><span className="icon icon-format_paint mr-2"></span><span>Art Direction</span></h3>
              <p> Define goals, research trends, create mood boards, develop concepts, collaborate, refine, and execute. Elevate your creative vision!</p>
             
            </div>

            <div>
              <h3 className="d-flex align-items-center"><span className="icon icon-question_answer mr-2"></span><span>Web Development</span></h3>
              <p> Plan, design, develop, test, deploy, and maintain. Follow our steps to create successful web projects efficiently!</p>
       
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


<section className="site-section testimonial-wrap">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-8 text-center">
        <h2 className="text-black h1 site-section-heading text-center">Testimonials</h2>
      </div>
    </div>
  </div>
  <div className="slide-one-item home-slider owl-carousel">
      <div>
        <div className="testimonial">
          
          <blockquote className="mb-5">
            <p>&ldquo;With the help of this innovative LMS website, we've been able to scale our training programs effectively, reaching more employees than ever before. The interactive features and personalized learning paths have truly transformed our approach to learning.&rdquo;</p>
          </blockquote>

          <figure className="mb-4 d-flex align-items-center justify-content-center">
            <div><img src="images/person_3.jpg" alt="Image" className="w-50 img-fluid mb-3"/></div>
            <p>John Smith</p>
          </figure>
        </div>
      </div>
      <div>
        <div className="testimonial">

          <blockquote className="mb-5">
            <p>&ldquo;As an educator, I've found this LMS website to be an invaluable tool for engaging my students and facilitating interactive learning experiences. Its innovative features have allowed me to scale my teaching methods effectively while providing personalized support to each student.&rdquo;</p>
          </blockquote>
          <figure className="mb-4 d-flex align-items-center justify-content-center">
            <div><img src="images/person_2.jpg" alt="Image" className="w-50 img-fluid mb-3"/></div>
            <p>Christine Aguilar</p>
          </figure>
          
        </div>
      </div>

      <div>
        <div className="testimonial">

          <blockquote className="mb-5">
            <p>&ldquo;Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur unde reprehenderit aperiam quaerat fugiat repudiandae explicabo animi minima fuga beatae illum eligendi incidunt consequatur. Amet dolores excepturi earum unde iusto.&rdquo;</p>
          </blockquote>
          <figure className="mb-4 d-flex align-items-center justify-content-center">
            <div><img src="images/person_4.jpg" alt="Image" className="w-50 img-fluid mb-3"/></div>
            <p>Robert Spears</p>
          </figure>

          
        </div>
      </div>

      <div>
        <div className="testimonial">

          <blockquote className="mb-5">
            <p>&ldquo;Since implementing this innovative LMS website, we've seen a significant increase in employee engagement and performance. Its scalability and user-friendly interface have made it easy to onboard new team members and scale our training efforts as we continue to grow.&rdquo;</p>
          </blockquote>
          <figure className="mb-4 d-flex align-items-center justify-content-center">
            <div><img src="images/person_5.jpg" alt="Image" className="w-50 img-fluid mb-3"/></div>
            <p>Bruce Rogers</p>
          </figure>

        </div>
      </div>

    </div>
</section>

<section className="site-section border-bottom" id="services-section">
  <div className="container">
    <div className="row justify-content-center mb-5">
      <div className="col-md-8 text-center" data-aos="fade-up">
        <h2 className="text-black h1 site-section-heading text-center">Our Services</h2>
      </div>
    </div>
    <div className="row align-items-stretch">
      <div className="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up">
        <div className="unit-4 d-flex">
          <div className="unit-4-icon mr-4"><span className="text-primary icon-laptop2"></span></div>
          <div>
            <h3>Advanced Generative AI Development</h3>
            <p>Train your dataset to generate original outputs such as images, text, or music using state-of-the-art generative AI techniques.</p>
            <p><a href="#">Learn More</a></p>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up" data-aos-delay="100">
        <div className="unit-4 d-flex">
          <div className="unit-4-icon mr-4"><span className="text-primary icon-shopping_cart"></span></div>
          <div>
            <h3>Custom Web Application Development</h3>
            <p>Leverage our tailor-made services to address your specific industry needs, cater to your target audience, and enhance operational efficiency.</p>
            <p><a href="#">Learn More</a></p>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up" data-aos-delay="200">
        <div className="unit-4 d-flex">
          <div className="unit-4-icon mr-4"><span className="text-primary icon-question_answer"></span></div>
          <div>
            <h3>Corporate Trainings</h3>
            <p>Boost team expertise with customized Corporate Training Solutions for colleges and startups. Enhance learning, drive innovation, and thrive in today's competitive industry.</p>
            <p><a href="#">Learn More</a></p>
          </div>
        </div>
      </div>

 






      <div className="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up" data-aos-delay="300">
        <div className="unit-4 d-flex">
          <div className="unit-4-icon mr-4"><span className="text-primary icon-format_paint"></span></div>
          <div>
            <h3>Custom Web Application Development</h3>
            <p>Leverage our tailor-made services to address your specific industry needs, cater to your target audience, and enhance operational efficiency.</p>
            <p><a href="#">Learn More</a></p>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up" data-aos-delay="400">
        <div className="unit-4 d-flex">
          <div className="unit-4-icon mr-4"><span className="text-primary icon-extension"></span></div>
          <div>
            <h3>Copy Writing</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.</p>
            <p><a href="#">Learn More</a></p>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up" data-aos-delay="500">
        <div className="unit-4 d-flex">
          <div className="unit-4-icon mr-4"><span className="text-primary icon-phonelink"></span></div>
          <div>
            <h3>STEM Programs & ATL Lab Setup</h3>
            <p>Transform education with Revolutionizing Education, featuring STEM Programs and AI-Robotics Labs, empowering students for future tech challenges.</p>
            <p><a href="#">Learn More</a></p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

<div className="site-section" id="about-section">
  <div className="container">
    <div className="row mb-5">
      
      <div className="col-md-5 ml-auto mb-5 order-md-2" data-aos="fade">
        <img src="images/about_1.jpg" alt="Image" className="img-fluid rounded"/>
      </div>
      <div className="col-md-6 order-md-1" data-aos="fade">

        <div className="row">

          <div className="col-12">
            <div className="text-left pb-1">
              <h2 className="text-black h1 site-section-heading">About Us</h2>
            </div>
          </div>
          <div className="col-12 mb-4">
            <p className="lead">At Advisions R&D, we are a leading tech and research company dedicated to providing innovative services and solutions in various domains.</p>
          </div>
          <div className="col-md-12 mb-md-5 mb-0 col-lg-6">
            <div className="unit-4">
              <div className="unit-4-icon mr-4 mb-3"><span className="text-secondary icon-phonelink"></span></div>
              <div>
                <h3>Web &amp; Mobile Specialties</h3>
                <p>Expertise in seamless user experiences across web and mobile platforms. From design to development, we deliver exceptional digital solutions.</p>
                <p className="mb-0"><a href="#">Learn More</a></p>
              </div>
            </div>
          </div>
          <div className="col-md-12 mb-md-5 mb-0 col-lg-6">
            <div className="unit-4">
              <div className="unit-4-icon mr-4 mb-3"><span className="text-secondary icon-extension"></span></div>
              <div>
                <h3>Intuitive Thinkers</h3>
                <p>Innovative minds creating user-centric solutions. From concept to execution, we design intuitive experiences that captivate and inspire.</p>
                <p className="mb-0"><a href="#">Learn More</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</div>


<div className="site-section border-bottom" id="team-section">
  <div className="container">
    <div className="row justify-content-center mb-5">
      <div className="col-md-7 text-center">
        <h2 className="text-black h1 site-section-heading">Our Team</h2>
      </div>
    </div>
    <div className="row">
      <div className="col-md-6 col-lg-4 mb-5 mb-lg-0" data-aos="fade" data-aos-delay="100">
        <div className="person text-center">
          <img src="images/person_2.jpg" alt="Image" className="img-fluid rounded-circle w-50 mb-5"/>
          <h3>John Rooster</h3>
          <p className="position text-muted">Co-Founder, President</p>
          <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi at consequatur unde molestiae quidem provident voluptatum deleniti quo iste error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt tenetur.</p>
          <ul className="ul-social-circle">
            <li><a href="#"><span className="icon-facebook"></span></a></li>
            <li><a href="#"><span className="icon-twitter"></span></a></li>
            <li><a href="#"><span className="icon-linkedin"></span></a></li>
            <li><a href="#"><span className="icon-instagram"></span></a></li>
          </ul>
        </div>
      </div>
      <div className="col-md-6 col-lg-4 mb-5 mb-lg-0" data-aos="fade" data-aos-delay="200">
        <div className="person text-center">
          <img src="images/person_3.jpg" alt="Image" className="img-fluid rounded-circle w-50 mb-5"/>
          <h3>Tom Sharp</h3>
          <p className="position text-muted">Co-Founder, COO</p>
          <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi at consequatur unde molestiae quidem provident voluptatum deleniti quo iste error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt tenetur.</p>
          <ul className="ul-social-circle">
            <li><a href="#"><span className="icon-facebook"></span></a></li>
            <li><a href="#"><span className="icon-twitter"></span></a></li>
            <li><a href="#"><span className="icon-linkedin"></span></a></li>
            <li><a href="#"><span className="icon-instagram"></span></a></li>
          </ul>
        </div>
      </div>
      <div className="col-md-6 col-lg-4 mb-5 mb-lg-0" data-aos="fade" data-aos-delay="300">
        <div className="person text-center">
          <img src="images/person_4.jpg" alt="Image" className="img-fluid rounded-circle w-50 mb-5"/>
          <h3>Winston Hodson</h3>
          <p className="position text-muted">Marketing</p>
          <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi at consequatur unde molestiae quidem provident voluptatum deleniti quo iste error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt tenetur.</p>
          <ul className="ul-social-circle">
            <li><a href="#"><span className="icon-facebook"></span></a></li>
            <li><a href="#"><span className="icon-twitter"></span></a></li>
            <li><a href="#"><span className="icon-linkedin"></span></a></li>
            <li><a href="#"><span className="icon-instagram"></span></a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>

{/* <section className="site-section" id="blog-section">
  <div className="container">
    <div className="row justify-content-center mb-5">
      <div className="col-md-8 text-center">
        <h2 className="text-black h1 site-section-heading text-center">Blog</h2>
      </div>
    </div>

    <div className="row">
      <div className="col-md-6 col-lg-4 mb-4 mb-lg-4">
        <div className="h-entry">
          <a href="single.html"><img src="images/img_1.jpg" alt="Image" className="img-fluid"/></a>
          <h2 className="font-size-regular"><a href="single.html">Create Beautiful Website In Less Than An Hour</a></h2>
          <div className="meta mb-4">Ham Brook <span className="mx-2">&bullet;</span> Jan 18, 2019<span className="mx-2">&bullet;</span> <a href="#">News</a></div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.</p>
          <p><a href="#">Continue Reading...</a></p>
        </div> 
      </div>
      <div className="col-md-6 col-lg-4 mb-4 mb-lg-4">
        <div className="h-entry">
          <a href="single.html"><img src="images/img_2.jpg" alt="Image" className="img-fluid"/></a>
          <h2 className="font-size-regular"><a href="single.html">Create Beautiful Website In Less Than An Hour</a></h2>
          <div className="meta mb-4">James Phelps <span className="mx-2">&bullet;</span> Jan 18, 2019<span className="mx-2">&bullet;</span> <a href="#">News</a></div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.</p>
          <p><a href="#">Continue Reading...</a></p>
        </div>
      </div>
      <div className="col-md-6 col-lg-4 mb-4 mb-lg-4">
        <div className="h-entry">
          <a href="single.html"><img src="images/img_1.jpg" alt="Image" className="img-fluid"/></a>
          <h2 className="font-size-regular"><a href="single.html">Create Beautiful Website In Less Than An Hour</a></h2>
          <div className="meta mb-4">James Phelps <span className="mx-2">&bullet;</span> Jan 18, 2019<span className="mx-2">&bullet;</span> <a href="#">News</a></div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.</p>
          <p><a href="#">Continue Reading...</a></p>
        </div> 
      </div>
      
    </div>
  </div>
</section> */}





<Footer/>



</div> 
    </div>
  )
}

export default Home


