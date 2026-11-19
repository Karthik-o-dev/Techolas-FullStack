import React from "react";
import "./globals.css"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html>
    <body>
      <header className="flex justify-center gap-10">
        <li>home</li>
        <li>About</li>
        <li>Contact</li>
      </header>
      {children}
      <footer>
        <h1 className="text-center">This is the footer</h1>
      </footer>
    </body>
  </html>
}