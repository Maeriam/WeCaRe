import React from "react";
import '../../styles/footer.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";



function Footer() {
    return (
        <div className="footer-wrapper">
            {/* Main Footer Section */}
            <footer className="main-footer">
                <div className="container">
                    <div className="row g-4">
                        {/* Column 1: About Us */}
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-section">
                                <h5 className="footer-title">
                                    <span className="brand-name">WeCaRe</span>
                                </h5>
                                <p className="footer-text">
                                    We are committed to providing quality therapy and wellness services 
                                    to help you achieve a balanced and healthier life.
                                </p>
                                {/* Social Media Icons */}
                                <div className="social-links">
                                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                                        <FaFacebookF />
                                    </a>
                                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                                        <FaTwitter />
                                    </a>
                                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                                        <FaInstagram />
                                    </a>
                                    <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                                        <SiTiktok />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Column 2: Quick Links */}
                        <div className="col-lg-2 col-md-6">
                            <div className="footer-section">
                                <h5 className="footer-title">Quick Links</h5>
                                <ul className="footer-links">
                                    <li><a href="/">Home</a></li>
                                    <li><a href="/aboutus">About Us</a></li>
                                    <li><a href="/therapy">Therapy</a></li>
                                    <li><a href="/physiotherapy">PhysioTherapy</a></li>
                                    <li><a href="/spa">Spa Services</a></li>                                 
                                    <li><a href="/contactus">Enquire Now</a></li>
                                    <li><a href="/faq">FAQ</a></li>
                                </ul>
                            </div>
                        </div>

                        {/* Column 3: Contact Info */}
                        <div className="col-lg-3 col-md-6">
                            <div className="footer-section">
                                <h5 className="footer-title">Contact Us</h5>
                                <ul className="contact-info">
                                    <li>
                                        <FaMapMarkerAlt />
                                        <span>123 Wellness St, City, Country</span>
                                    </li>
                                    <li>
                                        <FaPhoneAlt />
                                        <span>(123) 456-7890</span>
                                    </li>
                                    <li>
                                        <FaEnvelope />
                                        <span>info@wecare.com</span>
                                    </li>
                                    <li>
                                        <FaClock />
                                        <span>Mon - Fri: 9AM - 6PM</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Column 4: Google Map */}
                        <div className="col-lg-4 col-md-6">
                            <div className="footer-section">
                                <h5 className="footer-title">Find Us</h5>
                                <div className="map-container">
                                  
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968459391!3d40.74844097932847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                                        width="100%"
                                        height="200"
                                        style={{ border: 0, borderRadius: '10px' }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="WeCare Location"
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Bottom Footer */}
            <div className="bottom-footer">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6 text-center text-md-start">
                            <p className="copyright-text">
                                &copy; {new Date().getFullYear()} WeCare Therapy Services. All rights reserved.
                            </p>
                        </div>
                        <div className="col-md-6 text-center text-md-end">
                            <div className="footer-bottom-links">
                                <a href="#privacy">Privacy Policy</a>
                                <span className="separator">|</span>
                                <a href="#terms">Terms of Service</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;