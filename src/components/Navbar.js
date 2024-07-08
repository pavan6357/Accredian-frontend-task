import React from "react";
import { AppBar, Tabs, Tab, Toolbar, Typography } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [value, setValue] = React.useState(location.pathname);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <AppBar position="static">
      <Toolbar style={{ backgroundColor: "white" }}>
        <Typography
          variant="h6"
          style={{
            flexGrow: 1,
            color: "black",
            fontWeight: "bold",
            fontFamily: "Times New Roman",
          }}
        >
          Refer & Earn
        </Typography>
        <Tabs value={value} onChange={handleChange}>
          <Tab
            label="Home"
            component={Link}
            to="/"
            value="/"
            style={{ color: "black", fontWeight: "bold" }}
          />
          <Tab
            label="Benefits"
            component={Link}
            to="/benefits"
            value="/benefits"
            style={{ color: "black", fontWeight: "bold" }}
          />
          <Tab
            label="FAQs"
            component={Link}
            to="/faqs"
            value="/faqs"
            style={{ color: "black", fontWeight: "bold" }}
          />
          <Tab
            label="Support"
            component={Link}
            to="/support"
            value="/support"
            style={{ color: "black", fontWeight: "bold" }}
          />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
