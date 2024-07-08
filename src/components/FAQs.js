import React from "react";

const FAQs = () => {
  return (
    <div className="faqs-section p-10">
      <h1 className="text-4xl font-bold text-center">
        Frequently Asked Questions
      </h1>
      <p className="mt-4 text-center">
        Here are some common questions about our referral program.
      </p>

      <div class="container">
        <h1 className="text-center font-bold">FAQs Asked Questions</h1>
        <br />
        <div class="faq-drawer">
          <input class="faq-drawer__trigger" id="faq-drawer" type="checkbox" />
          <label
            class="faq-drawer__title"
            for="faq-drawer"
            style={{ color: "skyblue" }}
          >
            Eligibility{" "}
          </label>

          <div class="faq-drawer__content-wrapper">
            <div class="faq-drawer__content">
              <h5 className="font-bold">
                Who is eligible to participate in the Refer & Earn program?
              </h5>
              <p>
                Any existing user of our platform who has successfully completed
                at least one course is eligible to participate in the Refer &
                Earn program.
              </p>
              <br />
              <h5 className="font-bold">
                Can I refer someone if I have not completed a course yet?
              </h5>
              <p>
                No, only users who have completed at least one course are
                eligible to refer others.
              </p>
              <br />
              <h5 className="font-bold">
                Is there a limit to the number of friends I can refer?
              </h5>
              <p>
                No, there is no limit to the number of friends you can refer.
                The more you refer, the more rewards you can earn!
              </p>
            </div>
          </div>
        </div>

        <div class="faq-drawer">
          <input
            class="faq-drawer__trigger"
            id="faq-drawer-2"
            type="checkbox"
          />
          <label
            class="faq-drawer__title"
            for="faq-drawer-2"
            style={{ color: "skyblue" }}
          >
            How to use?
          </label>
          <div class="faq-drawer__content-wrapper">
            <div class="faq-drawer__content">
              <h5 className="font-bold"> How do I refer a friend?</h5>
              <p>
                To refer a friend, click on the "Refer Now" button on the Refer
                & Earn page, fill out the referral form with your friend's
                details, and submit it.
              </p>
              <br />
              <h5 className="font-bold">
                What happens after I refer a friend?
              </h5>
              <p>
                After you refer a friend, they will receive an email invitation
                with a link to register. Once they register and complete their
                first course, you will receive your reward.
              </p>
              <br />
              <h5 className="font-bold">
                How will I know if my friend has registered?
              </h5>
              <p>
                You will receive an email notification once your friend has
                successfully registered and completed their first course.
              </p>
            </div>
          </div>
        </div>

        <div class="faq-drawer">
          <input
            class="faq-drawer__trigger"
            id="faq-drawer-3"
            type="checkbox"
          />
          <label
            class="faq-drawer__title"
            for="faq-drawer-3"
            style={{ color: "skyblue" }}
          >
            Terms and conditions
          </label>
          <div class="faq-drawer__content-wrapper">
            <div class="faq-drawer__content">
              <h5 className="font-bold">
                Are there any terms and conditions for the Refer & Earn program?
              </h5>
              <p>
                Yes, there are terms and conditions that apply to the Refer &
                Earn program. Please read them carefully before participating.
              </p>

              <h5 className="font-bold">
                Can I refer a friend more than once?
              </h5>
              <p>
                No, each friend can only be referred once. Duplicate referrals
                will not be considered.
              </p>

              <h5 className="font-bold">
                {" "}
                When will I receive my referral reward?
              </h5>
              <p>
                You will receive your referral reward within 7 days after your
                referred friend completes their first course.
              </p>

              <h5 className="font-bold">
                Can I combine my referral rewards with other promotions?
              </h5>
              <p>
                No, referral rewards cannot be combined with other promotions or
                discounts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
