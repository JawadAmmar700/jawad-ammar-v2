"use client";
import React from "react";
import "../styles/globals.css";
import "react-loading-skeleton/dist/skeleton.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "../components/header";
import Search from "../components/search";
import { SkeletonTheme } from "react-loading-skeleton";
import Background from "../components/background";
import Socials from "../components/socials";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="w-full h-screen flex flex-col bg-[#0D1116] relative overflow-hidden">
        <Background />
        <Socials />
        <Search />
        <div className="w-full h-full flex flex-col md:flex-row z-20">
          <Header />
          <SkeletonTheme baseColor="#202020" highlightColor="#444">
            {children}
          </SkeletonTheme>
        </div>
      </body>
    </html>
  );
}
