import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import Navbar from "@/components/navbar";
import BottomFooter from "@/components/BottomFooter";

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "PathWise",
  description: "Your learning companion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <body
          className={`${bricolageGrotesque.className} antialiased`}
        >
        <ClerkProvider appearance={{variables: { colorPrimary: "#fe5933" }}}>
          <header>
            <Navbar />
          </header>
          {children}
    <BottomFooter />
    </ClerkProvider>
        </body>
      </html>
  );
}
