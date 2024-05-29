import React from 'react';

function Footer() {
  return (
    <footer className="text-sm mt-12">
    <div>
      <p>www.investnest.net | Email: info@investnest.net | Contacts: 0209156282 / 0506154295</p>
    </div>
    <div className="mt-8 flex items-center justify-center mx-auto">
      <FontAwesomeIcon icon={faFacebook} className="text-yellow mr-4 cursor-pointer" />
      <FontAwesomeIcon icon={faLinkedin} className="text-yellow mr-4 cursor-pointer" />
      <FontAwesomeIcon icon={faInstagram} className="text-yellow mr-4 cursor-pointer" />
      <FontAwesomeIcon icon={faTwitter} className="text-yellow mr-4 cursor-pointer" />
    </div>
  </footer>
  
  );
}

export default Footer;
