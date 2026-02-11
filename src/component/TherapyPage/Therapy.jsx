import React, { useEffect } from "react";
import "../../styles/Therapy.css";
import { FiUser, FiUsers, FiHeart, FiSmile } from "react-icons/fi";

function Therapy() {
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
      ".fade-in, .slide-in-left, .slide-in-right, .slide-in-up, .stagger-item"
    );
    
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="therapy-page">
      {/* Hero Section */}
      <section className="therapy-hero">
        <div className="hero-overlay">
          <div className="container">
            <h1 className="hero-title">Therapy Services</h1>
            <p className="hero-subtitle">Professional support for your mental and emotional well-being</p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="therapy-intro">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 slide-in-left">
              <h2>Your Journey to Healing Starts Here</h2>
              <p>
                At WeCaRe, we believe that seeking therapy is a courageous step
                toward a healthier, happier life. Our experienced therapists
                provide a safe, confidential, and judgment-free space where you
                can explore your thoughts, feelings, and challenges.
              </p>
              <p>
                Whether you're dealing with anxiety, depression, relationship
                issues, trauma, or simply seeking personal growth, we're here to
                support you every step of the way.
              </p>
            </div>

            <div className="col-md-6 slide-in-right">
              <img
                src="https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Therapy Session"
                className="img-fluid rounded"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Types of Therapy Section */}
      <section className="therapy-types">
        <div className="container">
          <h2 className="section-title fade-in">Our Therapeutic Approaches</h2>
          <p className="section-subtitle fade-in">
            We offer evidence-based therapeutic methods tailored to your needs
          </p>

          <div className="row row-cols-1 row-cols-md-2 g-4">
            <div className="col">
              <div className="therapy-card stagger-item" style={{ animationDelay: "0.1s" }}>
                <div className="therapy-icon">
                  <FiUser />
                </div>
                <h4>Individual Therapy</h4>
                <p>
                  One-on-one sessions focused on personal growth, mental health,
                  and emotional well-being in a confidential setting.
                </p>
              </div>
            </div>

            <div className="col">
              <div className="therapy-card stagger-item" style={{ animationDelay: "0.2s" }}>
                <div className="therapy-icon">
                  <FiUsers />
                </div>
                <h4>Family Therapy</h4>
                <p>
                  Improve communication, resolve conflicts, and strengthen
                  family relationships through guided sessions.
                </p>
              </div>
            </div>

            <div className="col">
              <div className="therapy-card stagger-item" style={{ animationDelay: "0.3s" }}>
                <div className="therapy-icon">
                  <FiHeart />
                </div>
                <h4>Couples Therapy</h4>
                <p>
                  Build healthier relationships by enhancing communication,
                  trust, and emotional connection.
                </p>
              </div>
            </div>

            <div className="col">
              <div className="therapy-card stagger-item" style={{ animationDelay: "0.4s" }}>
                <div className="therapy-icon">
                  <FiSmile />
                </div>
                <h4>Child & Adolescent Therapy</h4>
                <p>
                  Specialized support for children and teens navigating emotional,
                  behavioral, and developmental challenges.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Treat Section */}
      <section className="therapy-conditions">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 slide-in-left">
              <img
                src="https://cdn.pixabay.com/photo/2016/09/19/20/49/baby-1681181_1280.jpg"
                alt="Compassionate Care"
                className="img-fluid rounded"
              />
            </div>

            <div className="col-md-6 slide-in-right">
              <h2>What We Can Help With</h2>
              <ul className="conditions-list">
                <li>Anxiety and Panic Disorders</li>
                <li>Depression and Mood Disorders</li>
                <li>Stress Management</li>
                <li>Trauma and PTSD</li>
                <li>Relationship Issues</li>
                <li>Grief and Loss</li>
                <li>Self-Esteem and Identity</li>
                <li>Life Transitions</li>
                <li>Anger Management</li>
                <li>Eating Disorders</li>
                <li>Addiction and Recovery Support</li>
                <li>Workplace Stress and Burnout</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="therapy-process">
        <div className="container">
          <h2 className="section-title fade-in">What to Expect</h2>
          <p className="section-subtitle fade-in">Your therapeutic journey, simplified</p>

          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <div className="process-step slide-in-up" style={{ animationDelay: "0.1s" }}>
                <div className="step-number">1</div>
                <h4>Initial Consultation</h4>
                <p>
                  A welcoming first session to understand your goals, concerns,
                  and expectations.
                </p>
              </div>
            </div>

            <div className="col">
              <div className="process-step slide-in-up" style={{ animationDelay: "0.2s" }}>
                <div className="step-number">2</div>
                <h4>Personalized Plan</h4>
                <p>
                  We collaboratively create a treatment plan aligned with your
                  unique needs.
                </p>
              </div>
            </div>

            <div className="col">
              <div className="process-step slide-in-up" style={{ animationDelay: "0.3s" }}>
                <div className="step-number">3</div>
                <h4>Ongoing Support</h4>
                <p>
                  Consistent sessions offering guidance, tools, and support as
                  you grow and heal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="therapy-cta">
        <div className="container text-center">
          <h2 className="fade-in">Ready to Begin Your Journey?</h2>
          <p className="fade-in" style={{ animationDelay: "0.1s" }}>
            Taking the first step can feel overwhelming, but you don't have to
            do it alone. We're here for you.
          </p>
          <a href="#Appointment-section" className="btn btn-primary btn-custom fade-in" style={{ animationDelay: "0.2s" }}>
            Book Your Session
          </a>
        </div>
      </section>
    </div>
  );
}

export default Therapy;