
import "./globals.css";
import { AuthProvider } from './context/AuthContext';
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Eye in the Ski",
  description: "Advanced ski monitoring",
};

export default function RootLayout({ children }) {
  return (
    <AuthProvider>
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
    </AuthProvider>
  );
}
