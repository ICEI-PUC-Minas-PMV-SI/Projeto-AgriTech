import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import Home from "./page";
import Navbar from "./components/navbar/Navbar";
import { NavProvider } from "./context/NavContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AgriTech",
  description: "",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <UserProvider>
          <NavProvider>
            <Navbar />
            {children}
          </NavProvider>
        </UserProvider>
      </body>
    </html>
  );
}
