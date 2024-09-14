import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sponsor App",
  description: "Hosts the sponsor document for HackIllinois",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
