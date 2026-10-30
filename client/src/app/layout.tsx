
import type { Metadata } from "next";
import { Inter, Poppins, Roboto } from "next/font/google";

import "./globals.css";
import "./css/headingSize.css";
import "./css/slider.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ScrollAnimation from "./components/common/ScrollAnimation";
import ConditionalLayout from "./components/common/ConditionalLayout";
import { AppProvider } from "./context/AppContext";

const poppins = Poppins({
  variable: "--font-poppins-variable",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const roboto = Roboto({
  variable: "--font-roboto-variable",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Indiarentalz",
  description:
    "IndiaRENTALZ provide Laptops, Desktops, Macbooks, Servers, Printers and Audio Video Equipment on rental basis | Rental Simplified with PAN India Reach.",
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${roboto.variable} ${inter.variable} h-full antialiased`}
    >
      <body>
        <ScrollAnimation />

        <AppProvider>
          <ConditionalLayout>{children}</ConditionalLayout>
        </AppProvider>
      </body>
    </html>
  );
}
