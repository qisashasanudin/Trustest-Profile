import React from 'react';
import { logoTrustest } from '../../assets';
import './footer.styles.scss';
// import SocialMediaButtons from '../social-media-buttons/social-media-buttons';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__logo">
        <img src={logoTrustest} alt="Logo Trustest"/>
      </div>
      
      {/* <div className="footer__socialmedia">
        <p>Follow our social media</p>
        <div className="footer__socialmedia__buttons">
          <SocialMediaButtons />
        </div>
      </div> */}

      <div className="footer__copyright">
        <div className='footer__copyright__copyright'>
          <p>Copyright @ 2021 TRUSTest</p>
        </div>
        
        <p>Help and Support</p>
        <p>jonathan.sendiko@gmail.com</p>
      </div>
    </div>
  );
};

export default Footer;
