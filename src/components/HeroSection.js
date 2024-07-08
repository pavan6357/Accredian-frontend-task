import React from "react";
import { Button } from "@mui/material";
import Footer from "./Footer";

const HeroSection = ({ openModal }) => {
  return (
    <div className="hero bg-white-500 text-white text-center p-10">
      <h1 className="text-4xl font-bold text-black">Refer & Earn</h1>
      <p className="mt-4 text-black">Refer a friend and earn rewards!</p>
      <br />
      <Button
        variant="contained"
        color="primary"
        onClick={openModal}
        className="mt-6"
      >
        Refer Now
      </Button>
      <div style={{ marginTop: "70px" }}>
        <h2
          className="text-center"
          style={{ color: "black", fontFamily: "Roboto", cursor: "pointer" }}
        >
          How do i <span style={{ color: "blue" }}>Refer?</span>
        </h2>
        <div style={{ display: "flex", backgroundColor: "" }}>
          <fieldset
            style={{
              border: "1px solid #000",
              width: "220px",
              margin: "0px auto",
              marginTop: "20px",
              padding: "30px",
              borderRadius: "30px",
              cursor: "pointer",
            }}
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaAoAJePyENGHoHgswAuz4Hw76uf7nICSSgI3eth6_HfRzeBkI5buGmSnI6w&s"
              alt="no-image"
              style={{ width: "100%", height: "60%" }}
            />
            <p style={{ padding: "0px", color: "black" }}>
              Submit referrals easily via our website's referral section.
            </p>
          </fieldset>
          <fieldset
            style={{
              border: "1px solid #000",
              width: "220px",
              margin: "0px auto",
              marginTop: "20px",
              padding: "30px",
              borderRadius: "30px",
              cursor: "pointer",
            }}
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpRQX7zPEIKN4FAaXVaSnEC2mI0YvjtNXfBIZwmITlKvveyp67Uqzdl62QIg&s"
              alt="no-image"
              style={{ width: "100%", height: "60%" }}
            />
            <p style={{ padding: "0px", color: "black" }}>
              Earn rewards once your referral joins an Accredian program.
            </p>
          </fieldset>
          <fieldset
            style={{
              border: "1px solid #000",
              width: "220px",
              margin: "0px auto",
              marginTop: "20px",
              padding: "30px",
              borderRadius: "30px",
              cursor: "pointer",
            }}
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP4e7YYhovGrWqQ6m5hQa9y-9OWjUzFDQJkrqFSspqhKWeE972G4VF8v8Mkg&s"
              alt="no-image"
              style={{ width: "100%", height: "60%" }}
            />
            <p style={{ padding: "0px", color: "black" }}>
              Both parties receive a bonus 30 days after program enrollment.
            </p>
          </fieldset>
        </div>
      </div>
      <br /> <br />
      <Footer />
    </div>
  );
};

export default HeroSection;
