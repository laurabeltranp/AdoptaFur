import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import NavBar from '../components/navbar/navbar.js';
import { Footer } from "../components/footer/footer.js";
import Script from "next/script";


const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar></NavBar>
        {children}
        <Footer></Footer>
        <Script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" crossorigin></Script>
        <Script  src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"
  crossorigin></Script>
        <Script src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
  crossorigin></Script>
      </body>
    </html>
  );
}
