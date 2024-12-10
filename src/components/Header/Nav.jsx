import React from 'react';
import DropDown from './DropDown';
import { Link } from 'react-router-dom';

export default function Nav({ setMobileToggle }) {
  return (
    <ul className="cs_nav_list fw-medium text-uppercase">
      <li className="menu-item-has-children">
        <Link to="/">Home</Link>
        <DropDown>
          <ul>
            <li>
              <Link to="/" onClick={() => setMobileToggle(false)}>
                Business
              </Link>
            </li>
            <li>
              <Link to="/corporate" onClick={() => setMobileToggle(false)}>
                Corporate
              </Link>
            </li>
            <li>
              <Link to="/finance" onClick={() => setMobileToggle(false)}>
                Financial institute
              </Link>
            </li>
            <li>
              <Link to="/insurance" onClick={() => setMobileToggle(false)}>
                Insurance Company
              </Link>
            </li>
            <li>
              <Link to="/consulting" onClick={() => setMobileToggle(false)}>
                Consulting Agency
              </Link>
            </li>
            <li>
              <Link
                to="/business-with-ecommerce"
                onClick={() => setMobileToggle(false)}
              >
                Business With E-Commerce
              </Link>
            </li>
          </ul>
        </DropDown>
      </li>
   
      <li>
        <Link to="/portfolio" onClick={() => setMobileToggle(false)}>
          Portfolio
        </Link>
      </li>
      <li className="menu-item-has-children">
        <Link to="/blog" onClick={() => setMobileToggle(false)}>
          Blog
        </Link>
        <DropDown>
          <ul>
            <li>
              <Link to="/blog-grid" onClick={() => setMobileToggle(false)}>
                Blog Grid
              </Link>
            </li>
            <li>
              <Link to="/blog" onClick={() => setMobileToggle(false)}>
                Blog List With Sidebar
              </Link>
            </li>
            <li>
              <Link
                to="/blog/blog-details"
                onClick={() => setMobileToggle(false)}
              >
                Blog Details
              </Link>
            </li>
          </ul>
        </DropDown>
      </li>
      <li>
        <Link to="/contact" onClick={() => setMobileToggle(false)}>
          Contact
        </Link>
      </li>
    </ul>
  );
}
