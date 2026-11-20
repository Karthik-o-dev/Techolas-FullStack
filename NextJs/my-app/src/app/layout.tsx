import React from "react";
import "./globals.css"
import { Header } from "@/component/header";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html>
    <body>
      <Header />
      {children}
      <footer>
        <h1 className="text-center">This is the footer</h1>
      </footer>
    </body>
  </html>
}