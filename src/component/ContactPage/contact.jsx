import React, { useState, useEffect } from "react";
import "../../styles/contact.css";
import {
  FaBrain,
  FaDumbbell,
  FaSpa,
  FaFilePdf,
  FaClipboardList,
  FaRunning,
  FaSmile,
  FaBullseye,
  FaArrowRight,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

function ContactUs() {
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
          } else {
            entry.target.classList.remove("fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(
      ".info-card, .faq-item, .form-intro, .contact-form-container"
    );
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for contacting us! We'll get back to you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="hero-overlay">
          <div className="container">
            <h1>Get in Touch</h1>
            <p>We're here to answer your questions and support your wellness journey</p>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="contact-info-section">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-4">
              <div className="info-card">
                <div className="info-icon"><FaMapMarkerAlt /></div>
                <h4>Visit Us</h4>
                <p>
                  123 Wellness Avenue<br />
                  Victoria Island, Lagos<br />
                  Nigeria
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="info-card">
                <div className="info-icon"><FaPhoneAlt /></div>
                <h4>Call Us</h4>
                <p>
                  <a href="tel:+2341234567890">+234 123 456 7890</a><br />
                  <a href="tel:+2349876543210">+234 987 654 3210</a><br />
                  <span className="hours">Mon - Sat: 8AM - 8PM</span>
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="info-card">
                <div className="info-icon"><FaEnvelope /></div>
                <h4>Email Us</h4>
                <p>
                  <a href="mailto:info@wecare.ng">info@wecare.ng</a><br />
                  <a href="mailto:appointments@wecare.ng">appointments@wecare.ng</a><br />
                  <span className="hours">24/7 Response</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="form-intro">
                <h2>Send Us a Message</h2>
                <p>
                  Have a question or need assistance? Fill out the form below and 
                  our team will get back to you within 24 hours.
                </p>
                <div className="why-contact">
                  <h5>Why Contact Us?</h5>
                  <ul>
                    <li>Book or reschedule appointments</li>
                    <li>Ask about our services and pricing</li>
                    <li>Get personalized wellness recommendations</li>
                    <li>Request information about gift certificates</li>
                    <li>Provide feedback on your experience</li>
                    <li>Inquire about group or corporate packages</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="contact-form-container">
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      className="form-control"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+234 XXX XXX XXXX"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Subject *</label>
                    <select
                      className="form-control"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="appointment">Appointment Inquiry</option>
                      <option value="services">Services Information</option>
                      <option value="pricing">Pricing & Packages</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell us how we can help you..."
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary btn-submit">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="container-fluid p-0">
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7050826229973!2d3.4199999!3d6.4281447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sVictoria%20Island%2C%20Lagos!5e0!3m2!1sen!2sng!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="WeCaRe Location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ Preview Section */}
      <section className="faq-preview">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Quick answers to common questions about our services
          </p>

          <div className="row g-4">
            <div className="col-md-6">
              <div className="faq-item">
                <h5>Do I need to book in advance?</h5>
                <p>
                  We recommend booking in advance to secure your preferred time slot, 
                  especially for weekends. However, we also accept walk-ins based on 
                  availability.
                </p>
              </div>
            </div>

            <div className="col-md-6">
              <div className="faq-item">
                <h5>What should I bring to my appointment?</h5>
                <p>
                  For therapy sessions, just bring yourself. For physiotherapy, wear 
                  comfortable clothing. For spa treatments, we provide robes and slippers.
                </p>
              </div>
            </div>

            <div className="col-md-6">
              <div className="faq-item">
                <h5>What is your cancellation policy?</h5>
                <p>
                  We require 24 hours notice for cancellations. Late cancellations may 
                  incur a fee. Please contact us as soon as possible if you need to 
                  reschedule.
                </p>
              </div>
            </div>

            <div className="col-md-6">
              <div className="faq-item">
                <h5>Do you offer gift certificates?</h5>
                <p>
                  Yes! Gift certificates are available for all our services and packages. 
                  They make perfect gifts for loved ones. Contact us for more details.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactUs;
