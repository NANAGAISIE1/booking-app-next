import NavBar from "./components/navbar/NavBar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Book Hostels on TheApp",
  description: "A web app for students to discover and book hostels",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-dark text-primary`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
