import React from "react";
import "../../../styles/team.css";

function Team() {
  return (
    <div className="team-page">
      {/* Hero Section */}
      <section className="team-hero">
        <div className="hero-overlay">
          <div className="container">
            <h1>Meet Our Team</h1>
            <p>Dedicated professionals committed to your wellness journey</p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="team-intro">
        <div className="container text-center">
          <h2>The Hearts Behind WeCaRe</h2>
          <p className="intro-text">
            Our team is composed of highly qualified, compassionate professionals who 
            are passionate about making a difference in people's lives. Each member 
            brings unique expertise, experience, and a genuine commitment to helping 
            you achieve optimal health and well-being.
          </p>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="leadership-section">
        <div className="container">
          <h2 className="section-title">Leadership Team</h2>
          <p className="section-subtitle">
            Visionaries guiding our mission to transform wellness in Nigeria
          </p>

          <div className="row row-cols-1 row-cols-md-2 g-5">
            <div className="col">
              <div className="leader-card">
                <div className="leader-image">
                  <img
                    src="https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Founder & CEO"
                  />
                </div>
                <div className="leader-info">
                  <h3>Dr. Adaeze Okonkwo</h3>
                  <p className="leader-title">Founder & CEO</p>
                  <p className="leader-bio">
                    Dr. Adaeze is a licensed clinical psychologist with over 15 years 
                    of experience in mental health care. Her vision for WeCaRe was born 
                    from a desire to make quality mental and physical health services 
                    accessible to all Nigerians. She holds a Ph.D. in Clinical Psychology 
                    and is passionate about destigmatizing mental health in Nigeria.
                  </p>
                  <div className="leader-credentials">
                    <span>Ph.D. Clinical Psychology</span>
                    <span>15+ Years Experience</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="leader-card">
                <div className="leader-image">
                  <img
                    src="https://images.pexels.com/photos/6530621/pexels-photo-6530621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Medical Director"
                  />
                </div>
                <div className="leader-info">
                  <h3>Dr. Chinedu Eze</h3>
                  <p className="leader-title">Medical Director</p>
                  <p className="leader-bio">
                    Dr. Chinedu brings extensive experience in physiotherapy and 
                    rehabilitation medicine. He oversees all clinical operations at 
                    WeCaRe, ensuring the highest standards of care. With specializations 
                    in sports medicine and chronic pain management, he's dedicated to 
                    helping patients reclaim their mobility and quality of life.
                  </p>
                  <div className="leader-credentials">
                    <span>M.D. Physical Medicine</span>
                    <span>Board Certified Physiotherapist</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Therapy Team */}
      <section className="team-section">
        <div className="container">
          <h2 className="section-title">Therapy Team</h2>
          <p className="section-subtitle">
            Licensed therapists specializing in various areas of mental health
          </p>

          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <div className="team-member-card">
                <div className="member-image">
                  <img
                    src="https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Therapist"
                  />
                </div>
                <div className="member-info">
                  <h4>Ngozi Afolabi</h4>
                  <p className="member-title">Clinical Psychologist</p>
                  <p className="member-specialty">
                    Specialization: Anxiety, Depression, Trauma
                  </p>
                  <p className="member-bio">
                    8 years of experience helping clients overcome anxiety and depression 
                    through evidence-based therapies.
                  </p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="team-member-card">
                <div className="member-image">
                  <img
                    src="https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Therapist"
                  />
                </div>
                <div className="member-info">
                  <h4>Folake Ibrahim</h4>
                  <p className="member-title">Marriage & Family Therapist</p>
                  <p className="member-specialty">
                    Specialization: Couples, Family Dynamics
                  </p>
                  <p className="member-bio">
                    Passionate about helping families strengthen bonds and improve 
                    communication patterns.
                  </p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="team-member-card">
                <div className="member-image">
                  <img
                    src="https://images.pexels.com/photos/6530621/pexels-photo-6530621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Therapist"
                  />
                </div>
                <div className="member-info">
                  <h4>Emeka Nwosu</h4>
                  <p className="member-title">Child Psychologist</p>
                  <p className="member-specialty">
                    Specialization: Child & Adolescent Mental Health
                  </p>
                  <p className="member-bio">
                    Dedicated to supporting young minds through developmental challenges 
                    and emotional difficulties.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Physiotherapy Team */}
      <section className="team-section alt-bg">
        <div className="container">
          <h2 className="section-title">Physiotherapy Team</h2>
          <p className="section-subtitle">
            Certified physiotherapists committed to your physical recovery
          </p>

          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <div className="team-member-card">
                <div className="member-image">
                  <img
                    src="https://images.pexels.com/photos/6530621/pexels-photo-6530621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Physiotherapist"
                  />
                </div>
                <div className="member-info">
                  <h4>Tunde Adeyemi</h4>
                  <p className="member-title">Senior Physiotherapist</p>
                  <p className="member-specialty">
                    Specialization: Sports Injuries, Rehabilitation
                  </p>
                  <p className="member-bio">
                    10+ years helping athletes and active individuals recover and return 
                    to peak performance.
                  </p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="team-member-card">
                <div className="member-image">
                  <img
                    src="https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Physiotherapist"
                  />
                </div>
                <div className="member-info">
                  <h4>Amina Mohammed</h4>
                  <p className="member-title">Physiotherapist</p>
                  <p className="member-specialty">
                    Specialization: Chronic Pain, Manual Therapy
                  </p>
                  <p className="member-bio">
                    Expert in managing chronic pain conditions through hands-on techniques 
                    and therapeutic exercises.
                  </p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="team-member-card">
                <div className="member-image">
                  <img
                    src="https://images.pexels.com/photos/6530621/pexels-photo-6530621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Physiotherapist"
                  />
                </div>
                <div className="member-info">
                  <h4>Oluwaseun Bello</h4>
                  <p className="member-title">Physiotherapist</p>
                  <p className="member-specialty">
                    Specialization: Neurological Rehabilitation
                  </p>
                  <p className="member-bio">
                    Specialized in helping patients recover from stroke, spinal injuries, 
                    and neurological conditions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spa Team */}
      <section className="team-section">
        <div className="container">
          <h2 className="section-title">Spa & Wellness Team</h2>
          <p className="section-subtitle">
            Skilled therapists bringing relaxation and rejuvenation
          </p>

          <div className="row row-cols-1 row-cols-md-4 g-4">
            <div className="col">
              <div className="team-member-card compact">
                <div className="member-image">
                  <img
                    src="https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Spa Therapist"
                  />
                </div>
                <div className="member-info">
                  <h4>Chioma Okeke</h4>
                  <p className="member-title">Lead Spa Therapist</p>
                  <p className="member-specialty">Massage & Body Treatments</p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="team-member-card compact">
                <div className="member-image">
                  <img
                    src="https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Spa Therapist"
                  />
                </div>
                <div className="member-info">
                  <h4>Blessing Udo</h4>
                  <p className="member-title">Spa Therapist</p>
                  <p className="member-specialty">Aromatherapy & Facials</p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="team-member-card compact">
                <div className="member-image">
                  <img
                    src="https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Spa Therapist"
                  />
                </div>
                <div className="member-info">
                  <h4>Grace Nduka</h4>
                  <p className="member-title">Spa Therapist</p>
                  <p className="member-specialty">Hot Stone & Deep Tissue</p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="team-member-card compact">
                <div className="member-image">
                  <img
                    src="https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Spa Therapist"
                  />
                </div>
                <div className="member-info">
                  <h4>Funmi Adeleke</h4>
                  <p className="member-title">Spa Therapist</p>
                  <p className="member-specialty">Reflexology & Wellness</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="team-cta">
        <div className="container text-center">
          <h2>Join the WeCaRe Family</h2>
          <p>
            Are you a passionate healthcare professional looking to make a meaningful 
            impact? We're always looking for talented individuals who share our vision 
            of transforming wellness in Nigeria.
          </p>
          <a href="#Appointment-section" className="btn btn-primary btn-custom">
            View Open Positions
          </a>
        </div>
      </section>
    </div>
  );
}

export default Team;