import ContactForm from "./contact";
import { Email } from "@mui/icons-material";
const AboutUs = () => {
  const services = [
    [
      "Programming",
      "App Development and Code review, there isn't much CloudCrux is limited to!",
    ],
    [
      "Hosting",
      "Website and email hosting services are offered. Let's get you a customized domain!",
    ],
    [
      "Web Development",
      "Both Frontend and backend web development, we can represent your business online.",
    ],
    [
      "Cloud Services",
      "Allow your business to have an online services through a custom dashboard!",
    ],
  ];
  return (
    <main className="flex flex-col items-center justify-center p-6 bg-gray-800 text-white py-6 sm:py-12 w-full">
      <div
        id="aboutUs"
        className="bg-gray-900 w-full max-w-3xl shadow-2xl p-6 rounded-lg space-y-16"
      >
        <div>
          <h2 className="text-xl sm:text-2xl font-bold mb-4 tracking-wide">
            What We Do
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((content, index) => (
              <div
                key={index}
                className="border rounded p-4 hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="font-semibold mb-2">{content[0]}</h3>
                <p>{content[1]}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-4">What Are We About?</h2>
          <p>
            {`We are a team of nerds who enjoy learning and challenging ourselves
            to solve any problem presented to us. We started off as a video game
            hosting community and learned that not only had we worked well with
            one another, but we love to apply our skillsets to new projects with
            new people. Our mission is not only to enjoy sharpening our skills,
            but to contribute to our Client's Success.`}
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4 tracking-wide">
            Our Promise To You
          </h2>
          <ul className="list-disc list-inside pl-4 text-gray-300 space-y-2">
            <li>You will be met with effective and friendly service.</li>
            <li>We will respect and protect your privacy and personal data.</li>
            <li>No big words. No Confusion.</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4 tracking-wide">Contact Us</h2>
          <p className="text-gray-300 leading-relaxed">
            {`Feel free to ask us any questions - whether it's personal or
        professional, silly or serious, we welcome any conversation. If
        there's any reason at all to contact us, please use the form to the
        right or contact us using the buttons below through various social
        media outlets. We respond quickly.`}
          </p>{" "}
          <div className="mt-4 flex items-center">
            <Email className="mr-2" />
            <a
              href="mailto:support@cloudcrux.com"
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              support@cloudcrux.com
            </a>
          </div>
          <div className="mt-4">
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutUs;
