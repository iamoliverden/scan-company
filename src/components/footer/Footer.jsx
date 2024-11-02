import React from 'react';
import './Footer.css';
import scan_logo_white from '../../assets/pics/scan_logo_white.svg';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
                <img className="scan-logo" src={scan_logo_white} alt="Scan logo" />
                <div className="address-block">
                  <p>Moscow, Tsvetnoy Blvd, 40</p>
                  <p>+7 495 771 21 11</p>
                  <p>info@skan.ru</p>
                  <p style={{ marginTop: '40px' }}></p>
                  <p style={{ fontSize: '12px' }}>Copyright. 2022</p>
                </div>
            </div>
    </footer>
  )
}

export default Footer