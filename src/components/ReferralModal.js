import React from "react";
import { Modal, Box, TextField, Button } from "@mui/material";

const ReferralModal = ({ isOpen, handleClose, handleSubmit }) => {
  const [form, setForm] = React.useState({
    referrerName: "",
    referrerEmail: "",
    refereeName: "",
    refereeEmail: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSubmit(form);
  };

  return (
    <Modal open={isOpen} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          border: "2px solid #000",
          boxShadow: 24,
          p: 4,
        }}
      >
        <h2>Referral Form</h2>
        <form onSubmit={handleFormSubmit}>
          <TextField
            required
            name="referrerName"
            label="Your Name"
            value={form.referrerName}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            required
            name="referrerEmail"
            label="Your Email"
            type="email"
            value={form.referrerEmail}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            required
            name="refereeName"
            label="Friend's Name"
            value={form.refereeName}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            required
            name="refereeEmail"
            label="Friend's Email"
            type="email"
            value={form.refereeEmail}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className="mt-4"
          >
            Submit
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default ReferralModal;
