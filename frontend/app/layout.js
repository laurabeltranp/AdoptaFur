import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import NavBar from '../components/navbar/navbar.js';
import { Footer } from "@/components/footer/footer";
import {UsuarioProvider} from "@/contexts/UsuarioContext";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <body className={inter.className}>
        <UsuarioProvider>
          <NavBar></NavBar>
          {children}
          <Footer></Footer>
        </UsuarioProvider>
      </body>
    </html>
  );
}
