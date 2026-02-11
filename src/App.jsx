import "./App.css";
import "./styles/navbar.css";
import Therapy from "./component/TherapyPage/Therapy";
import PhysioTherapy from "./component/PhysioTHPage/PhysioTherapy";
import Spa from "./component/SpaPage/Spa";
import Navbar from "./component/Navbar/navbar";
import Footer from "./component/Footer/footer";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./component/Homepage/homepage";
import Aboutus from "./component/AboutPage/AboutUS";
import Resources from "./component/MoreDropdown/ResourcesPage/resources";
import Team from "./component/MoreDropdown/TeamPage/team";
import FAQ from "./component/MoreDropdown/FaqPage/faq";
import ContactUs from "./component/ContactPage/contact";

function App() {
  return (
    <div>
      <BrowserRouter>
       
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/therapy" element={<Therapy />} />
          <Route path="/physiotherapy" element={<PhysioTherapy />} />
          <Route path="/spa" element={<Spa />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/team" element={<Team />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>

       
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;