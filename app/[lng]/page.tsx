'use client'; // Converted to client component

import Image from "next/image";
import React, { useRef, useState, useEffect } from 'react';
import Link from "next/link";
import styles from "./page.module.scss";
import { ParallaxBanner } from "react-scroll-parallax";
import { useTranslation } from '../i18n/client';
import Hero_Octagon_Symbol from "@/public/assets/svgs/hero-octagon-symbol.svg";
import Hero_Octagon_Stroke from "@/public/assets/svgs/hero-octagon-stroke.svg";
import Hero_Octagon_Fill from "@/public/assets/svgs/hero-octagon-fill.svg";
import Logo_Symbol_White from '@/public/assets/svgs/logo-symbol-white.svg';
import Spine_Illustration from "@/public/assets/images/spine_geometric_illustration-orange.png";
import Rounded_Edge_Left from '@/public/assets/svgs/rounded-edge-illustration-left.svg';
import Rounded_Edge_Right from '@/public/assets/svgs/rounded-edge-illustration-right.svg';


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
  const homeBannerImage = "/assets/images/image.PNG";

  // Videos
  const BlueSmoke_MP4_URL = "/assets/videos/video.mp4";
  const BlueSmoke_WEBM_URL = "/assets/videos/video.webm";

  return (
    <main className={styles.main}>
      
      <section id="section-hero" className="hero">

        {/* Infiinite Text */}
        <div className="hero__infinite-text">
        <div className="hero__infinite-text_item hero__infinite-text_dot"></div>
          <p className="hero__infinite-text_item"><span className="bold">THE WORLD&apos;S 1<sup>ST</sup></span> 3D PRINTABLE TITANIUM EXPANDABLE <span className="bold">SPINAL CAGE</span> FOR PRECISION MEDICINE</p>
          <div className="hero__infinite-text_item hero__infinite-text_dot"></div>
          <p className="hero__infinite-text_item"><span className="bold">THE WORLD&apos;S 1<sup>ST</sup></span> 3D PRINTABLE TITANIUM EXPANDABLE <span className="bold">SPINAL CAGE</span> FOR PRECISION MEDICINE</p>
          <div className="hero__infinite-text_item hero__infinite-text_dot"></div>
          <p className="hero__infinite-text_item"><span className="bold">THE WORLD&apos;S 1<sup>ST</sup></span> 3D PRINTABLE TITANIUM EXPANDABLE <span className="bold">SPINAL CAGE</span> FOR PRECISION MEDICINE</p>
          <div className="hero__infinite-text_item hero__infinite-text_dot"></div>
        </div>
        
        <div className="hero__illustration">
          <Image src={Hero_Octagon_Stroke} alt="Octagon Stroke" unoptimized={true} className="hero__illustration_stroke" />
          <Image src={Hero_Octagon_Fill} alt="Octagon Fill" unoptimized={true} className="hero__illustration_fill" />
          <Image src={Logo_Symbol_White} alt="Octagon Symbol" unoptimized={true} className="hero__illustration_symbol" />
        </div>

        {/* Learn More Button */}
        <Link href={`/${lng}/about`} className={`btn-primary hero__button`}>
          <div className={`btn-primary__text`}>LEARN MORE</div>
        </Link>

        {/* Skeleton Illustration */}
        <Image src={Spine_Illustration} alt="Spine Illustration" unoptimized={true} className="hero__spine-illustration-left" />
        <Image src={Spine_Illustration} alt="Spine Illustration" unoptimized={true} className="hero__spine-illustration-right" />


        {/* FOOTER-SEPARATOR */}
        <div className="footer__separator">
          <Image src={Rounded_Edge_Left} alt="" unoptimized={true} className="footer__separator_edge footer__separator_edge-left" />
          <Image src={Rounded_Edge_Right} alt="" unoptimized={true} className="footer__separator_edge footer__separator_edge-right" />
        </div>
        
      </section>

    </main>
  );
}
