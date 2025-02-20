import { Chip } from "@material-tailwind/react";
import { FaInstagram, FaFacebook, FaGoogle, FaYoutube } from "react-icons/fa";

export default function AboutSection() {
  return (
    <>
      <section
        id="About"
        className="text-gray-800 px-2 body-font sm:-mt-6 md:mt-24 lg:mt-36"
      >
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <Chip
              variant="outlined"
              color="cyan"
              value="About Me"
              size="lg"
              className="mb-4"
            />
            <h1 className="title-font sm:text-4xl text-4xl mb-4 tracking-wide font-extrabold text-gray-900">
              Dr. Brijesh Shrivastava
            </h1>
            <p className="mb-3 leading-relaxed">
              An <strong>Interventional Cardiologist</strong> <br />
              Director & Co-founder, Anant Heart Hospital, Bhopal.
            </p>
            <ul className="mb-6 sm:px-8 px-2">
              <li className="flex items-center sm:px-8 text-left my-auto">
                <img
                  src="/tick.svg"
                  alt="tick Icon"
                  className="mr-2 "
                  width="20px"
                />
                Performed 10,000+ Successful Procedures and counting.
              </li>
              <li className="flex items-center sm:px-8 text-left my-auto">
                <img
                  src="/tick.svg"
                  alt="tick Icon"
                  className="mr-2 "
                  width="20px"
                />
                Expertise in doing interventions through trans-radial route.
              </li>
              <li className="flex items-center sm:px-8 text-left my-auto">
                <img
                  src="/tick.svg"
                  alt="tick Icon"
                  className="mr-2 "
                  width="20px"
                />
                Proficient in doing Complex/Left Main/High Risk /Bifurcation
                Angioplasties.
              </li>
            </ul>
            <p className="mb-6 px-3">
              Performs most of his angioplasties through the Trans-radial route
              (Through the wrist), even for complex angioplasties such as those
              involving large side branches (Bifurcation stenting) and for heart
              attacks (Primary PCI / Heart Attack Angioplasty). This helps
              achieve excellent results with great patient comfort and minimal
              risk of complications.
            </p>
            <p className="mb-6 px-3">
              Believes in exploring new frontiers to provide the best available
              care to his patients for the betterment of their lives. Firmly
              believes in honest communication which allows patients to make
              fully informed choices.
            </p>
            <div className="flex space-x-4">
            <a
  href="https://www.instagram.com/drbrijesh_shrivastava?igsh=ejJ2ZHpkOTkxNnJo"
  target="_blank"
  rel="noopener noreferrer"
  className="text-pink-500 hover:text-pink-700 transition duration-200 hover:scale-110"
>
  <FaInstagram size={40} />
</a>

<a
  href="https://www.facebook.com/profile.php?id=100066535004525&mibextid=JRoKGi"
  target="_blank"
  rel="noopener noreferrer"
  className="text-blue-600 hover:text-blue-800 transition duration-200 hover:scale-110"
>
  <FaFacebook size={40} />
</a>

<a
  href="https://g.co/kgs/JX7FJGf"
  target="_blank"
  rel="noopener noreferrer"
  className="text-yellow-500 hover:text-red-600 transition duration-200 hover:scale-110"
>
  <svg
    viewBox="-3 0 262 262"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid"
    className="w-10 h-10 transition duration-200 hover:scale-110"
  >
    <g id="SVGRepo_iconCarrier">
      <path
        className="hover:fill-blue-600 transition duration-200"
        d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
        fill="#4285F4"
      ></path>
      <path
        className="hover:fill-green-600 transition duration-200"
        d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
        fill="#34A853"
      ></path>
      <path
        className="hover:fill-yellow-500 transition duration-200"
        d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
        fill="#FBBC05"
      ></path>
      <path
        className="hover:fill-red-600 transition duration-200"
        d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
        fill="#EB4335"
      ></path>
    </g>
  </svg>
</a>

<a
  href="https://youtube.com/@drbrijeshshrivastavainterv2913?si=fJiD0HngkB4MYmjZ"
  target="_blank"
  rel="noopener noreferrer"
  className="text-red-500 hover:text-red-700 transition duration-200 hover:scale-110"
>
  <FaYoutube size={40} />
</a>

            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="/main.jpeg"
            />
          </div>
        </div>
      </section>
    </>
  );
}
