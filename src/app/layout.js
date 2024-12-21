
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

        <div className="fixed z-50 top-0 bg-white w-full">

            <div className="bg-red-600 w-full flex items-center flex-col justify-center">

              <h1 className="text-white font-semibold text-xl text-center py-3" >Website Under Development</h1>

            </div>

            <div className="flex p-2 border-gray-400 border-b items-center justify-between">

              <div>
                <button className="py-2 px-3 rounded-lg bg-white text-white font-semibold">Contact</button>
              </div>

              <img className="text-center w-20" src="https://utfs.io/f/vm2okaME29juFEgsVdUcQOSuvKit5lyLh3ekTAU26V1IZrmE" />
              <div>
                <button className="py-2 px-3 rounded-lg bg-blue-600 text-white font-semibold">Contact</button>
              </div>
            </div>


        </div>




        {children}
      </body>
    </html>
  );
}
