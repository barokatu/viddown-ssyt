import React, { FC } from "react";

interface NavigationProps {
  brand: string;
  links: {
    title: string;
    href: string;
  }[];
  className?: string;
}

const Navigation: FC<NavigationProps> = ({ brand, links, className = "" }) => {
  return (
    <nav className={`navbar navbar-expand-lg navbar-light bg-light ${className}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          {brand}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {links.map((link) => (
              <li className="nav-item" key={link.title}>
                <a className="nav-link" href={link.href}>
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

// for using this component just use like this
// <Navigation brand="Tevyar" links={[{ title: "Home", href: "#" }, { title: "About", href: "#" }, { title: "Contact", href: "#" }]} className="my-2" />