import React from "react";
import "../../App.css";
import Home from "./home";
import Appointment from "./Appointment";
import TestimonialCarousel from "./testimonialcarousel";

function Homepage() {
  return (
    <div>
     
      
      <section className="home-section">
        <Home />
      </section>

      <section>
        <Appointment />
      </section>

      <section className="Testimonial-section">
        <TestimonialCarousel />
      </section>

      
    </div>
  );
}

export default Homepage;