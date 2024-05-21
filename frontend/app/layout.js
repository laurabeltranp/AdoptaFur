import {Poppins} from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import NavBar from '@/components/navBar/navbar.js';
import {Footer} from "@/components/footer/footer";
import {UsuarioProvider} from "@/contexts/UsuarioContext";

const poppins = Poppins({weight:"400", subsets: ["latin"]});

export default function RootLayout({children}) {

    return (
        <html lang="en">
        <body className={poppins.className}>
        <UsuarioProvider>
            <div className="main-container">
                <NavBar></NavBar>
                <div className="content-wrap">
                    {children}
                </div>
                <Footer></Footer>
            </div>
        </UsuarioProvider>
        </body>
        </html>
    )
        ;
}
