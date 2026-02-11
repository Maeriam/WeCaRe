import React, { useEffect } from "react";
import "../../styles/spa.css";
import { 
  FaSpa, 
  FaLeaf, 
  FaHeart, 
  FaSeedling, 
  FaDove,
  FaSmile,
  FaStar,
  FaBullseye,
  FaMoon,
  FaRainbow
} from "react-icons/fa";
import { GiLotusFlower, GiMeditation, GiFlowerPot } from "react-icons/gi";
import { IoSparklesSharp } from "react-icons/io5";

function Spa() {
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
      ".fade-in, .slide-in-left, .slide-in-right, .slide-in-up, .stagger-item, .scale-in, .float-in"
    );
    
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="spa-page">
      {/* Hero Section */}
      <section className="spa-hero">
        <div className="hero-overlay">
          <div className="container">
            <h1 className="hero-title">WeCaRe Spa</h1>
            <p className="hero-subtitle">Escape, Relax, and Rejuvenate in Tranquility</p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="spa-intro">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 slide-in-left">
              <h2>Your Oasis of Calm and Wellness</h2>
              <p>
                Step into a world of serenity at WeCaRe Spa. Our sanctuary is 
                designed to melt away stress, restore balance, and revitalize 
                your body and spirit.
              </p>
              <p>
                From soothing massages to luxurious facials and therapeutic body 
                treatments, every service is crafted to provide you with an 
                unforgettable wellness experience. Let us pamper you with the care 
                and attention you deserve.
              </p>
              <div className="spa-highlights">
                <div className="highlight-item fade-in" style={{ animationDelay: "0.2s" }}>
                  <span className="highlight-icon"><FaLeaf /></span>
                  <span>Premium Organic Products</span>
                </div>
                <div className="highlight-item fade-in" style={{ animationDelay: "0.3s" }}>
                  <span className="highlight-icon"><IoSparklesSharp /></span>
                  <span>Experienced Spa Therapists</span>
                </div>
                <div className="highlight-item fade-in" style={{ animationDelay: "0.4s" }}>
                  <span className="highlight-icon"><FaDove /></span>
                  <span>Peaceful & Private Environment</span>
                </div>
              </div>
            </div>
            <div className="col-md-6 slide-in-right">
              <img
                src="https://i.pinimg.com/1200x/8f/33/e0/8f33e0d380d4ec1d8760c7d35c54264e.jpg"
                alt="Spa Environment"
                className="img-fluid rounded"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Signature Treatments Section */}
      <section className="spa-treatments">
        <div className="container">
          <h2 className="section-title fade-in">Signature Spa Treatments</h2>
          <p className="section-subtitle fade-in">
            Indulge in our carefully curated menu of relaxation and rejuvenation
          </p>

          <div className="row row-cols-1 row-cols-md-2 g-4">
            <div className="col">
              <div className="treatment-card stagger-item" style={{ animationDelay: "0.1s" }}>
                <div className="treatment-image">
                  <img
                    src="https://i.pinimg.com/736x/51/26/24/512624f72a307471dff9781d1019f736.jpg"
                    alt="Massage Therapy"
                  />
                  <div className="treatment-overlay">
                    <span className="treatment-icon"><FaSpa /></span>
                  </div>
                </div>
                <div className="treatment-content">
                  <h4>Massage Therapy</h4>
                  <ul className="treatment-list">
                    <li><strong>Swedish Massage</strong> - Classic relaxation massage</li>
                    <li><strong>Deep Tissue Massage</strong> - Targeted muscle relief</li>
                    <li><strong>Hot Stone Massage</strong> - Heated stone therapy</li>
                    <li><strong>Aromatherapy Massage</strong> - Essential oil infusion</li>
                    <li><strong>Prenatal Massage</strong> - Gentle care for mothers-to-be</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="treatment-card stagger-item" style={{ animationDelay: "0.2s" }}>
                <div className="treatment-image">
                  <img
                    src="https://i.pinimg.com/736x/8f/2f/33/8f2f33bb26e8ea62d66be185ec4d1c80.jpg"
                    alt="Facial Treatments"
                  />
                  <div className="treatment-overlay">
                    <span className="treatment-icon"><IoSparklesSharp /></span>
                  </div>
                </div>
                <div className="treatment-content">
                  <h4>Facial Treatments</h4>
                  <ul className="treatment-list">
                    <li><strong>Hydrating Facial</strong> - Deep moisture therapy</li>
                    <li><strong>Anti-Aging Facial</strong> - Wrinkle reduction treatment</li>
                    <li><strong>Brightening Facial</strong> - Even skin tone</li>
                    <li><strong>Acne Treatment Facial</strong> - Clarifying therapy</li>
                    <li><strong>Organic Facial</strong> - Natural ingredient care</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="treatment-card stagger-item" style={{ animationDelay: "0.3s" }}>
                <div className="treatment-image">
                  <img
                    src="https://i.pinimg.com/1200x/7d/81/56/7d8156cfe8588e2447161b620a24eafe.jpg"
                    alt="Body Treatments"
                  />
                  <div className="treatment-overlay">
                    <span className="treatment-icon"><GiLotusFlower /></span>
                  </div>
                </div>
                <div className="treatment-content">
                  <h4>Body Treatments</h4>
                  <ul className="treatment-list">
                    <li><strong>Body Scrub</strong> - Exfoliation & renewal</li>
                    <li><strong>Body Wrap</strong> - Detoxifying treatment</li>
                    <li><strong>Mud Therapy</strong> - Mineral-rich application</li>
                    <li><strong>Hydrotherapy</strong> - Water-based healing</li>
                    <li><strong>Full Body Polish</strong> - Silky smooth skin</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="treatment-card stagger-item" style={{ animationDelay: "0.4s" }}>
                <div className="treatment-image">
                  <img
                    src="https://images.pexels.com/photos/5240639/pexels-photo-5240639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Wellness Rituals"
                  />
                  <div className="treatment-overlay">
                    <span className="treatment-icon"><GiMeditation /></span>
                  </div>
                </div>
                <div className="treatment-content">
                  <h4>Wellness Rituals</h4>
                  <ul className="treatment-list">
                    <li><strong>Couples Massage</strong> - Shared relaxation</li>
                    <li><strong>Reflexology</strong> - Pressure point therapy</li>
                    <li><strong>Meditation Sessions</strong> - Guided mindfulness</li>
                    <li><strong>Sauna & Steam</strong> - Detox & relaxation</li>
                    <li><strong>Spa Packages</strong> - Complete day of bliss</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spa Packages Section */}
      <section className="spa-packages">
        <div className="container">
          <h2 className="section-title fade-in">Curated Spa Packages</h2>
          <p className="section-subtitle fade-in">
            Complete wellness experiences for ultimate relaxation
          </p>

          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <div className="package-card scale-in" style={{ animationDelay: "0.1s" }}>
                <div className="package-header">
                  <h4>Serenity Escape</h4>
                  <p className="package-duration">3 Hours</p>
                </div>
                <div className="package-body">
                  <ul className="package-includes">
                    <li>60-min Swedish Massage</li>
                    <li>45-min Hydrating Facial</li>
                    <li>30-min Body Scrub</li>
                    <li>Herbal Tea & Light Refreshments</li>
                  </ul>
                  <p className="package-description">
                    Perfect for first-time spa visitors or anyone seeking 
                    complete relaxation.
                  </p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="package-card featured scale-in" style={{ animationDelay: "0.2s" }}>
                <div className="popular-badge">Most Popular</div>
                <div className="package-header">
                  <h4>Rejuvenation Ritual</h4>
                  <p className="package-duration">4 Hours</p>
                </div>
                <div className="package-body">
                  <ul className="package-includes">
                    <li>90-min Hot Stone Massage</li>
                    <li>60-min Anti-Aging Facial</li>
                    <li>45-min Body Wrap</li>
                    <li>Reflexology Session</li>
                    <li>Spa Lunch Included</li>
                  </ul>
                  <p className="package-description">
                    Our signature package for total mind-body rejuvenation.
                  </p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="package-card scale-in" style={{ animationDelay: "0.3s" }}>
                <div className="package-header">
                  <h4>Ultimate Bliss</h4>
                  <p className="package-duration">Full Day</p>
                </div>
                <div className="package-body">
                  <ul className="package-includes">
                    <li>120-min Deep Tissue Massage</li>
                    <li>75-min Organic Facial</li>
                    <li>60-min Full Body Polish</li>
                    <li>Meditation & Sauna Access</li>
                    <li>Gourmet Spa Lunch</li>
                    <li>Complimentary Take-Home Products</li>
                  </ul>
                  <p className="package-description">
                    Indulge in a complete day of luxury and pampering.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="spa-benefits">
        <div className="container">
          <h2 className="section-title fade-in">The WeCaRe Spa Experience</h2>
          
          <div className="row align-items-center">
            <div className="col-md-6 slide-in-left">
              <img
                src="https://images.pexels.com/photos/3865676/pexels-photo-3865676.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Spa Benefits"
                className="img-fluid rounded"
              />
            </div>
            <div className="col-md-6 slide-in-right">
              <div className="benefits-list">
                <div className="benefit-item stagger-item" style={{ animationDelay: "0.1s" }}>
                  <div className="benefit-icon"><FaHeart /></div>
                  <div className="benefit-text">
                    <h5>Stress Relief & Relaxation</h5>
                    <p>Release tension and find your inner peace</p>
                  </div>
                </div>
                <div className="benefit-item stagger-item" style={{ animationDelay: "0.2s" }}>
                  <div className="benefit-icon"><FaStar /></div>
                  <div className="benefit-text">
                    <h5>Improved Circulation</h5>
                    <p>Enhance blood flow and oxygenation</p>
                  </div>
                </div>
                <div className="benefit-item stagger-item" style={{ animationDelay: "0.3s" }}>
                  <div className="benefit-icon"><IoSparklesSharp /></div>
                  <div className="benefit-text">
                    <h5>Radiant Skin</h5>
                    <p>Nourish and rejuvenate your complexion</p>
                  </div>
                </div>
                <div className="benefit-item stagger-item" style={{ animationDelay: "0.4s" }}>
                  <div className="benefit-icon"><FaBullseye /></div>
                  <div className="benefit-text">
                    <h5>Pain Management</h5>
                    <p>Alleviate muscle aches and joint discomfort</p>
                  </div>
                </div>
                <div className="benefit-item stagger-item" style={{ animationDelay: "0.5s" }}>
                  <div className="benefit-icon"><FaMoon /></div>
                  <div className="benefit-text">
                    <h5>Better Sleep</h5>
                    <p>Promote deeper, more restful sleep</p>
                  </div>
                </div>
                <div className="benefit-item stagger-item" style={{ animationDelay: "0.6s" }}>
                  <div className="benefit-icon"><FaRainbow /></div>
                  <div className="benefit-text">
                    <h5>Enhanced Well-being</h5>
                    <p>Boost mood and overall quality of life</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="spa-cta">
        <div className="container text-center">
          <h2 className="fade-in">Gift Yourself the Luxury of Wellness</h2>
          <p className="fade-in" style={{ animationDelay: "0.1s" }}>
            Treat yourself or a loved one to an unforgettable spa experience. 
            Book your appointment today and discover true tranquility.
          </p>
          <a href="#Appointment-section" className="btn btn-primary btn-custom fade-in" style={{ animationDelay: "0.2s" }}>
            Book Your Spa Experience
          </a>
        </div>
      </section>
    </div>
  );
}

export default Spa;