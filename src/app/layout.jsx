import "./globals.css";
import Header from "./components/Header/page";
import { NextUIProvider } from "@nextui-org/react";
import Footer from "./components/Footer/page";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>

        {/* Lora font family */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Lora:ital,wght@0,400..700;1,400..700&display=swap" rel="stylesheet" />

        {/* Satisfy font family */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Lora:ital,wght@0,400..700;1,400..700&family=Satisfy&display=swap" rel="stylesheet"></link>

        {/* Poppins font. */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Lora:ital,wght@0,400..700;1,400..700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Satisfy&display=swap" rel="stylesheet"></link>

      </head>
      <body className="overflow-x-hidden">
        <NextUIProvider>
          <div className="flex flex-col items-center">
            <Header />
            {children}
            <Footer />
          </div>
        </NextUIProvider>
      </body>
    </html>
  );
}
