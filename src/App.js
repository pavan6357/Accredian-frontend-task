import React, { useState } from "react";
import HeroSection from "./components/HeroSection";
import ReferralModal from "./components/ReferralModal";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

import Benefits from "./components/Benefits";
import FAQs from "./components/FAQs";
import Support from "./components/Support";

const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  const handleSubmitReferral = async (formData) => {
    try {
      const response = await fetch("http://localhost:5000/api/referrals", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log("Referral submitted successfully");
        handleCloseModal();
      } else {
        console.log("Failed to submit referral");
      }
    } catch (error) {
      console.error("Error submitting referral:", error);
    }
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<HeroSection openModal={handleOpenModal} />}
          />
          <Route path="/benefits" element={<Benefits />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/support" element={<Support />} />
        </Routes>

        <ReferralModal
          isOpen={isModalOpen}
          handleClose={handleCloseModal}
          handleSubmit={handleSubmitReferral}
        />
      </div>
    </Router>
  );
};

export default App;
