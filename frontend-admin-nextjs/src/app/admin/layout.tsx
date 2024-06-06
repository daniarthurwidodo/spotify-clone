import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import SideMenu from "../components/side-menus";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="flex ">
        <div className="w-48 h-screen p-4 bg-slate-900 text-white">
          <h4>Spotify-clone</h4>
          <SideMenu />
        </div>
        <div className="p-4">{children}</div>
      </div>
    </>
  );
}
//
