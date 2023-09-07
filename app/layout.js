import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const description =
  "CloudCrux offers many of the services your company may need. Web Hosting, Email, Custom Cloud Solutions and more. Starting at prices of as low as $3.";
export const metadata = {
  author: "Michael Nichols",
  keybord:
    "Cloud,Crux,Network,CloudCrux,Programming,Hosting,CloudCrux Network,cloud service,cloud services,cloud solutions,hosting services,web host, web hosting",

  title: "CloudCrux Network",
  description: description,

  openGraph: {
    title: "CloudCrux Network",
    url: "https://cloudcrux.com/",
    type: "website",
    description: description,
    image: "https://cloudcrux.com/fbpreview.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
