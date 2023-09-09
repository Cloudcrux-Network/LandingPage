import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const description =
  "CloudCrux offers many of the services your company may need. Web Hosting, Email, Custom Cloud Solutions and more. Starting at prices of as low as $3.";
const url = new URL("https://cloudcrux.com/");
const title = "CloudCrux Network";
const images = "/fbpreview.png";
export const metadata = {
  metadataBase: url,
  authors: [{ name: "Michael Nichols", url: "https://michael-nichols.com" }],
  keywords: [
    "Cloud",
    "Crux",
    "Network",
    "CloudCrux",
    "Programming",
    "Hosting",
    "CloudCrux Network",
    "cloud service",
    "cloud services",
    "cloud solutions",
    "hosting services",
    "web host",
    "web hosting",
  ],
  title,
  description,
  twitter: {
    card: "summary_large_image",
    url,
    title,
    description,
    images,
  },
  openGraph: {
    locale: "en_US",
    siteName: title,
    title,
    url,
    type: "website",
    description,
    images,
  },
};

export default function RootLayout({ children }) {
  return (
    <html className="scroll-smooth" lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
