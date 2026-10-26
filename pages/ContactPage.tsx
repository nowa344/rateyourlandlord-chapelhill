import React from 'react';

const ContactPage: React.FC = () => {
  return (
    <div className="content-page">
      <h1>Contact Us</h1>
      <p>
        If you have any questions, feedback, or need assistance, please feel free to reach out to us. We value your input and are here to help!
      </p>
      <h2>Email</h2>
      <p>
        You can email us at{' '}
        <a href="mailto:rateyourlandlordchapelhill@gmail.com">rateyourlandlordchapelhill@gmail.com</a>.
      </p>
      <h2>The Rate Your Landlord network</h2>
      <p>
        Rate Your Landlord Chapel&nbsp;Hill is part of a network of campus sites started by More Perfect University, the campus organizing program of{' '}
        <a href="https://www.instagram.com/perfectunion/" target="_blank" rel="noopener noreferrer">More Perfect Union</a>.
      </p>
    </div>
  );
};

export default ContactPage;
