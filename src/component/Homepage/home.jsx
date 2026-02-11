import React, { useEffect, useRef } from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";

function Home() {
const sectionRefs = useRef([]);

sectionRefs.current = [];

const addToRefs = (el) => {
  if (el && !sectionRefs.current.includes(el)) {
    sectionRefs.current.push(el);
  }
};

useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  sectionRefs.current.forEach((el) => {
    if (el) observer.observe(el);
  });

  return () => observer.disconnect();
}, []);


  return (
    <div>
      <section className="hero-modern">
  <div className="hero-container">
    
    {/* LEFT CONTENT */}
    <div className="hero-text">
      <span className="hero-tag">Mind • Body • Soul</span>
      <h1>
        Achieve balance in <br />
        mind, body, and soul.
      </h1>
      <p>
        Experience holistic wellness through therapy,
        physiotherapy, and luxury spa care designed
        to restore your total well-being.
      </p>

      <a className="btn-hero" href="#Appointment-section"> Book a Session </a>
    </div>

    {/* RIGHT IMAGE */}
    <div className="hero-image">
      <img
        src="https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg"
        alt="Wellness"
      />

      {/* Decorative Ribbon */}
      <div className="hero-ribbon">
        Inner peace • flexibility • mental clarity • emotional balance
      </div>
    </div>

  </div>
</section>


      {/* Services section */}
      <section id="services" className="services-section">
        <div className="container">
          <h4>
            <b>OUR SERVICES</b>
          </h4>
          <p>
            We offer a comprehensive range of wellness services designed to nurture your mind, 
            body, and soul. From therapeutic treatments to rejuvenating spa experiences, our 
            expert team is dedicated to helping you achieve optimal health and well-being.
          </p>

          {/* Grid section */}
          <section>
            <div className="row row-cols-1 row-cols-md-3 g-4">
              <div className="col fade-section" ref={addToRefs}>
                <div className="card h-100">
                  <img
                    src="https://images.pexels.com/photos/4098168/pexels-photo-4098168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    className="card-img-top"
                    alt="Therapy Services"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Therapy</h5>
                    <p className="card-text">
                      Professional therapeutic services to support your mental and emotional 
                      well-being. Our experienced therapists provide personalized care in a 
                      safe and comfortable environment.
                    </p>
                    <Link to="/therapy" className="btn btn-primary">
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col fade-section" ref={addToRefs}>
                <div className="card h-100">
                  <img
                    src="https://images.pexels.com/photos/5793920/pexels-photo-5793920.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    className="card-img-top"
                    alt="PhysioTherapy Services"
                  />
                  <div className="card-body">
                    <h5 className="card-title">PhysioTherapy</h5>
                    <p className="card-text">
                      Expert physiotherapy services to help you recover from injuries, manage 
                      pain, and improve mobility. Our certified physiotherapists create 
                      customized treatment plans for your needs.
                    </p>
                    <Link to="/physiotherapy" className="btn btn-primary">
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col fade-section" ref={addToRefs}>
                <div className="card h-100">
                  <img
                    src="https://images.pexels.com/photos/6629521/pexels-photo-6629521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    className="card-img-top"
                    alt="WeCaRe Spa Services"
                  />
                  <div className="card-body">
                    <h5 className="card-title">WeCaRe Spa</h5>
                    <p className="card-text">
                      Indulge in our luxurious spa treatments designed to relax, rejuvenate, 
                      and restore your body and mind. Experience tranquility and complete 
                      relaxation in our serene spa environment.
                    </p>
                    <Link to="/spa" className="btn btn-primary">
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* About section */}
      <section id="about" className="about-section">
        <div className="container">
          <h4>ABOUT US</h4>

          <div
  id="card"
  className="card mb-3 fade-section"
  style={{ maxWidth: "100%" }}
  ref={addToRefs}
>

            <div className="row no-gutters">
              <div className="col-md-4">
                <img
                  src="https://cdn.pixabay.com/photo/2019/05/28/10/05/rock-4234793_1280.jpg"
                  className="img-fluid rounded-start"
                  alt="About WeCaRe"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h1>
                    We are Ready to Help <br /> Nurture your mind, <br /> body,
                    and soul.
                  </h1>
                  <p className="card-text">
                    At WeCare, we are dedicated to nurturing your mind, body,
                    and soul through our comprehensive range of therapy,
                    physiotherapy, and spa services. Our team of experienced
                    professionals is committed to providing personalized care
                    that meets your unique needs and promotes overall
                    well-being.
                  </p>
                  <ul className="custom-bullets">
                    <li>Certified and experienced healthcare professionals</li>
                    <li>Personalized treatment plans tailored to your needs</li>
                    <li>State-of-the-art facilities in a calming environment</li>
                  </ul>
                  <p className="card-text">
                    <small className="text-body-secondary">
                      Serving the community since 2020
                    </small>
                  </p>
                  <Link to="/aboutus" className="btn btn-primary btn-custom">
                    Discover More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;