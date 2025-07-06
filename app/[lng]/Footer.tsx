'use client'

import React from 'react';
import Image from "next/image";
import Link from 'next/link';
import { Trans } from 'react-i18next/TransWithoutContext';
import { languages } from '../i18n/settings';
import { useTranslation } from '../i18n/client';
import Logo from '@/public/assets/svgs/octagonspine-logo.svg';
import Rounded_Edge_Left from '@/public/assets/svgs/rounded-edge-illustration-left.svg';
import Rounded_Edge_Right from '@/public/assets/svgs/rounded-edge-illustration-right.svg';


type FooterProps = {
    params: {
        lng: string;
    };
};


export default function Footer({ params: { lng } }: FooterProps) {

    // Language
    const { t } = useTranslation(lng, 'footer')

    // Get the current year
    const currentYear = new Date().getFullYear();

    return (
    <footer id='footer' className="footer">
        <div className="footer__content">
            <Image src={Logo} alt="Octagon Spine Logo" unoptimized={true} className="footer__content_logo" />
            <p className="footer__content_copyright">©{currentYear} <a href="" className="footer__content_copyright-link">OCTAGON SPINE</a>. ALL RIGHTS RESERVED</p>
        </div>
    </footer>
    )
}