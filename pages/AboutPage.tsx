import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="about-page">
      <div className="hero">
        <h1>About RATE YOUR LANDLORD</h1>
        <p className="hero__subtitle">A community-driven platform for Chapel&nbsp;Hill and Carrboro tenants</p>
      </div>

      <div className="about-sections">
        <section>
          <h2>Our Mission</h2>
          <p>
            In Chapel&nbsp;Hill and Carrboro, renters hunt for housing on tight timelines, and some landlords bank on that pressure. Repairs go ignored, fees appear without explanation, and deposits vanish at move-out. It's only getting harder: UNC plans to add about 5,000 undergraduates over the next decade, and every new student competes for the same off-campus housing.
          </p>
          <p>
            Rate Your Landlord puts those practices on the public record. Every review gives the next tenant a warning before they sign, and gives landlords a reason to change.
          </p>
        </section>

        <section>
          <h2>How It Works</h2>
          <p>
            Search for your landlord, or add them if they aren't listed yet. Rate them from 1 to 5 stars on how they treat tenants and on the condition of the building, tag what you dealt with, like slow repairs or a kept deposit, and write a short review. You can add what you paid in rent so the next person knows what to expect.
          </p>
          <p>
            Your name is never shown on a review. You can post without an account, or sign up with an email so you can edit your review later. We keep that email private and never display it. Reviewers who sign up with a UNC email get a Verified Student badge. New landlords are checked by a moderator before they appear, and reviews that break our guidelines are removed.
          </p>
        </section>


        <section>
          <h2>Get Involved</h2>
          <p>
            Know a landlord who isn't listed yet? Add them. Had a recent experience worth sharing? Write a review. The more people participate, the more useful this platform becomes for tenants. You can email us at <a href="mailto:noahbush344@gmail.com">noahbush344@gmail.com</a>.
          </p>
          <p>
            Rate Your Landlord Chapel&nbsp;Hill is part of the Rate Your Landlord network started by More Perfect University, the campus organizing program of <a href="https://www.instagram.com/perfectunion/" target="_blank" rel="noopener noreferrer">More Perfect Union</a>.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
