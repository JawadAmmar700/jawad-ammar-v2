"use client";
import React from "react";
import "../styles/globals.css";
import "react-loading-skeleton/dist/skeleton.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "./header";
import Search from "./search";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className="w-full h-screen   flex flex-col bg-[#0D1116]">
        <Search />
        <div className="w-full h-full flex flex-col md:flex-row">
          <Header />
          {/* <Transition>{children}</Transition> */}
          <SkeletonTheme baseColor="#202020" highlightColor="#444">
            {children}
          </SkeletonTheme>
        </div>
      </body>
    </html>
  );
}
