import { Inter } from "next/font/google";
import Head from "next/head"; // Import Head component from Next.js for managing the <head> section
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dr. Brijesh Shrivastava",
  description: "Dr. Brijesh Shrivastava is a highly skilled Interventional Cardiologist affiliated with Anant Heart Hospital in Bhopal. With over 10,000 successful procedures under his belt, Dr. Shrivastava is renowned for his expertise in interventional cardiology. He specializes in performing interventions through the trans-radial route, demonstrating exceptional proficiency in complex procedures such as Left Main, High Risk, and Bifurcation Angioplasties.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
