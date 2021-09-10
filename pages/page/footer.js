import React from 'react';
import { socialMedia } from '../../data/profile';
const Footer = () => {
  return (
    <>
      <div className='d-flex flex-row fixed-bottom bg-dark  justify-content-center'>
        {socialMedia.map((social) => {
          return (
            <div key={social.id} className='d-flex flex-row m-2 '>
              <a href={social.link}>
                <i
                  className={social.iconClass}
                  style={{
                    fontSize: '48px',
                    color: '#fff',
                  }}
                ></i>
              </a>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Footer;
