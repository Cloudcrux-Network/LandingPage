import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

const Landing = () => {
  const Resize = "transition-all hover:scale-[1.1]";
  const ResizeButton = `${Resize} active:scale-[1.2]`;
  return (
    <div className="backdrop-brightness-[0.65] backdrop-blur-sm flex flex-col items-center justify-center p-6 h-screen py-6 sm:py-12">
      <div className="text-center">
        <h1
          className={`${Resize} text-4xl sm:text-6xl font-bold mb-4 text-white text-shadow-lg`}
        >
          Cloud Crux Network
        </h1>
        <p className="text-xl mb-8 text-white text-shadow-md">
          The Sky is Infinite
        </p>
        <div className="flex justify-center items-center mb-8 ">
          <Image
            draggable="false"
            className={`${ResizeButton} w-3/4 sm:w-1/2 active:rotate-180`}
            src="/CCLogonewWhite.png"
            alt="Cloud Crux Network logo - Home"
            width={200}
            height={200}
          />
        </div>
        <div className="mt-auto flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 space-x-0 sm:space-x-4 mb-6">
          {/*
          <Link
            href=""
            title="Coming Soon Sorry!"
            className={` px-6 py-3 text-lg font-bold text-white bg-gray-700 rounded hover:bg-gray-700 cursor-not-allowed`}
            aria-label="Check Our Prices"
          >
            Check Our Prices
          </Link>
          <Link
            href=""
            title="Coming Soon Sorry!"
            className="px-6 py-3 text-lg font-bold text-white bg-gray-700 rounded hover:bg-gray-700 cursor-not-allowed"
            aria-label="Go to Dashboard"
          >
            Go to Dashboard
          </Link>
          */}
          <Link
            href="#aboutUs"
            className={`${ResizeButton} px-6 py-3 text-lg font-bold text-white bg-sky-600 rounded hover:bg-sky-700 active:bg-sky-800`}
            aria-label="Get Started"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
