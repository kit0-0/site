'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const menuItems = [
  { href: '/#home', label: 'Home' },
  { href: '/#aboutus', label: 'About' },
  { href: '/#services', label: 'Service' },
  // Add more menu items as needed
  { href: '/#contactus', label: 'Contact' },
];

const Menu = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const scrollThreshold = 100;

    if (scrollY > scrollThreshold) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg ${isScrolled ? 'fixed-top' : ''} bg-white navbar-light shadow-sm px-5 py-3 py-lg-0`}>
      <Link href="/" style={{ textDecoration: 'none' }}>
        <div className="navbar-brand p-0">
          <h1 className="m-0 text-uppercase1 txt-dark">
            <img className="w-40" src="/logo.png" alt="Image" />
            BoostTech
          </h1>
        </div>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto py-0 me-n3">
          {menuItems.map(({ href, label }) => (
            <Link style={{ textDecoration: 'none' }} key={label} href={href}>
              <p className="nav-item nav-link">{label}</p>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Menu;
