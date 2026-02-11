import React, { useState, useEffect } from "react";
import '../../styles/testimonial.css';
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";

function TestimonialCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    
    const testimonials = [
        {
            id: 1,
            name: "Sarah Mitchell",
            role: "Therapy Client",
            text: "WeCare has truly transformed my life. The therapists are incredibly understanding and professional. I've made more progress in three months here than I did in years elsewhere.",
            rating: 5
        },
        {
            id: 2,
            name: "James Rodriguez",
            role: "PhysioTherapy Patient",
            text: "After my sports injury, I thought I'd never get back to playing. The physiotherapy team at WeCare worked miracles. I'm now back on the field, stronger than ever!",
            rating: 5
        },
        {
            id: 3,
            name: "Emily Chen",
            role: "Spa Regular",
            text: "The spa services here are absolutely divine. It's my monthly escape from stress. The staff is attentive, the atmosphere is peaceful, and I always leave feeling rejuvenated.",
            rating: 5
        },
        {
            id: 4,
            name: "Michael Brown",
            role: "Therapy Client",
            text: "I was skeptical at first, but WeCare exceeded all my expectations. The personalized approach and genuine care I received made all the difference in my recovery journey.",
            rating: 5
        },
        {
            id: 5,
            name: "Lisa Anderson",
            role: "PhysioTherapy Patient",
            text: "Outstanding service! The physiotherapist took time to understand my needs and created a perfect treatment plan. My chronic back pain is finally manageable.",
            rating: 5
        },
        {
            id: 6,
            name: "David Kim",
            role: "Spa Regular",
            text: "WeCare Spa is my sanctuary. The calming environment and expert staff make every visit a rejuvenating experience. I leave feeling like a new person every time.",
            rating: 5
        },
        {
            id: 7,
            name: "Rachel Green",
            role: "Therapy Client",
            text: "Finding WeCare was a turning point for me. The therapists are compassionate, skilled, and truly invested in my wellbeing. I'm grateful for their support.",
            rating: 5
        },
        {
            id: 8,
            name: "Thomas Wright",
            role: "PhysioTherapy Patient",
            text: "Excellent physiotherapy services! They helped me recover from my accident faster than I thought possible. Professional, caring, and highly effective.",
            rating: 5
        }
    ];

  
    const itemsPerView = 3;

    
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prev => (prev + 1) % testimonials.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [testimonials.length]);

    const handleNext = () => {
        if (!isAnimating) {
            setIsAnimating(true);
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
            setTimeout(() => setIsAnimating(false), 600);
        }
    };

    const handlePrev = () => {
        if (!isAnimating) {
            setIsAnimating(true);
            setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
            setTimeout(() => setIsAnimating(false), 600);
        }
    };

    const goToSlide = (index) => {
        if (!isAnimating) {
            setIsAnimating(true);
            setCurrentIndex(index);
            setTimeout(() => setIsAnimating(false), 600);
        }
    };

  
    const getVisibleTestimonials = () => {
        const visible = [];
        for (let i = 0; i < itemsPerView; i++) {
            const index = (currentIndex + i) % testimonials.length;
            visible.push(testimonials[index]);
        }
        return visible;
    };

    const visibleTestimonials = getVisibleTestimonials();

    return (
        <div className="testimonial-section py-5">
            <div className="container">
                <div className="text-center mb-5">
                    <h5 className="testimonial-subtitle">What Our Clients Say</h5>
                    <h2 className="testimonial-title">Testimonials</h2>
                    <div className="title-underline"></div>
                </div>

                {/* Carousel Container */}
                <div className="carousel-container">
                    {/* Previous Button */}
                    <button 
                        className="carousel-nav-btn prev-btn" 
                        onClick={handlePrev}
                        aria-label="Previous testimonials"
                    >
                        <FaChevronLeft />
                    </button>

                    {/* Testimonial Cards */}
                    <div className="testimonials-wrapper">
                        <div className={`testimonials-track ${isAnimating ? 'sliding' : ''}`}>
                            {visibleTestimonials.map((testimonial, index) => (
                                <div 
                                    key={`${testimonial.id}-${currentIndex}`}
                                    className="testimonial-card-wrapper"
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    <div className="testimonial-card">
                                        {/* Quote Icon */}
                                        <div className="quote-icon">
                                            <FaQuoteLeft />
                                        </div>

                                        {/* Rating Stars */}
                                        <div className="rating mb-3">
                                            {[...Array(testimonial.rating)].map((_, i) => (
                                                <FaStar key={i} />
                                            ))}
                                        </div>

                                        {/* Testimonial Text */}
                                        <p className="testimonial-text">
                                            {testimonial.text}
                                        </p>

                                        {/* Author Info */}
                                        <div className="testimonial-author">
                                            <div className="author-initial">
                                                {testimonial.name.charAt(0)}
                                            </div>
                                            <div className="author-details">
                                                <h6 className="author-name">{testimonial.name}</h6>
                                                <p className="author-role">{testimonial.role}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Next Button */}
                    <button 
                        className="carousel-nav-btn next-btn" 
                        onClick={handleNext}
                        aria-label="Next testimonials"
                    >
                        <FaChevronRight />
                    </button>
                </div>

                {/* Dots Indicators */}
                <div className="carousel-dots">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            className={`dot ${index === currentIndex ? 'active' : ''}`}
                            onClick={() => goToSlide(index)}
                            aria-label={`Go to testimonial ${index + 1}`}
                        />
                    ))}
                </div>

                {/* CTA Section */}
                <div className="text-center mt-5">
                    <p className="cta-text">Ready to start your wellness journey?</p>
                    <a href="#Appointment-section" className="btn btn-primary btn-lg">
                        Book Your Appointment
                    </a>
                </div>
            </div>
        </div>
    );
}

export default TestimonialCarousel;