import React from "react";
import { Button } from "@mui/material";

const HomeSection = ({ openModal }) => {
  return (
    <div className="home-section text-center p-10">
      <h1 className="text-4xl font-bold">Refer & Earn</h1>
      <p className="mt-4">Refer a friend and earn rewards!</p>
      <Button
        variant="contained"
        color="primary"
        onClick={openModal}
        className="mt-6"
      >
        Refer Now
      </Button>
    </div>
  );
};

export default HomeSection;
