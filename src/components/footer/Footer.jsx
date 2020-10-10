import React from 'react';
import Button from '../button/Button';

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-subscription">
        <p className="footer-subscription__heading">
          Join the Adventure newsletter to receive our best vacation deals
        </p>
        <p className="footer-subscription__text">
          You can unsubscribe at any time
        </p>
        <div className="input-areas">
          <form>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="footer-input"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Footer;
