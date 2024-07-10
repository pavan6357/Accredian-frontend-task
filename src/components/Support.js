import React from "react";

const Support = () => {
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
      <form
        id="gform"
        method="POST"
        class="pure-form pure-form-stacked"
        action="https://script.google.com/macros/s/AKfycbxCRIob995jr_4oLB3k9isNPCtuVzLT2sPAqK-4YoIN90tZ8TQ/exec"
      >
        <fieldset class="pure-group">
          <label for="name">Name: </label>
          <input
            id="name"
            name="name"
            placeholder="What your Mom calls you"
            style={{ border: "1px solid #000", width: "50%", padding: "7px" }}
          />
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
          ></textarea>
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
            value=""
            required
            placeholder="your.name@email.com"
            style={{
              border: "1px solid #000",
              padding: "7px",
              marginLeft: "10px",
              width: "50%",
            }}
          />
          <span id="email-invalid" style={{ visibility: "hidden" }}>
            Must be a valid email address
          </span>
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
          />
        </fieldset>
        <br />
        <button
          class="button-success pure-button button-xlarge"
          style={{
            marginLeft: "90%",
            border: "1px solid #000",
            backgroundColor: "green",
            color: "white",
            padding: "10px",
            width: "10%",
            fontWeight: "bold",
            fontFamily: "sans-serif",
          }}
        >
          <i class="fa fa-paper-plane"></i>&nbsp;Send
        </button>
      </form>

      <div style={{ display: "none" }} id="thankyou_message">
        <h2>
          <em>Thanks</em> for contacting us! We will get back to you soon!
        </h2>
      </div>
      <script
        data-cfasync="false"
        type="text/javascript"
        src="https://cdn.rawgit.com/dwyl/html-form-send-email-via-google-script-without-server/master/form-submission-handler.js"
      ></script>
    </div>
  );
};

export default Support;
