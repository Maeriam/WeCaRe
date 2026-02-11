import React, { useEffect } from "react";
import "../../styles/PhysioTherapy.css";

function Physiotherapy() {
  useEffect(() => {
 
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const animatedElements = document.querySelectorAll(
      ".fade-in, .slide-in-left, .slide-in-right, .slide-in-up, .stagger-item, .scale-in"
    );
    
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="physiotherapy-page">
      {/* Hero Section */}
      <section className="physio-hero">
        <div className="hero-overlay">
          <div className="container">
            <h1 className="hero-title">Physiotherapy Services</h1>
            <p className="hero-subtitle">Restore movement, reduce pain, and enhance your quality of life</p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="physio-intro">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 slide-in-left">
              <img
                src="https://cdn.pixabay.com/photo/2020/10/04/01/37/physiotherapy-5624920_1280.jpg"
                alt="Physiotherapy Treatment"
                className="img-fluid rounded"
              />
            </div>
            <div className="col-md-6 slide-in-right">
              <h2>Expert Care for Your Physical Well-being</h2>
              <p>
                Our certified physiotherapists combine clinical expertise with 
                compassionate care to help you recover from injuries, manage chronic 
                pain, and improve your overall physical function.
              </p>
              <p>
                Whether you're recovering from surgery, dealing with a sports injury, 
                or managing a chronic condition, we create personalized treatment plans 
                designed to help you achieve your rehabilitation goals.
              </p>
              <div className="physio-features">
                <div className="feature-item fade-in" style={{ animationDelay: "0.2s" }}>
                  <span className="feature-icon">✓</span>
                  <span>Certified & Experienced Physiotherapists</span>
                </div>
                <div className="feature-item fade-in" style={{ animationDelay: "0.3s" }}>
                  <span className="feature-icon">✓</span>
                  <span>State-of-the-Art Equipment</span>
                </div>
                <div className="feature-item fade-in" style={{ animationDelay: "0.4s" }}>
                  <span className="feature-icon">✓</span>
                  <span>Personalized Treatment Plans</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="physio-services">
        <div className="container">
          <h2 className="section-title fade-in">Our Physiotherapy Services</h2>
          <p className="section-subtitle fade-in">
            Comprehensive care tailored to your recovery and wellness goals
          </p>

          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <div className="service-card stagger-item" style={{ animationDelay: "0.1s" }}>
                <img
                  src="https://images.pexels.com/photos/5793920/pexels-photo-5793920.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Manual Therapy"
                  className="service-img"
                />
                <div className="service-content">
                  <h4>Manual Therapy</h4>
                  <p>
                    Hands-on techniques including massage, joint mobilization, 
                    and manipulation to reduce pain and improve mobility.
                  </p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="service-card stagger-item" style={{ animationDelay: "0.2s" }}>
                <img
                  src="https://images.pexels.com/photos/6111616/pexels-photo-6111616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Sports Injury Rehabilitation"
                  className="service-img"
                />
                <div className="service-content">
                  <h4>Sports Injury Rehabilitation</h4>
                  <p>
                    Specialized treatment for athletes recovering from sports-related 
                    injuries and looking to return to peak performance.
                  </p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="service-card stagger-item" style={{ animationDelay: "0.3s" }}>
                <img
                  src="https://images.pexels.com/photos/7551662/pexels-photo-7551662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Post-Surgical Rehabilitation"
                  className="service-img"
                />
                <div className="service-content">
                  <h4>Post-Surgical Rehabilitation</h4>
                  <p>
                    Guided recovery programs to help you regain strength, flexibility, 
                    and function after surgical procedures.
                  </p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="service-card stagger-item" style={{ animationDelay: "0.4s" }}>
                <img
                  src="https://images.pexels.com/photos/4506109/pexels-photo-4506109.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Pain Management"
                  className="service-img"
                />
                <div className="service-content">
                  <h4>Pain Management</h4>
                  <p>
                    Evidence-based approaches to manage chronic pain conditions 
                    including back pain, neck pain, and arthritis.
                  </p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="service-card stagger-item" style={{ animationDelay: "0.5s" }}>
                <img
                  src="https://i.pinimg.com/736x/27/4e/c3/274ec3887e8dc6c9980fcff2c84f4653.jpg"
                  alt="Neurological Rehabilitation"
                  className="service-img"
                />
                <div className="service-content">
                  <h4>Neurological Rehabilitation</h4>
                  <p>
                    Specialized care for patients recovering from stroke, spinal 
                    cord injuries, and other neurological conditions.
                  </p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="service-card stagger-item" style={{ animationDelay: "0.6s" }}>
                <img
                  src="https://i.pinimg.com/1200x/ce/2c/e1/ce2ce1886b59ae3476360c1a112996ae.jpg"
                  alt="Pediatric Physiotherapy"
                  className="service-img"
                />
                <div className="service-content">
                  <h4>Pediatric Physiotherapy</h4>
                  <p>
                    Gentle, playful approaches to help children overcome developmental 
                    delays and movement challenges.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conditions Treated Section */}
      <section className="physio-conditions">
        <div className="container">
          <h2 className="section-title fade-in">Conditions We Treat</h2>
          <p className="section-subtitle fade-in">
            Expert care for a wide range of musculoskeletal and neurological conditions
          </p>

          <div className="row">
            <div className="col-md-4">
              <div className="condition-category slide-in-up" style={{ animationDelay: "0.1s" }}>
                <h5>Musculoskeletal</h5>
                <ul>
                  <li>Back & Neck Pain</li>
                  <li>Sports Injuries</li>
                  <li>Arthritis</li>
                  <li>Joint Replacement Recovery</li>
                  <li>Muscle Strains & Sprains</li>
                  <li>Tendonitis</li>
                </ul>
              </div>
            </div>

            <div className="col-md-4">
              <div className="condition-category slide-in-up" style={{ animationDelay: "0.2s" }}>
                <h5>Neurological</h5>
                <ul>
                  <li>Stroke Recovery</li>
                  <li>Spinal Cord Injuries</li>
                  <li>Parkinson's Disease</li>
                  <li>Multiple Sclerosis</li>
                  <li>Balance Disorders</li>
                  <li>Traumatic Brain Injury</li>
                </ul>
              </div>
            </div>

            <div className="col-md-4">
              <div className="condition-category slide-in-up" style={{ animationDelay: "0.3s" }}>
                <h5>Other Conditions</h5>
                <ul>
                  <li>Postural Problems</li>
                  <li>Workplace Injuries</li>
                  <li>Chronic Pain Syndromes</li>
                  <li>Mobility Issues</li>
                  <li>Pre/Post-Natal Care</li>
                  <li>Geriatric Care</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Approach Section */}
      <section className="physio-approach">
        <div className="container">
          <h2 className="section-title fade-in">Our Treatment Approach</h2>
          
          <div className="approach-timeline">
            <div className="timeline-item slide-in-left" style={{ animationDelay: "0.1s" }}>
              <div className="timeline-marker">1</div>
              <div className="timeline-content">
                <h4>Comprehensive Assessment</h4>
                <p>
                  Thorough evaluation of your condition, medical history, movement 
                  patterns, and functional limitations to identify the root cause.
                </p>
              </div>
            </div>

            <div className="timeline-item slide-in-right" style={{ animationDelay: "0.2s" }}>
              <div className="timeline-marker">2</div>
              <div className="timeline-content">
                <h4>Personalized Treatment Plan</h4>
                <p>
                  Customized program combining manual therapy, therapeutic exercises, 
                  and specialized techniques tailored to your specific needs.
                </p>
              </div>
            </div>

            <div className="timeline-item slide-in-left" style={{ animationDelay: "0.3s" }}>
              <div className="timeline-marker">3</div>
              <div className="timeline-content">
                <h4>Active Rehabilitation</h4>
                <p>
                  Hands-on treatment sessions, progressive exercise programs, and 
                  education to empower you in your recovery journey.
                </p>
              </div>
            </div>

            <div className="timeline-item slide-in-right" style={{ animationDelay: "0.4s" }}>
              <div className="timeline-marker">4</div>
              <div className="timeline-content">
                <h4>Prevention & Wellness</h4>
                <p>
                  Guidance on injury prevention, ergonomics, and lifestyle modifications 
                  to maintain long-term health and prevent recurrence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="physio-cta">
        <div className="container text-center">
          <h2 className="fade-in">Start Your Recovery Journey Today</h2>
          <p className="fade-in" style={{ animationDelay: "0.1s" }}>
            Don't let pain or limited mobility hold you back. Our expert physiotherapists 
            are ready to help you regain your strength and independence.
          </p>
          <a href="#Appointment-section" className="btn btn-primary btn-custom fade-in" style={{ animationDelay: "0.2s" }}>
            Book Your Assessment
          </a>
        </div>
      </section>
    </div>
  );
}

export default Physiotherapy;