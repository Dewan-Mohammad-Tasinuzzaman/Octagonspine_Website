import type { Metadata } from "next";
import { Orbitron } from "next/font/google";
import "../../styles/main.scss";
import NavBar from "./NavBar";
import { Providers } from './Providers';
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import SmoothScroll from "@/components/SmoothScroll";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import Footer from "./Footer";
import { dir } from 'i18next'
import { languages } from '../i18n/settings'


// FONT
const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'], // Add weights as needed
});


// LANGUAGE-CHANGE RELATED
export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}



// META-TAGS
export const metadata: Metadata = {
  title: "Octagon Spine",
  description: "3D Printable Titanium Expandable Spinal Cage for Precision Medicine.",
};




type RootLayoutProps = {
  children: React.ReactNode;
  params: {
    lng: string;
  };
};

// RootLayout component
export default function RootLayout({ children, params }: RootLayoutProps) {
  const { lng } = params;

  return (
    <html lang={lng} dir={dir(lng)} className={orbitron.className}>
      <body>
        <div className="layout__background-color"></div>
        <NavBar params={params} />
        <Providers>
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </Providers>
        <Footer params={{ lng }}/>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}