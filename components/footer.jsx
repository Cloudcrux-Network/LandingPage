import Link from "next/link";
import Image from "next/image";
import Button from "@mui/material/Button";
import { Twitter, LinkedIn, Facebook } from "@mui/icons-material";

const Footer = () => {
  const Resize = "transition-all hover:scale-[1.1] active:scale-[1.2]";
  return (
    <footer className="flex flex-col justify-center items-center bg-gray-900 p-4 text-white space-y-4">
      <Image
        src="/CCLogonewWhite.png"
        alt="Cloud Crux Network logo"
        width={50}
        height={50}
      />
      <div className="flex space-x-4">
        <Link
          title="Facebook"
          aria-label="Check Out Our Facebook"
          href="https://www.facebook.com/cloudcruxnetwork"
          className={`${Resize} bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none transition-colors duration-300`}
        >
          <Facebook />
        </Link>
        <Link
          title="Twitter"
          aria-label="Check Out Our Twitter"
          href="https://twitter.com/CloudCruxNet"
          className={`${Resize} bg-blue-400 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded focus:outline-none transition-colors duration-300`}
        >
          <Twitter />
        </Link>
        <Link
          title="LinkedIn"
          aria-label="Check Out Our LinkedIn"
          href="https://www.linkedin.com/company/cloudcrux-network"
          className={`${Resize} bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded focus:outline-none transition-colors duration-300`}
        >
          <LinkedIn />
        </Link>
      </div>
      <p>&copy; 2012-{new Date().getFullYear()} Cloud Crux Network</p>
    </footer>
  );
};

export default Footer;
