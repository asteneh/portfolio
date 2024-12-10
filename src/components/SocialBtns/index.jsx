import { Icon } from '@iconify/react';
import React from 'react';
import { Link } from 'react-router-dom';

export default function SocialBtns({ variant }) {
  return (
    <div className={`${variant ? variant : ''}`} >
      <Link
        to="/"
        className="d-flex align-items-center justify-content-center cs_height_35 cs_width_35 text-white rounded-circle"
      >
        <Icon icon="fa6-brands:facebook-f" style={{color:'#444f60'}}/>
      </Link>
      <Link
        to="/"
        className="d-flex align-items-center justify-content-center cs_height_35 cs_width_35 text-white rounded-circle"
      >
        <Icon icon="fa6-brands:twitter"style={{color:'#444f60'}} />
      </Link>
      <Link
        to="/"
        className="d-flex align-items-center justify-content-center cs_height_35 cs_width_35 text-white rounded-circle"
      >
        <Icon icon="fa6-brands:linkedin-in" style={{color:'#444f60'}} />
      </Link>
      <Link
        to="/"
        className="d-flex align-items-center justify-content-center cs_height_35 cs_width_35 text-white rounded-circle"
      >
        <Icon icon="fa6-brands:dribbble" style={{color:'#444f60'}} />
      </Link>
    </div>
  );
}
