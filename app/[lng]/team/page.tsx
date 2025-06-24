'use client'; // Converted to client component

import Image from "next/image";
import React, { useRef, useState, useEffect } from 'react';
import Link from "next/link";
import styles from "./page.module.scss";
import ReactPlayer from 'react-player';
import { ParallaxBanner } from "react-scroll-parallax";
import Rounded_Edge_Left from '@/public/assets/svgs/rounded-edge-illustration-left.svg';
import Rounded_Edge_Right from '@/public/assets/svgs/rounded-edge-illustration-right.svg';
import Spine_Illustration from "@/public/assets/images/spine_geometric_illustration-orange.png";
import Hero_Octagon_Icon from "@/public/assets/svgs/about_icon.svg";
import OMAR from "@/public/assets/images/omar.png";
import ERIC from "@/public/assets/images/eric.png";
import JOHN from "@/public/assets/images/john.png";
import MICHAEL from "@/public/assets/images/michael.png";
import BRODY from "@/public/assets/images/brody.png";
import YEFIM from "@/public/assets/images/yefim.png";

const Team = () => {
  return (
    <>

      <main className="team page-margins-small">

        {/* Spine Illustration */}
        <Image src={Spine_Illustration} alt="Spine Illustration" unoptimized={true} className="team__skeleton" />

        <div className="team__person-ceo person">
          <Image src={OMAR} alt="OMAR JIMENEZ" unoptimized={true} className="person__img" />
          <div className="person__info">
            <p className="person__info_name">OMAR JIMENEZ</p>
            <p className="person__info_title">FOUNDER & CEO</p>
          </div>
        </div>

        <div className="team__white-line white-line"></div>

        <p className="team__founder-text">Neurosurgeon with over 25 years experience in minimally invasive spine surgery. Has performed thousands of spinal procedures. Has authored over 50 patents many of whom have been licensed to major spine industry companies.</p>

        <div className="team__heading heading">
          <h1 className="team__heading-text heading-text">TEAM</h1>
          <div className="team__heading-underline heading-underline"></div>
        </div>

        <div className="team__members-container">
          <div className="team__members-member person">
            <Image src={ERIC} alt="ERIC DASSO" unoptimized={true} className="person__img" />
            <div className="person__info">
              <p className="person__info_name">ERIC DASSO</p>
              <p className="person__info_title">Chief operating officer</p>
            </div>
          </div>
          <div className="team__members-member person">
            <Image src={YEFIM} alt="Yefim Safris" unoptimized={true} className="person__img" />
            <div className="person__info">
              <p className="person__info_name">Yefim Safris</p>
              <p className="person__info_title">Chief Engineer</p>
            </div>
          </div>
        </div>

        <div className="team__heading heading">
          <h1 className="team__heading-text heading-text">Consultants</h1>
          <div className="team__heading-underline heading-underline"></div>
        </div>

        <div className="team__consultants-container">
          <div className="team__consultants-member person">
            <Image src={MICHAEL} alt="MICHAEL COLADONATO" unoptimized={true} className="person__img" />
            <div className="person__info">
              <p className="person__info_name">MICHAEL COLADONATO</p>
              <p className="person__info_title">Regulatory</p>
              <p className="person__info_name">(MCRA)</p>
            </div>
          </div>
          <div className="team__consultants-member person">
            <Image src={JOHN} alt="JOHN SOUZA" unoptimized={true} className="person__img" />
            <div className="person__info">
              <p className="person__info_name">JOHN SOUZA</p>
              <p className="person__info_title">Engineering</p>
              <p className="person__info_name">(Wheelhouse Medical)</p>
            </div>
          </div>
          <div className="team__consultants-member person">
            <Image src={BRODY} alt="BRODY NELSON" unoptimized={true} className="person__img" />
            <div className="person__info">
              <p className="person__info_name">BRODY NELSON</p>
              <p className="person__info_title">FDA Testing</p>
              <p className="person__info_name">(Element Materials Tec)</p>
            </div>
          </div>
        </div>

      </main>

    </>
  )
}

export default Team