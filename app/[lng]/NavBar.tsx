'use client'

import React, { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image';
import { useTranslation } from '../i18n/client';
import { languages } from '../i18n/settings';
import Logo_Symbol_White from '@/public/assets/svgs/logo-symbol-white.svg';
import Logo_Symbol from '@/public/assets/svgs/logo-symbol.svg';
import Octagon_Fill from "@/public/assets/svgs/hero-octagon-fill.svg";


// Define the props type for the NavBar component
type NavBarProps = {
  params: {
    lng: string;
  };
};


export default function NavBar({ params: { lng } }: NavBarProps) {


  // Language
  const { t } = useTranslation(lng, 'navbar');


  // To use this, we must convert this component to a Client Componenet
  const currentPath = usePathname();

  // NavBar Collapse/Expand Capability
  const [showMobileMenu, setShowMobileMenu] = useState(false); // State to control mobile menu visibility
  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  const closeMobileMenu = () => {
    setShowMobileMenu(false);
  };


  // Sticky-Effect
  const [isNavBarVisible, setIsNavBarVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const navBarRef = useRef(null);

  const lastScrollTopRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.scrollY;
      const isScrolledDown = currentScrollTop > lastScrollTopRef.current;

      lastScrollTopRef.current = currentScrollTop;

      // Show navbar only if scrolling up or at the top
      setIsNavBarVisible(!isScrolledDown || currentScrollTop === 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const navbarClass = isNavBarVisible ? 'navbar' : 'navbar navbar-hidden';


  return (
    <>
      {/* Desktop Nav */}
      <nav ref={navBarRef} className={navbarClass}>

        {/* Logo Box */}
        <Link href={`/${lng}`} onClick={closeMobileMenu}>
          <div className="navbar__logobox">
            <Image src={Octagon_Fill} alt="" unoptimized={true} className="navbar__logobox_octagon" />
            <Image src={Logo_Symbol} alt="Logo" unoptimized={true} className="navbar__logobox_symbol" />
          </div>
        </Link>

        {/* Interaction Layer for closing Mobile-Menu */}
        <div className={`navbar__interaction-overlay ${showMobileMenu ? '' : 'display-none'}`} onClick={closeMobileMenu}></div>

        {/* Main Options */}
        <div className={`navbar__options ${showMobileMenu ? 'show-mobile-menu' : ''}`}>
          <Link href={`/${lng}`} onClick={closeMobileMenu} className='navbar__options_option'>
              <div className={`${`/${lng}` === currentPath ? 'active-page-nav' : ''} navbar__options_option-text`}>HOME</div>
              <div className={`${`/${lng}` === currentPath ? 'active-page-underline' : ''} underline`}></div>
          </Link>
          <Link href={`/${lng}/about`} onClick={closeMobileMenu} className='navbar__options_option'>
              <div className={`${`/${lng}/about` === currentPath ? 'active-page-nav' : ''} navbar__options_option-text`}>ABOUT</div>
              <div className={`${`/${lng}/about` === currentPath ? 'active-page-underline' : ''} underline`}></div>
          </Link>
          <Link href={`/${lng}/team`} onClick={closeMobileMenu} className='navbar__options_option'>
              <div className={`${`/${lng}/team` === currentPath ? 'active-page-nav' : ''} navbar__options_option-text`}>TEAM</div>
              <div className={`${`/${lng}/team` === currentPath ? 'active-page-underline' : ''} underline`}></div>
          </Link>
          <Link href={`/${lng}/octagonai`} onClick={closeMobileMenu} className='navbar__options_option'>
              <div className={`${`/${lng}/octagonai` === currentPath ? 'active-page-nav' : ''} navbar__options_option-text`}>Octagon AI</div>
              <div className={`${`/${lng}/octagonai` === currentPath ? 'active-page-underline' : ''} underline`}></div>
          </Link>
        </div>

        {/* Contact Button */}
        <Link href={`/${lng}/contact`} className={`${`/${lng}/contact` === currentPath ? 'active-contact-page-btn' : ''} navbar__contact`}>
          <div className={`${`/${lng}/contact` === currentPath ? 'active-contact-page-text' : ''} navbar__contact_text`}>CONTACT</div>
        </Link>

        <div className="navbar__expand-btn" onClick={toggleMobileMenu}>
          <div className="navbar__expand-btn_iconbox">
            <div className="navbar__expand-btn_iconbox-bar navbar__expand-btn_iconbox-bar--1"></div>
            <div className="navbar__expand-btn_iconbox-bar navbar__expand-btn_iconbox-bar--2"></div>
            <div className="navbar__expand-btn_iconbox-bar navbar__expand-btn_iconbox-bar--3"></div>
          </div>
        </div>

      </nav>
    </>
  );
}