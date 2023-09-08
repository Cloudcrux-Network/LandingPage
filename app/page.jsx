import Image from "next/image";
import Link from "next/link";
import Landing from "/components/landing";
import Footer from "/components/footer";
import AboutUs from "/components/aboutus";
const Home = () => {
  return (
    <div className="bg-cover bg-top bg-fixed bg-[url('/background.png')] flex flex-col min-h-screen ">
      <Landing />
      <AboutUs />
      <Footer />
    </div>
  );
};
export default Home;
