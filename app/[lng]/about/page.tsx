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

const About = () => {

  // Images for ParallaxBanner
  const deviceImage = "/assets/images/octaspine_image.jpg";


  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <>

      <main className="about page-margins-small">

        <section className="about__section01">

          <div className="about__section01_content">

            <div className="about__section01_content-heading heading">
              <h1 className="about__section01_content-heading--text heading-text">ABOUT</h1>
              <div className="about__section01_content-heading--underline heading-underline"></div>
            </div>

            <p className="about__section01_content-text">
              Octagon Spine is developing the first one-piece, 3D-printed expandable titanium cage. Engineered for higher fusion success, simpler deployment, and mass customization.
            </p>

            <ParallaxBanner
            layers={[
              {
                image: deviceImage,
                speed: -40,
                translateY: [0, 10],
                opacity: [1, 1],
                scale: [1.1, 1.3, 'easeOutCubic'],
                shouldAlwaysCompleteAnimation: true,
              },
            ]}
              className="w-full aspect-2-1 about__section01_content-banner"
            />

          </div>
          
          <div className="about__section01_illustration">
            <Image src={Spine_Illustration} alt="" unoptimized={true} className="about__section01_illustration-skeleton" />
            <Image src={Hero_Octagon_Icon} alt="" unoptimized={true} className="about__section01_illustration-logo" />
          </div>

        </section>

        <section className="about__section02">
          <p className="about__section02_text01">Introducing <span className="bold">OCTIMX<sup>TM</sup></span>, a 3D-printed, one-piece spinal cage engineered with the largest bone graft window in its class. Designed for biologic excellence and structural strength, it redefines the standard in fusion-focussed inter-body devices.</p>
          {/* <h2 className="about__section02_heading01">OCTIMX<sup>TM</sup></h2>
          <p className="about__section02_text02">○  Engineered for Extremes. Built for Fusion</p>
          <p className="about__section02_text02">○  Precision-Printed. Biologically Driven</p>
          <p className="about__section02_text02">○  The Future of Fusion Starts with MX</p> */}
        </section>


        <section className="about__section03">
          <div className="about__section03_videobox">
            <ReactPlayer
              url={'/assets/videos/octagonspine-animation-video.mp4'}
              className='about__section03_videobox-videobox_source'
              playing={isPlaying}
              width='100%'
              height='100%'
              loop={false}
              muted={false}
              controls={true}
            />
          </div>
          <div className="about__section03_heading heading">
            <h1 className="about__section03_heading-text heading-text">OCTIMX<sup>TM</sup> In Action</h1>
            <div className="about__section03_heading-underline heading-underline"></div>
          </div>

        </section>

      </main>
    </>
  )
}

export default About