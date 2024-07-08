import React from "react";

const Footer = () => {
  return (
    <div>
      <footer
        style={{
          backgroundColor: "grey",
          marginTop: "20px",
          opacity: "0.3",
          height: "100%",
          width: "100%",
          position: "absolute",
          marginLeft: "-40px",
        }}
      >
        <div className="container">
          <div className="row">
            <h1
              style={{
                fontWeight: "bold",
                fontFamily: "sans-serif",
                fontSize: "30px",
                color: "white",
                marginTop: "-170px",
                marginLeft: "-30px",
              }}
            >
              accredian
            </h1>

            <h3
              style={{
                fontWeight: "bold",
                fontFamily: "sans-serif",
                fontSize: "15px",
                color: "white",
                marginTop: "-155px",
                marginLeft: "50%",
              }}
            >
              Speak with a learning Advisor
            </h3>
          </div>
          <h6
            style={{
              marginLeft: "-120px",
              marginTop: "-105px",
              color: "black",
              fontWeight: "bold",
            }}
          >
            __________________________________________________________________________________________________________________
          </h6>
          <br />
          <div style={{ marginLeft: "-100px" }}>
            <h4
              style={{
                marginLeft: "-88%",
                fontWeight: "bold",
                color: "black",
                opacity: "1",
              }}
            >
              Contact Us
            </h4>
            <br />
            <p
              style={{
                marginLeft: "-20px",
                color: "black",
                fontWeight: "bold",
              }}
            >
              Email us (For Data Science Queries): admissions@accredian.com
              Email us (For Product Management Queries): pm@accredian.com Data
              Science admissions Helpline: +91 123456789 Enrolled Student
              Helpline: +91 12345678
            </p>
          </div>
          <br />
          <h6
            style={{
              marginLeft: "-120px",

              color: "black",
              fontWeight: "bold",
            }}
          >
            __________________________________________________________________________________________________________________
          </h6>

          <br />
          <h4
            style={{
              marginLeft: "-113%",
              fontWeight: "bold",
              color: "black",
              opacity: "1",
            }}
          >
            Follow us
          </h4>
          <br />
          <div
            style={{
              display: "flex",
              gap: "15px",
              marginLeft: "-100px",
              cursor: "pointer",
            }}
          >
            <i>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVvyNRv96i9b_bfeWHJYRDk4wmby94WiFP-g&s"
                style={{
                  borderRadius: "100%",
                  width: "70px",
                  height: "70px",
                  backgroundColor: "grey",
                  opacity: "0.5",
                }}
              />
            </i>
            <i>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaBiMeKXxI2hpdh9NeumHG91Vs4BMLDsey6g&s"
                style={{
                  borderRadius: "100%",
                  width: "70px",
                  height: "70px",
                  backgroundColor: "grey",
                  opacity: "0.5",
                }}
              />
            </i>
            <i>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS3rtuScHEz_yNy7BjggZkOAxgEDd0nsgyrg&s"
                style={{
                  borderRadius: "100%",
                  width: "70px",
                  height: "70px",
                  backgroundColor: "grey",
                  opacity: "0.5",
                }}
              />
            </i>
          </div>
          <div style={{ marginTop: "80px" }}>
            &copy; 2024 accredian A Brand of FullStack Education Pvt Ltd. All
            Rights Reserved
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
