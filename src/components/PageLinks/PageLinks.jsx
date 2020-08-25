import React from 'react';
import { Link } from 'gatsby';
import './PageLinks.css';

const links = [
  {
    id: 1,
    title: "Portfolio",
    path: "/"
  },
  {
    id: 2,
    title: "About",
    path: "/about"
  },
  {
    id: 3,
    title: "Contact",
    path: "/contact"
  }
]

const PageLinks = ({ className }) => {
  return (
    <ul className={`page-links ${className}`}>
      {
        links.map(( link ) => (
          <li className="page-link" key={link.id}>
            <Link to={link.path}>
              {link.title}
            </Link>
          </li>
        ))
      }
    </ul>
  )
}

export default PageLinks;