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
            The site is easy and simple to use: it’s Rate My Professor, but for your landlord. Give your landlord a letter grade and read testimonies from your neighbors. The information collected will remain totally anonymous and secure. 
          </p>
        </section>


        <section>
          <h2>Get Involved</h2>
          <p>
            Know a landlord who isn't listed yet? Add them. Had a recent experience worth sharing? Write a review. The more people participate, the more useful this platform becomes for tenants. You can email us at <a href="mailto:[insert email here]">[insert email here]</a>.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
