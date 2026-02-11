import React, { useState, useEffect, useRef } from "react";
import '../../styles/appointment.css';
import { 
  FaCalendarAlt, 
  FaUserMd, 
  FaCalendarCheck, 
  FaHeart, 
  FaNotesMedical, 
  FaUser, 
  FaEnvelope, 
  FaPhoneAlt, 
  FaCalendar, 
  FaClock, 
  FaSpa, 
  FaCommentDots, 
  FaArrowRight,
  FaBrain,
  FaDumbbell,
  FaStethoscope
} from "react-icons/fa";


function Appointment() {
    const services = [
  { value: "therapy", label: "Therapy", icon: <FaBrain /> },
  { value: "physiotherapy", label: "Physiotherapy", icon: <FaDumbbell /> },
  { value: "spa", label: "WeCare Spa", icon: <FaSpa /> },
  { value: "consultation", label: "General Consultation", icon: <FaStethoscope /> }
];

const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        service: '',
        message: ''
    });

    const [isVisible, setIsVisible] = useState(false);
    const [focusedField, setFocusedField] = useState(null);
    const sectionRef = useRef(null);

    // Intersection Observer for scroll animations
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        const current = sectionRef.current;
        if (current) {
            observer.observe(current);
        }

        return () => {
            if (current) {
                observer.unobserve(current);
            }
        };
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Basic validation
        if (!formData.fullName || !formData.email || !formData.phone || !formData.date || !formData.service) {
            alert('Please fill in all required fields');
            return;
        }

        
        console.log('Appointment Data:', formData);
        alert('Appointment request submitted! We will contact you soon.');
        
        // Reset form
        setFormData({
            fullName: '',
            email: '',
            phone: '',
            date: '',
            time: '',
            service: '',
            message: ''
        });
    };

    const benefits = [
        {
            icon: <FaUserMd />,
            title: "Expert Professionals",
            description: "Our certified professionals bring years of experience to ensure you receive the highest quality care."
        },
        {
            icon: <FaCalendarCheck />,
            title: "Flexible Scheduling",
            description: "We offer convenient appointment times to fit your busy schedule, including evenings and weekends."
        },
        {
            icon: <FaHeart />,
            title: "Personalized Care",
            description: "Every treatment plan is customized to meet your unique wellness goals and health needs."
        }
    ];

    return (
        <div 
            id="Appointment-section" 
            className="appointment-section py-5"
            ref={sectionRef}
        >
            {/* Animated Background */}
            <div className="appointment-background">
                <div className="gradient-overlay"></div>
                <div className="floating-shapes">
                    <div className="shape shape-1"></div>
                    <div className="shape shape-2"></div>
                    <div className="shape shape-3"></div>
                </div>
            </div>

            <div className="container position-relative">
                <div className="row g-5 align-items-center">
                    {/* Left Column - Info Section */}
                    <div className={`col-lg-6 ${isVisible ? 'fade-in-left' : ''}`}>
                        <div className="info-section">
                            <span className="section-badge">
                                <FaCalendarAlt className="me-2" />
                                Book Now
                            </span>
                            <h1 className="main-title">
                                Your Journey to 
                                <span className="highlight"> Wellness </span>
                                Starts Here
                            </h1>
                            <p className="description">
                                Experience personalized care tailored to your wellness needs. Our expert team is 
                                dedicated to helping you achieve optimal health through therapeutic treatments, 
                                physiotherapy sessions, and relaxing spa services.
                            </p>

                            {/* Benefits Cards */}
                            <div className="benefits-container">
                                {benefits.map((benefit, index) => (
                                    <div 
                                        key={index}
                                        className="benefit-card"
                                        style={{ animationDelay: `${index * 0.2}s` }}
                                    >
                                        <div className="benefit-icon">
                                            {benefit.icon}
                                        </div>
                                        <div className="benefit-content">
                                            <h5>{benefit.title}</h5>
                                            <p>{benefit.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Appointment Form */}
                    <div className={`col-lg-6 ${isVisible ? 'fade-in-right' : ''}`}>
                        <div className="appointment-form-wrapper">
                            <div className="form-header">
                                <div className="form-icon">
                                    <FaNotesMedical />
                                </div>
                                <h2 className="form-title">Book Your Appointment</h2>
                                <p className="form-subtitle">Fill in your details and we'll get back to you soon</p>
                            </div>

                            <form className="appointment-form" onSubmit={handleSubmit}>
                                {/* Full Name */}
                                <div className="form-group">
                                    <label htmlFor="fullName" className="form-label">
                                                <FaUser className="me-2" />
                                        Full Name *
                                    </label>
                                    <input 
                                        type="text" 
                                        className={`form-control ${focusedField === 'fullName' ? 'focused' : ''}`}
                                        id="fullName"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        onFocus={() => setFocusedField('fullName')}
                                        onBlur={() => setFocusedField(null)}
                                        placeholder="Enter your full name"
                                        required
                                    />
                                </div>

                                {/* Email and Phone */}
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="email" className="form-label">
                                                <FaEnvelope className="me-2" />
                                                Email *
                                            </label>
                                            <input 
                                                type="email" 
                                                className={`form-control ${focusedField === 'email' ? 'focused' : ''}`}
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                onFocus={() => setFocusedField('email')}
                                                onBlur={() => setFocusedField(null)}
                                                placeholder="your.email@example.com"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="phone" className="form-label">
                                                <FaPhoneAlt className="me-2" />
                                                Phone *
                                            </label>
                                            <input 
                                                type="tel" 
                                                className={`form-control ${focusedField === 'phone' ? 'focused' : ''}`}
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                onFocus={() => setFocusedField('phone')}
                                                onBlur={() => setFocusedField(null)}
                                                placeholder="+1 (555) 000-0000"
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Date and Time */}
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="date" className="form-label">
                                                <FaCalendar className="me-2" />
                                                Date *
                                            </label>
                                            <input 
                                                type="date" 
                                                className={`form-control ${focusedField === 'date' ? 'focused' : ''}`}
                                                id="date"
                                                name="date"
                                                value={formData.date}
                                                onChange={handleChange}
                                                onFocus={() => setFocusedField('date')}
                                                onBlur={() => setFocusedField(null)}
                                                min={new Date().toISOString().split('T')[0]}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label htmlFor="time" className="form-label">
                                                <FaClock className="me-2" />
                                                Time
                                            </label>
                                            <input 
                                                type="time" 
                                                className={`form-control ${focusedField === 'time' ? 'focused' : ''}`}
                                                id="time"
                                                name="time"
                                                value={formData.time}
                                                onChange={handleChange}
                                                onFocus={() => setFocusedField('time')}
                                                onBlur={() => setFocusedField(null)}
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Service Type */}
<div className="form-group">
  <label className="form-label">
    <FaSpa className="me-2" />
    Service Type *
  </label>

  <div 
    className={`custom-select ${isDropdownOpen ? 'open' : ''}`}
    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
  >
    <div className="selected">
      {formData.service || "Choose a service..."}
    </div>

    {isDropdownOpen && (
      <ul className="options">
        {services.map((service) => (
          <li
            key={service.value}
            onClick={() => {
              setFormData(prev => ({ ...prev, service: service.label }));
              setIsDropdownOpen(false);
            }}
          >
            <span className="icon">{service.icon}</span>
            {service.label}
          </li>
        ))}
      </ul>
    )}
  </div>
</div>


                                {/* Additional Notes */}
                                <div className="form-group">
                                    <label htmlFor="message" className="form-label">
                                        <FaCommentDots className="me-2" />
                                        Additional Notes
                                    </label>
                                    <textarea 
                                        className={`form-control ${focusedField === 'message' ? 'focused' : ''}`}
                                        name="message" 
                                        id="message" 
                                        rows="4" 
                                        placeholder="Any specific concerns or requests?"
                                        value={formData.message}
                                        onChange={handleChange}
                                        onFocus={() => setFocusedField('message')}
                                        onBlur={() => setFocusedField(null)}
                                    ></textarea>
                                </div>

                                {/* Submit Button */}
                                <button type="submit" className="btn-submit">
                                    <span className="btn-text">Book Appointment</span>
                                    <FaArrowRight className="ms-2" />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Appointment;