import React, { useEffect } from "react";
import "../../../styles/resources.css";
import {
  FaBrain,
  FaFilePdf,
  FaClipboardList,
  FaRunning,
  FaSmile,
  FaBullseye,
  FaArrowRight,
} from "react-icons/fa";

function Resources() {
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
      ".fade-in, .slide-up, .stagger-item, .scale-in"
    );

    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="resources-page">

      {/* Hero Section */}
      <section className="resources-hero fade-in">
        <div className="hero-overlay">
          <div className="container text-center">
            <h1>Wellness Resources</h1>
            <p>Empower yourself with knowledge and tools for better health</p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="resources-intro slide-up">
        <div className="container text-center">
          <h2>Your Journey to Wellness Starts with Knowledge</h2>
          <p className="intro-text">
            At WeCaRe, we believe informed individuals make better health
            decisions. Explore our curated collection of guides and materials
            designed to support your physical and mental well-being.
          </p>
        </div>
      </section>

      {/* Mental Health */}
      <section className="resource-category fade-in">
        <div className="container">
          <div className="category-header text-center slide-up">
            <div className="category-icon">
              <FaBrain />
            </div>
            <h2>Mental Health Resources</h2>
            <p>Tools and information to support emotional well-being</p>
          </div>

          <div className="row row-cols-1 row-cols-md-2 g-4">
            {[
              "Understanding Anxiety",
              "Managing Depression",
              "Stress Management Techniques",
              "Building Resilience",
            ].map((title, index) => (
              <div className="col" key={index}>
                <div className="resource-card stagger-item">
                  <h4>{title}</h4>
                  <p>
                    Explore evidence-based strategies, coping tools and
                    practical guidance to strengthen mental wellness.
                  </p>
                  <button type="button" className="resource-link">
                    Read More <FaArrowRight />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Downloadable Resources */}
      <section className="downloadable-resources fade-in">
        <div className="container text-center">
          <h2 className="section-title">
            Downloadable Guides & Worksheets
          </h2>
          <p className="section-subtitle">
            Free tools to support your wellness journey
          </p>

          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">

            <div className="col">
              <div className="download-card scale-in">
                <div className="download-icon">
                  <FaFilePdf />
                </div>
                <h5>Mood Tracking Journal</h5>
                <p>Identify patterns and emotional triggers</p>
                <button className="btn-download">
                  Download PDF
                </button>
              </div>
            </div>

            <div className="col">
              <div className="download-card scale-in">
                <div className="download-icon">
                  <FaClipboardList />
                </div>
                <h5>Gratitude Worksheet</h5>
                <p>Cultivate positivity daily</p>
                <button className="btn-download">
                  Download PDF
                </button>
              </div>
            </div>

            <div className="col">
              <div className="download-card scale-in">
                <div className="download-icon">
                  <FaRunning />
                </div>
                <h5>Exercise Routine Planner</h5>
                <p>Track and achieve physical goals</p>
                <button className="btn-download">
                  Download PDF
                </button>
              </div>
            </div>

            <div className="col">
              <div className="download-card scale-in">
                <div className="download-icon">
                  <FaSmile />
                </div>
                <h5>Relaxation Guide</h5>
                <p>Breathing & mindfulness exercises</p>
                <button className="btn-download">
                  Download PDF
                </button>
              </div>
            </div>

            <div className="col">
              <div className="download-card scale-in">
                <div className="download-icon">
                  <FaBrain />
                </div>
                <h5>Cognitive Worksheet</h5>
                <p>Reframe negative thinking</p>
                <button className="btn-download">
                  Download PDF
                </button>
              </div>
            </div>

            <div className="col">
              <div className="download-card scale-in">
                <div className="download-icon">
                  <FaBullseye />
                </div>
                <h5>Goal Setting Template</h5>
                <p>Set meaningful wellness goals</p>
                <button className="btn-download">
                  Download PDF
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}

export default Resources;
