import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const description =
  "CloudCrux offers many of the services your company may need. Web Hosting, Email, Custom Cloud Solutions and more. Starting at prices of as low as $3.";
const url = new URL("https://cloudcrux.com/");
const title = "CloudCrux Network";
const image = "https://cloudcrux.com/fbpreview.png";
export const metadata = {
  metadataBase: url,
  author: "Michael Nichols",
  keyword:
    "Cloud,Crux,Network,CloudCrux,Programming,Hosting,CloudCrux Network,cloud service,cloud services,cloud solutions,hosting services,web host, web hosting",

  title,
  description,
  twitter: {
    card: "summary_large_image",
    url,
    title,
    description,
    image,
  },
  openGraph: {
    title,
    url,
    type: "website",
    description,
    image,
  },
};

export default function RootLayout({ children }) {
  return (
    <html className="scroll-smooth" lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
