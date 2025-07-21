'use client'; // Converted to client component

import Image from "next/image";
import React, { useRef, useState, useEffect } from 'react';
import Link from "next/link";
import styles from "./page.module.scss";
import ReactPlayer from 'react-player';
import { ParallaxBanner } from "react-scroll-parallax";
import Rounded_Edge_Left from '@/public/assets/svgs/rounded-edge-illustration-left.svg';
import Rounded_Edge_Right from '@/public/assets/svgs/rounded-edge-illustration-right.svg';
import Octagonai_Phone_Image from "@/public/assets/images/phone-octagonspine-ai.jpg";
import Spine_Illustration from "@/public/assets/images/spine_geometric_illustration-orange.png";

const Octagonai = () => {
  return (
    <>
        <main className="octagonai page-margins-small">

            {/* Spine Illustration */}
            <Image src={Spine_Illustration} alt="Spine Illustration" unoptimized={true} className="background__skeleton octagonai__background_skeleton" />
            
            <section className="octagonai__section01">

                <Image src={Octagonai_Phone_Image} alt="" unoptimized={true} className="octagonai__section01_illustration" />

                <div className="octagonai__section01_content">

                    <h1 className="octagonai__section01_content-header">SAGE</h1>

                    <div className="octagonai__section01_content-heading heading">
                        <h1 className="octagonai__section01_content-heading--text heading-text">(Spine Algorithmic Guidance Engine)</h1>
                        <div className="octagonai__section01_content-heading--underline heading-underline"></div>
                    </div>

                    <p className="octagonai__section01_content-description">
                        AI-driven Planning for Optimal cage Selection.
                    </p>

                </div>

            </section>

        </main>
    </>
  )
}

export default Octagonai