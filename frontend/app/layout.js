'use client'
import { Inter } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.css';
import "./globals.css";
import NavBar from '../components/navbar/navbar.js';
import { Footer } from "../components/footer/footer.js";
import React, { useEffect } from 'react';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar></NavBar>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
