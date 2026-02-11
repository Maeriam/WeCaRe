import React, { useState, useEffect, useRef } from "react";

import "../../../styles/faq.css";

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);
  const faqRefs = useRef([]);
  faqRefs.current = [];

const addToRefs = (el) => {
  if (el && !faqRefs.current.includes(el)) {
    faqRefs.current.push(el);
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
    { threshold: 0.1 }
  );

  faqRefs.current.forEach((el) => {
    if (el) observer.observe(el);
  });

  return () => observer.disconnect();
}, []);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const generalFAQs = [
    {
      question: "What services does WeCaRe offer?",
      answer: "WeCaRe offers three main categories of services: Therapy (individual, couples, family, and child therapy), Physiotherapy (rehabilitation, pain management, sports injury treatment), and Spa Services (massage, facials, body treatments, and wellness packages)."
    },
    {
      question: "Do I need to book an appointment in advance?",
      answer: "Yes, we highly recommend booking an appointment in advance to secure your preferred time slot. While we do accept walk-ins based on availability, scheduled appointments ensure you receive dedicated time with our professionals without waiting."
    },
    {
      question: "What are your operating hours?",
      answer: "We are open Monday through Saturday from 8:00 AM to 8:00 PM. We are closed on Sundays and major public holidays. Extended hours may be available by special arrangement for certain services."
    },
    {
      question: "Where is WeCaRe located?",
      answer: "We are located at 123 Wellness Avenue, Victoria Island, Lagos, Nigeria. We're easily accessible by public transportation and have ample parking available for clients who drive."
    },
    {
      question: "Do you accept insurance?",
      answer: "We work with several major health insurance providers in Nigeria. Please contact our office with your insurance information, and we'll verify your coverage. We also offer flexible payment plans for those paying out-of-pocket."
    }
  ];

  const therapyFAQs = [
    {
      question: "How long is a typical therapy session?",
      answer: "Standard therapy sessions are 50-60 minutes long. Initial consultations may take up to 90 minutes to allow for a comprehensive assessment and treatment planning."
    },
    {
      question: "Is therapy confidential?",
      answer: "Absolutely. All therapy sessions are completely confidential. We adhere to strict ethical guidelines and only share information with your explicit written consent, except in cases where there's a risk of harm to yourself or others, as required by law."
    },
    {
      question: "How many therapy sessions will I need?",
      answer: "The number of sessions varies depending on your individual needs and goals. Some clients benefit from short-term therapy (6-12 sessions), while others prefer longer-term support. We'll discuss and regularly review your treatment plan together."
    },
    {
      question: "Can I choose my therapist?",
      answer: "Yes! We believe the therapeutic relationship is crucial to success. You can request a specific therapist, and if you feel the match isn't right after your first session, we'll help you find a better fit at no additional charge."
    },
    {
      question: "Do you offer online therapy sessions?",
      answer: "Yes, we offer secure video therapy sessions for clients who prefer remote appointments or cannot visit our facility in person. Online sessions maintain the same level of confidentiality and effectiveness as in-person visits."
    }
  ];

  const physioFAQs = [
    {
      question: "What should I wear to physiotherapy?",
      answer: "Please wear comfortable, loose-fitting clothing that allows easy movement and access to the area being treated. Athletic wear or gym clothes work well. For lower body treatments, shorts are ideal. We provide gowns if needed."
    },
    {
      question: "Will physiotherapy be painful?",
      answer: "While some techniques may cause mild discomfort, physiotherapy should not be significantly painful. We work within your comfort level and will adjust treatment intensity based on your feedback. Some soreness after treatment is normal as your body heals."
    },
    {
      question: "How long does a physiotherapy session last?",
      answer: "Physiotherapy sessions typically last 45-60 minutes. Your first assessment session may take longer (up to 90 minutes) to allow for a thorough evaluation and development of your personalized treatment plan."
    },
    {
      question: "Do I need a doctor's referral for physiotherapy?",
      answer: "While a doctor's referral is not always required, it's helpful for insurance purposes and ensures we have complete information about your medical history. If you have a specific diagnosis or recent surgery, a referral is recommended."
    },
    {
      question: "How soon will I see results?",
      answer: "Results vary depending on your condition and treatment goals. Some patients experience relief after just one or two sessions, while chronic conditions may require several weeks of consistent treatment. We'll set realistic expectations during your initial assessment."
    }
  ];

  const spaFAQs = [
    {
      question: "What should I expect during my first spa visit?",
      answer: "Arrive 15 minutes early to complete paperwork and relax before your treatment. We'll discuss your preferences and any health concerns. You'll be provided with a robe and slippers, and your therapist will explain the treatment before beginning."
    },
    {
      question: "Can I request a male or female therapist?",
      answer: "Absolutely. We respect your comfort and preferences. Please let us know your preference when booking, and we'll accommodate your request whenever possible."
    },
    {
      question: "Are gratuities expected?",
      answer: "Gratuities are appreciated but never expected. If you're pleased with your service, a 10-15% tip is customary, but your satisfaction is our primary goal."
    },
    {
      question: "Can I use the spa facilities if I'm pregnant?",
      answer: "Yes! We offer prenatal massage and pregnancy-safe treatments. However, some treatments are not recommended during pregnancy. Please inform us if you're pregnant so we can customize your experience safely."
    },
    {
      question: "Do you offer couples spa packages?",
      answer: "Yes, we have several couples packages that include side-by-side massages and shared spa experiences. These make wonderful gifts and special occasion celebrations. Check our Spa page for package details."
    }
  ];

  const appointmentFAQs = [
    {
      question: "How do I book an appointment?",
      answer: "You can book an appointment through our website using the 'Book Appointment' button, by calling us at +234 123 456 7890, or by emailing appointments@wecare.ng. We'll confirm your booking within 24 hours."
    },
    {
      question: "What is your cancellation policy?",
      answer: "We require at least 24 hours' notice for cancellations or rescheduling. Late cancellations or no-shows may be charged 50% of the service fee. We understand emergencies happen—please contact us as soon as possible."
    },
    {
      question: "Can I book multiple services in one visit?",
      answer: "Yes! We encourage combining services for a comprehensive wellness experience. For example, you might schedule physiotherapy followed by a relaxation massage. We'll coordinate timing to ensure you have a seamless, unhurried experience."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept cash, bank transfers, credit/debit cards (Visa, Mastercard, Verve), and mobile payments. Payment is due at the time of service unless you have prior arrangements with our billing department."
    },
    {
      question: "Do you offer gift certificates?",
      answer: "Yes! Gift certificates are available for all services and packages. They make perfect gifts for birthdays, holidays, or any special occasion. Contact us to purchase, and we can email or mail the certificate to you or the recipient."
    }
  ];

  return (
    <div className="faq-page">
      {/* Hero Section */}
      <section className="faq-hero">
        <div className="hero-overlay">
          <div className="container">
            <h1>Frequently Asked Questions</h1>
            <p>Find answers to common questions about our services</p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="faq-intro">
        <div className="container text-center">
          <h2>We're Here to Help</h2>
          <p className="intro-text">
            Have a question? Browse our frequently asked questions below. If you can't 
            find what you're looking for, don't hesitate to contact us directly—we're 
            always happy to help!
          </p>
        </div>
      </section>

      {/* General Questions */}
      <section className="faq-section">
        <div className="container">
          <h2 className="section-title">General Questions</h2>
          <div className="faq-accordion">
            {generalFAQs.map((faq, index) => (
              <div
  key={index}
  className="accordion-item"
  ref={addToRefs}
>

                <button
                  className={`accordion-header ${activeIndex === `general-${index}` ? 'active' : ''}`}
                  onClick={() => toggleAccordion(`general-${index}`)}
                >
                  <span>{faq.question}</span>
                  <span className="accordion-icon">
                    {activeIndex === `general-${index}` ? '−' : '+'}
                  </span>
                </button>
                <div className={`accordion-content ${activeIndex === `general-${index}` ? 'active' : ''}`}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Therapy Questions */}
      <section className="faq-section alt-bg">
        <div className="container">
          <h2 className="section-title">Therapy Services</h2>
          <div className="faq-accordion">
            {therapyFAQs.map((faq, index) => (
              <div
  key={index}
  className="accordion-item"
ref={addToRefs}
>

                <button
                  className={`accordion-header ${activeIndex === `therapy-${index}` ? 'active' : ''}`}
                  onClick={() => toggleAccordion(`therapy-${index}`)}
                >
                  <span>{faq.question}</span>
                  <span className="accordion-icon">
                    {activeIndex === `therapy-${index}` ? '−' : '+'}
                  </span>
                </button>
                <div className={`accordion-content ${activeIndex === `therapy-${index}` ? 'active' : ''}`}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Physiotherapy Questions */}
      <section className="faq-section">
        <div className="container">
          <h2 className="section-title">Physiotherapy Services</h2>
          <div className="faq-accordion">
            {physioFAQs.map((faq, index) => (
           <div
  key={index}
  className="accordion-item"
  ref={addToRefs}
>

                <button
                  className={`accordion-header ${activeIndex === `physio-${index}` ? 'active' : ''}`}
                  onClick={() => toggleAccordion(`physio-${index}`)}
                >
                  <span>{faq.question}</span>
                  <span className="accordion-icon">
                    {activeIndex === `physio-${index}` ? '−' : '+'}
                  </span>
                </button>
                <div className={`accordion-content ${activeIndex === `physio-${index}` ? 'active' : ''}`}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spa Questions */}
      <section className="faq-section alt-bg">
        <div className="container">
          <h2 className="section-title">Spa Services</h2>
          <div className="faq-accordion">
            {spaFAQs.map((faq, index) => (
              <div
  key={index}
  className="accordion-item"
  ref={addToRefs}
>

                <button
                  className={`accordion-header ${activeIndex === `spa-${index}` ? 'active' : ''}`}
                  onClick={() => toggleAccordion(`spa-${index}`)}
                >
                  <span>{faq.question}</span>
                  <span className="accordion-icon">
                    {activeIndex === `spa-${index}` ? '−' : '+'}
                  </span>
                </button>
                <div className={`accordion-content ${activeIndex === `spa-${index}` ? 'active' : ''}`}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment & Booking Questions */}
      <section className="faq-section">
        <div className="container">
          <h2 className="section-title">Appointments & Booking</h2>
          <div className="faq-accordion">
            {appointmentFAQs.map((faq, index) => (
              <div
  key={index}
  className="accordion-item"
  ref={addToRefs}
>

                <button
                  className={`accordion-header ${activeIndex === `appointment-${index}` ? 'active' : ''}`}
                  onClick={() => toggleAccordion(`appointment-${index}`)}
                >
                  <span>{faq.question}</span>
                  <span className="accordion-icon">
                    {activeIndex === `appointment-${index}` ? '−' : '+'}
                  </span>
                </button>
                <div className={`accordion-content ${activeIndex === `appointment-${index}` ? 'active' : ''}`}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="faq-cta">
        <div className="container text-center">
          <h2>Still Have Questions?</h2>
          <p>
            Can't find the answer you're looking for? Our friendly team is here to help. 
            Reach out to us and we'll get back to you as soon as possible.
          </p>
          <div className="cta-buttons">
            <a href="/contactus" className="btn btn-primary btn-custom">
              Contact Us
            </a>
            <a href="#Appointment-section" className="btn btn-outline">
              Book Appointment
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FAQ;


