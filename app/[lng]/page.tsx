'use client'; // Converted to client component

import Image from "next/image";
import React, { useRef, useState, useEffect } from 'react';
import Link from "next/link";
import styles from "./page.module.scss";
import { useTranslation } from '../i18n/client';
import { ParallaxBanner } from "react-scroll-parallax";
import External_Link_Icon from "@/public/assets/svgs/external-link_icon.svg";



// Define the props type for the HomePage component
type HomePageProps = {
  params: {
    lng: string;
  };
};

export default function Home({ params: { lng } }: HomePageProps) {

  // Language
  const { t } = useTranslation(lng, 'home-page');

  // Images for ParallaxBanner
  const homeBannerImage = "/assets/images/home-banner-img.PNG";

  // Email Sending
  const handleEmailButtonClick = () => {
    window.location.href = 'mailto:' + 'junocare@junopharm.com';
  };

  // Videos
  const BlueSmoke_MP4_URL = "/assets/videos/blue_smoke_juno.mp4";
  const BlueSmoke_WEBM_URL = "/assets/videos/blue_smoke_juno.webm";

  // To Un-render Videos
  const [screenWidth, setScreenWidth] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    // Check if window is defined (client-side) before adding event listener
    if (typeof window !== 'undefined') {
      setScreenWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  return (
    <main className={styles.main}>
      
      <section id="section-hero" className="hero">

        {/* Main Contents */}
        <div className="hero__contents page-span-big">

          <div className="hero__contents_intro">
            {/* <Image src={Logo_Icon_White} alt="Logo Icon (Heart)" unoptimized={true} className="hero__contents_intro-logoicon" /> */}
            <h1 className="hero__contents_intro-header">{t('hero-header')}</h1>
            <p className="hero__contents_intro-description">{t('hero-description')}</p>
            {/* <div className="hero__contents_intro-keep-scrolling keep-scrolling">
              <div className="keep-scrolling__text">{t('keep-scrolling')}</div>
              <Image src={Down_Arrow_White} alt="Down Arrow" unoptimized={true} className="keep-scrolling__icon" />
            </div> */}
          </div>

          {/* Links */}
          <div className="hero__contents_links">
            <Link href="https://www.junopharm.ca/" target="blank" className="hero__contents_links-link">
              <Image src={External_Link_Icon} alt="Video Icon" unoptimized={true} className="hero__contents_links-link--icon" />
              <p className="hero__contents_links-link--text">{t('hero-juno-link')}</p>
            </Link>
            <Link href="https://www.omegapharma.ca/" target="blank" className="hero__contents_links-link">
              <Image src={External_Link_Icon} alt="Video Icon" unoptimized={true} className="hero__contents_links-link--icon" />
              <p className="hero__contents_links-link--text">{t('hero-omega-link')}</p>
            </Link>
          </div>

          {/* <Link href="/noromby-guide#noromby-section-video" className="hero__contents_video-circle">
            <Image src={Video_Icon_White} alt="Video Icon" unoptimized={true} className="hero__contents_video-circle--icon" />
          </Link> */}

        </div>

        {/* Banner Image */}
        <ParallaxBanner
            layers={[
              {
                image: homeBannerImage,
                speed: -70,
                translateY: [0, 30],
                opacity: [1, 1],
                scale: [1.05, 1, 'easeOutCubic'],
                shouldAlwaysCompleteAnimation: true,
              },
            ]}
            className="w-full aspect-2-1 hero__image"
        />
        {screenWidth && screenWidth > 650 && (
          <video className="hero__video" autoPlay muted loop playsInline preload="true">
            <source src={BlueSmoke_MP4_URL} type="video/mp4" />
            <source src={BlueSmoke_WEBM_URL} type="video/webm" />
            {/* Add more source elements for different formats if necessary */}
            Your browser does not support the video tag. Time to switch!
          </video>
        )}
        <div className="banner-shadow"></div>
      </section>

    </main>
  );
}
