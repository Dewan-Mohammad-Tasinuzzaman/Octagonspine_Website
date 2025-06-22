'use client'

import React from 'react';
import Image from "next/image";
import Link from 'next/link';
import { Trans } from 'react-i18next/TransWithoutContext';
import { languages } from '../i18n/settings';
import { useTranslation } from '../i18n/client';
import Juno_Logo_White from '@/public/assets/svgs/octagonspine-logo.svg';


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

    </footer>
    )
}