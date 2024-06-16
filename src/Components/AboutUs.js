import React from 'react';

const AboutUs = () => {
  return (
    <div style={{ backgroundColor: 'black', color: 'white', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', paddingTop: '80px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
        <h1 style={{ marginBottom: '20px' }}>About Us</h1>
        <div style={{ display: 'flex', width: '80%', maxWidth: '1200px' }}>
          <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img 
              src="https://cdn-icons-png.flaticon.com/512/15707/15707461.png" 
              alt="NewsMarkhor Team" 
              style={{ borderRadius: '10px', width: '100%', maxWidth: '400px', filter: 'invert(100%)' }} 
            />
          </div>
          <div style={{ flex: 1, padding: '20px' }}>
            <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
              Welcome to NewsMarkhor, your number one source for all things news. We're dedicated to providing you the very best of news, with an emphasis on reliability, accuracy, and timeliness.
              <br /><br />
              Founded in 2024 by Areeb Shahzad , Google , Youtube and ChatGpt. NewsMarkhor has come a long way from its beginnings. When we first started out, our passion was to built it for final year project. But now it comes to a point when it can be deployed to its full potential.
              <br /><br />
              We hope you enjoy our news as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us via Links given below.
              <br />
            </p>
          </div>
        </div>
      </div>
      <footer style={{ backgroundColor: '#333', padding: '20px', textAlign: 'center' }}>
        <div style={{ marginBottom: '10px' }}>
          <a href="https://www.facebook.com/areeb.shahzad.94/" style={{ margin: '0 10px' }}>
            <img src="https://cdn-icons-png.flaticon.com/128/733/733547.png" alt="Facebook" style={{ width: '30px' }} />
          </a>
          <a href="https://twitter.com" style={{ margin: '0 10px' }}>
            <img src="https://cdn-icons-png.flaticon.com/128/733/733579.png" alt="Twitter" style={{ width: '30px' }} />
          </a>
          <a href="https://www.instagram.com/areeb.shahzad.94/" style={{ margin: '0 10px' }}>
            <img src="https://cdn-icons-png.flaticon.com/128/733/733558.png" alt="Instagram" style={{ width: '30px' }} />
          </a>
          <a href="https://wa.link/z7ozor" style={{ margin: '0 10px' }}>
            <img src="https://cdn-icons-png.flaticon.com/128/733/733585.png" alt="WhatsApp" style={{ width: '30px' }} />
          </a>
        </div>
        <p style={{ color: 'white', fontSize: '14px' }}>© 2024 NewsMarkhor. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AboutUs;
