import React, { useState } from "react";

const Support = () => {
  const [formData, setFormData] = useState({
    name: "",
    message: "",
    email: "",
    color: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({
    name: false,
    message: false,
    email: false,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const newErrors = {
      name: !formData.name,
      message: !formData.message,
      email: !/\S+@\S+\.\S+/.test(formData.email),
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      const scriptURL =
        "https://script.google.com/macros/s/AKfycbz2_p0iU3pAsUKORH1Z3wdc3S5M8qC1sYdeJj_b2kt2YbUlY9Cx9Aceb-p-IQrPyLBm/exec";
      try {
        const response = await fetch(scriptURL, {
          method: "POST",
          body: new FormData(document.getElementById("gform")),
        });
        if (response.ok) {
          setIsSubmitted(true);
          setFormData({
            name: "",
            message: "",
            email: "",
            color: "",
          });
        } else {
          alert("Failed to send message");
        }
      } catch (error) {
        console.error("Error sending message:", error);
        alert("Error sending message");
      }
    }
  };
  return (
    <div className="support-section p-10">
      <h1
        className="text-4xl font-bold text-center"
        style={{ fontFamily: "sans-serif" }}
      >
        Contact Us!
      </h1>
      <br />
      <aside
        style={{ backgroundColor: "#009dd6", color: "white", padding: "20px" }}
      >
        <p style={{ padding: "10px" }}>
          We would <em>love</em> to hear from you!{" "}
        </p>
        <p style={{ padding: "10px" }}>
          Please use the{" "}
          <b>
            <em>Contact Form </em>
          </b>
          to send us a message.
        </p>
      </aside>
      <br />
      <br />
      {!isSubmitted ? (
        <form
          id="gform"
          method="POST"
          class="pure-form pure-form-stacked"
          onSubmit={handleSubmit}
        >
          <fieldset class="pure-group">
            <label for="name">Name: </label>
            <input
              id="name"
              name="name"
              placeholder="What your Mom calls you"
              style={{ border: "1px solid #000", width: "50%", padding: "7px" }}
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && (
              <span style={{ color: "red" }}>Name is required</span>
            )}
          </fieldset>
          <br />

          <label for="message">Message: </label>
          <fieldset class="pure-group">
            <textarea
              id="message"
              name="message"
              rows="10"
              placeholder="Tell us what's on your mind..."
              style={{ border: "1px solid #000", width: "100%" }}
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            {errors.message && (
              <span style={{ color: "red" }}>Message is required</span>
            )}
          </fieldset>
          <br />
          <fieldset class="pure-group">
            <label for="email">
              <em>Your</em> Email Address:
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="your.name@email.com"
              style={{
                border: "1px solid #000",
                padding: "7px",
                marginLeft: "10px",
                width: "50%",
              }}
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <span style={{ color: "red" }}>Valid email is required</span>
            )}
          </fieldset>
          <br />
          <fieldset class="pure-group">
            <label for="color">Favourite Color: </label>
            <input
              id="color"
              name="color"
              placeholder="green"
              style={{
                border: "1px solid #000",
                padding: "7px",
                marginLeft: "10px",
                width: "50%",
              }}
              value={formData.color}
              onChange={handleChange}
            />
          </fieldset>
          <br />
          <button
            class="button-success pure-button button-xlarge"
            style={{
              marginLeft: "90%",
              border: "1px solid #fff",
              backgroundColor: "#009dd6",
              color: "white",
              padding: "10px",
              width: "10%",
              fontWeight: "bold",
              fontFamily: "sans-serif",
              borderRadius: "10px",
            }}
          >
            <i class="fa fa-paper-plane"></i>&nbsp;Send
          </button>
        </form>
      ) : (
        <div id="thankyou_message">
          <h2>
            <em>Thanks</em> for contacting us! We will get back to you soon!
          </h2>
        </div>
      )}
    </div>
  );
};

export default Support;
