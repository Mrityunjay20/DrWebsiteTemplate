export default function Details() {
    return (
      <>
        <div className="w-full hidden lg:block xs:block h-96 bg-fixed  bg-blue-900 border-y-2 border-blue-gray-900  bg-[url('/bgtexture.png')] bg-opacity-85 z-10">
          <section className="text-white body-font">
            <div className="container px-5 py-8 mx-auto lg:py-24">
              <div className="flex flex-wrap -m-4">
                <div className="p-4 lg:w-1/3">
                  <div className="h-full bg-blue-700 bg-opacity-100 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-left relative">
                    <h1 className="title-font sm:text-2xl text-xl pt-12 pb-4 font-semibold text-white mb-3">
                      Working Hours
                    </h1>
                    <p className="leading-relaxed mb-3">
                      Mon - Fri:{" "}
                      <span className="text-right">6:00pm - 9:00pm.</span>
                    </p>
                    <p className="leading-relaxed mb-3">
                      Wednesday: 8:00pm - 9:00pm
                    </p>
                    <p className="leading-relaxed mb-3">
                      Saturday: 6:00pm - 8:00pm
                    </p>
                    <p className="leading-relaxed mb-3">Sunday: Holiday</p>
                  </div>
                </div>
                <div className="p-4 lg:w-1/3">
                  <div className="h-full bg-[#091f3f] bg-opacity-100 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-left relative">
                    <h1 className="title-font sm:text-2xl text-xl pt-12 font-semibold text-white mb-3">
                      Clinic Address
                    </h1>
                    <p className="leading-relaxed mb-3">
                      Rhythm Heart Clinic E-4/110, Arera Colony, Opposite Baghira
                      Apartments, Near Vande Matram Square, Bhopal - 462016 M.P.
                    </p>
                  </div>
                </div>
                <div className="p-4 lg:w-1/3">
                  <div className="h-full bg-yellow-900 bg-opacity-100 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                    <h1 className="title-font sm:text-2xl text-xl pt-12 font-semibold text-white mb-3">
                      Make Appointment
                    </h1>
                    <p className="leading-relaxed mb-3">
                      Do you need help? We are here to help you in whatever you
                      need. Call us on
                    </p>
                    <p>+91 90 960 69751</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="w-full h-12 bg-white"></div>
      </>
    );
  }
  