import { Chip } from "@material-tailwind/react";


export default function AboutSection() {
  return (
    <>
      <section id="About" className="text-gray-800 px-2 body-font sm:-mt-6 md:mt-24 lg:mt-36">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <Chip variant="outlined" color="cyan" value="About Me" size="lg" className="mb-4" />
            <h1 className="title-font sm:text-4xl text-4xl mb-4 tracking-wide font-extrabold text-gray-900">
                Dr. Brijesh Shrivastava
            </h1>
            <p className="mb-3 leading-relaxed">
            An <strong>Interventional Cardiologist</strong>  <br/>associated with Anant Heart Hospital Bhopal.
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
                    Proficient in doing Complex/Left Main/High Risk /Bifurcation Angioplasties.
             </li>
            </ul>
            <p className="mb-6 px-3">Performs most of his angioplasties through the Trans-radial route (Through the wrist), even for complex angioplasties such as those involving large side branches (Bifurcation stenting) and for heart attacks (Primary PCI / Heart Attack Angioplasty). This helps achieve excellent results with great patient comfort and minimal risk of complications.</p>
            <p className="mb-6 px-3">Believes in exploring new frontiers to provide the best available care to his patients for the betterment of their lives. Firmly believes in honest communication which allows patients to make fully informed choices.</p>
            <div className="flex justify-center">
              <a href="https://www.instagram.com/drbrijesh_shrivastava?igsh=ejJ2ZHpkOTkxNnJo">
              <button className="inline-flex mr-3 ml-1 text-white bg-blue-700 border-0 py-2 px-6 focus:outline-none duration-100 hover:bg-blue-900 rounded text-lg">
                Check Our Instagram Page
              </button></a>
              <a href="https://www.facebook.com/profile.php?id=100066535004525&mibextid=JRoKGi">
              <button className="inline-flex mr-3 text-white bg-blue-700 border-0 py-2 px-6 focus:outline-none duration-100 hover:bg-blue-900 rounded text-lg">
                Check Our Facebook Page
              </button></a>
              <a href="https://g.co/kgs/JX7FJGf" target={"__blank"}>
              <button className="inline-flex mr-1 text-white bg-blue-700 border-0 py-2 px-6 focus:outline-none duration-100 hover:bg-blue-900 rounded text-lg">
                Google Us
              </button></a>
              
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
