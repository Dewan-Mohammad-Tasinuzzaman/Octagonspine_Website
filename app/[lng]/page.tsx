'use client'; // Converted to client component

import Image from "next/image";
import React, { useRef, useState, useEffect } from 'react';
import Link from "next/link";
import styles from "./page.module.scss";
import { ParallaxBanner } from "react-scroll-parallax";
import { useTranslation } from '../i18n/client';
import External_Link_Icon from "@/public/assets/svgs/external-link_icon.svg";
import Hero_Octagon_Symbol from "@/public/assets/svgs/hero-octagon-symbol.svg";
import Hero_Octagon_Stroke from "@/public/assets/svgs/hero-octagon.svg";
import Spine_Illustration from "@/public/assets/images/spine_geometric_illustration-orange.png";


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
          <Image src={Hero_Octagon_Symbol} alt="Octagon Symbol" unoptimized={true} className="hero__illustration_symbol" />
          <Image src={Hero_Octagon_Stroke} alt="Octagon Stroke" unoptimized={true} className="hero__illustration_stroke" />
        </div>

        {/* Learn More Button */}
        <Link href={`/${lng}/about`} className={`btn-primary hero__button`}>
          <div className={`btn-primary__text`}>LEARN MORE</div>
        </Link>

        {/* Skeleton Illustration */}
        <Image src={Spine_Illustration} alt="Spine Illustration" unoptimized={true} className="hero__spine-illustration-left" />
        <Image src={Spine_Illustration} alt="Spine Illustration" unoptimized={true} className="hero__spine-illustration-right" />
        
      </section>

    </main>
  );
}
