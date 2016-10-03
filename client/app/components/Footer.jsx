import React from 'react';

const Footer = () => (
  <footer className="page-footer cyan lighten-1" style={{ display: 'flex', /* minHeight: 100 + 'vh',*/ flexDirection: 'column' }}>
    <div className="footer-copyright cyan">
      <div className="container">
      © 2016 DynamicTeapots
      <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
      </div>
    </div>
  </footer>
);

export default Footer;