import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';

export default function FooterLayout({ style, links, logo, copyright }) {
  return (
    <footer
      className={clsx('footer', {
        'footer--dark': style === 'dark',
      })}
    >
      <div className="container-fluid container">
        {logo && <div className="margin-bottom--sm">{logo}</div>}
        <p className="footer__description">
        Welcome to Lead Ride Cycling Together!

At Lead Ride, we believe in the power of cycling to enhance wellness, promote a healthy environment, foster personal growth, and bring people together in a sense of community and connection.


Lead Ride also serves as a platform for   harmony, bringing together business, government and institutions in a shared love for cycling. 
 
 By reducing our dependence on fossil fuels and promoting active transportation, we can work together to create a healthier, more sustainable future.

Join us at Lead Ride today, and let's experience the many benefits of cycling together!
        </p>
        <div className="footer__row">
          <div className="footer__data">
            <div className="footer__cta">
              <p>Signup to today</p>
              <Link href="#">Sign Up</Link>
            </div>
          </div>
          <div className="links">{links}</div>
        </div>
        {copyright && (
          <div className="footer__bottom text--center">{copyright}</div>
        )}
      </div>
    </footer>
  );
}
