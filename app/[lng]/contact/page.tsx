'use client'; // Converted to client component

import Image from "next/image";
import React, { useRef, useState, useEffect } from 'react';
import Link from "next/link";
import styles from "./page.module.scss";
import ReactPlayer from 'react-player';
import { useTranslation } from '../../i18n/client';
import { ParallaxBanner } from "react-scroll-parallax";
import Rounded_Edge_Left from '@/public/assets/svgs/rounded-edge-illustration-left.svg';
import Rounded_Edge_Right from '@/public/assets/svgs/rounded-edge-illustration-right.svg';
import Spine_Illustration from "@/public/assets/images/spine_geometric_illustration-orange.png";
import Hero_Octagon_Icon from "@/public/assets/svgs/hero_icon.svg";
import Email_Icon from "@/public/assets/svgs/email-icon.svg";
import Phone_Icon from "@/public/assets/svgs/phone-icon.svg";
import QR_Code from "@/public/assets/images/meeting-qr-code.png";

// Define the props type for the Contact component
type ContactProps = {
  params: {
    lng: string;
  };
};

export default function Contact({ params: { lng } }: ContactProps) {

  // Language
  const { t } = useTranslation(lng, 'about-page');
  
  return (
    <>
      <main className="contact page-margins-small">

        <div className="contact__content">

          <Image src={Hero_Octagon_Icon} alt="Logo Symbol" unoptimized={true} className="contact__content_logo" />

          <div className="contact__content_heading heading">
            <h1 className="contact__content_heading-text heading-text">Contact</h1>
            <div className="contact__content_heading-underline heading-underline"></div>
          </div>

          <div className="contact__content_info">
            <p className="contact__content_info-name">OMAR F. JIMENEZ, MD, FAANS, FACS</p>
            <div className="contact__content_info-item">
              <Image src={Email_Icon} alt="Email Icon" unoptimized={true} className="contact__content_info-item--icon" />
              <p className="contact__content_info-item--text">OMARFJ@OCTAGONSPINE.COM</p>
            </div>
            <div className="contact__content_info-item">
              <Image src={Phone_Icon} alt="Phone Icon" unoptimized={true} className="contact__content_info-item--icon" />
              <p className="contact__content_info-item--text">425-628-1260</p>
            </div>
          </div>

          <Link href={`/${lng}/about`} className={`btn-primary contact__content_button`}>
            <div className={`btn-primary__text`}>SET UP A MEETING</div>
          </Link>

          <p className="contact__content_text01">OR</p>

          <Image src={QR_Code} alt="QR Code" unoptimized={true} className="contact__content_qr" />

          <p className="contact__content_text02">SCAN THE QR CODE</p>

        </div>

      </main>
    </>
  )
}