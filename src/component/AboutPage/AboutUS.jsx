import React, { useEffect } from "react";
import "../../styles/AboutUS.css";


function AboutUS() {
  const sections = [
    {
      title: 'Our Journey',
      body: `At WeCaRe, we understand the challenges many people face in silence. Growing up in Nigeria, it's common to be taught to endure and solve problems independently, often without the support or guidance we truly need. This reality inspired the creation of WeCaRe—a place where struggles are met with understanding and hope. Born from personal experiences of life's ups and downs, WeCaRe is committed to rewriting this narrative for future generations.`
    },
    {
      title: 'Our Purpose',
      body: `Our goal is simple: to provide a safe space for healing and growth. Whether through therapy, physiotherapy, or spa services, we aim to care for the mind, body, and spirit of every individual who walks through our doors. We believe that seeking help is not a sign of weakness but a courageous step toward a brighter future. With compassion at the heart of everything we do, we strive to offer comfort, support, and a renewed sense of hope to children and adults across Nigeria.`
    },
    {
      title: 'Why We Care',
      body: `At WeCaRe, we're driven by a deep belief in the power of community and empathy. We understand that every individual's story is unique, and that's why we tailor our services to meet your specific needs. By creating a welcoming and judgment-free environment, we ensure that every voice is heard, every struggle is acknowledged, and every step toward healing is celebrated.`
    },
    {
      title: 'Stay Connected',
      body: `WeCaRe is here to walk with you on your journey to wellness. Whether you're looking for guidance, a helping hand, or simply someone to listen, we're ready to support you. Reach out to us today to learn more about how we can help or book an appointment. Together, we can create a world where no one has to face their challenges alone.`
    }
  ];

  useEffect(() => {
    const blocks = document.querySelectorAll('.about-block');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.12 }
    );

    blocks.forEach(b => observer.observe(b));
    return () => blocks.forEach(b => observer.unobserve(b));
  }, []);

  return (
    <div>
      <section className="aboutsection">
        <h2 className="Aboutheader">About Us</h2>

        <div className="AboutParag">
          <p className="lead">"Your sanctuary for holistic wellness and rejuvenation."</p>
          <p className="lead">We are ready to help nurture your mind, body, and soul.</p>
        </div>

        {sections.map((s, idx) => (
          <div key={idx} className="Abouttext about-block">
            <h4>{s.title}</h4>
            <p>{s.body}</p>
          </div>
        ))}
      </section>

    </div>
  );
}

export default AboutUS;
