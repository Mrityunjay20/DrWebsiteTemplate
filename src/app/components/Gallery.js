
export default function Gallery() {
  return (
    <>
      <section className="text-gray-800 body-font mt-4 z-50">
        <div className="container px-5 py-24 mx-auto">

          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl uppercase font-semibold title-font mb-4 text-gray-900">
              Our Facilities
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-lg">
            We offer exemplary comprehensive cardiac care services in Bhopal, providing specialized medical attention and expertise for heart health.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
  <div className="lg:w-1/3 sm:w-1/2 p-4">
    <div className="flex flex-col h-full relative">
      <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src='/drbjecon.jpeg' />
      <div className="flex-grow px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-85 duration-300 hover:opacity-0">
        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Cardiac consultation</h1>
        <p className="leading-relaxed">Experience comprehensive cardiac care with our specialized cardiac consultations, offering thorough evaluations, state-of-the-art diagnostic tests, and personalized treatment plans tailored to your cardiovascular health needs.</p>
      </div>
    </div>
  </div>
  <div className="lg:w-1/3 sm:w-1/2 p-4">
    <div className="flex flex-col h-full relative">
      <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src='/ecg.webp' />
      <div className="flex-grow px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-85 duration-300 hover:opacity-0">
        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">ECG</h1>
        <p className="leading-relaxed">An electrocardiogram (ECG or EKG) is one of the simplest and fastest tests used to evaluate the heart. Electrodes are placed at certain spots on the chest, arms, and legs. The electrical activity of the heart is then measured, interpreted, and printed out. No electricity is sent into the body.</p>
      </div>
    </div>
  </div>
  <div className="lg:w-1/3 sm:w-1/2 p-4">
    <div className="flex flex-col h-full relative">
      <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src='/treadmill.jpeg' />
      <div className="flex-grow px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-85 duration-300 hover:opacity-0">
        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">TMT</h1>
        <p className="leading-relaxed">The TMT test (the treadmill test) is used to evaluate heart function in persons with diabetes who are at risk for heart disease, have a past of heart disease, or have undergone cardiac treatment.</p>
      </div>
    </div>
  </div>
  <div className="lg:w-1/3 sm:w-1/2 p-4">
    <div className="flex flex-col h-full relative">
      <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src='/twodecho.png' />
      <div className="flex-grow px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-85 duration-300 hover:opacity-0">
        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">2D echo and color Doppler</h1>
        <p className="leading-relaxed">This Doppler technique is used to measure and assess the flow of blood through the heart&apos;s chambers and valves. The amount of blood pumped out with each beat is an indication of the heart&apos;s functioning. Also, Doppler can detect abnormal blood flow within the heart, which can indicate a problem with one or more of the heart&apos;s four valves, or with the heart&apos;s walls.</p>
      </div>
    </div>
  </div>
  <div className="lg:w-1/3 sm:w-1/2 p-4">
    <div className="flex flex-col h-full relative">
      <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="/holtermoni.jpeg" />
      <div className="flex-grow px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-85 duration-300 hover:opacity-0">
        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Holter monitoring</h1>
        <p className="leading-relaxed">A Holter monitor is a type of portable electrocardiogram (ECG). It records the electrical activity of the heart over 24 hours or longer while you are away from your healthcare provider&apos;s office. Small, electrodes are put on certain points on the chest and abdomen. The electrodes are connected to an ECG machine by wires.</p>
      </div>
    </div>
  </div>
  <div className="lg:w-1/3 sm:w-1/2 p-4">
    <div className="flex flex-col h-full relative">
      <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="/abpm.jpeg" />
      <div className="flex-grow px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-85 duration-300 hover:opacity-0">
        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Ambulatory Blood pressure monitoring</h1>
        <p className="leading-relaxed">Ambulatory blood pressure monitoring is a method to measure your blood pressure on a continuous basis for 24 hours. Your blood pressure is measured even as you sleep. The ongoing data helps your healthcare provider get a more accurate picture of your blood pressure numbers. The results can confirm a high blood pressure diagnosis and guide treatment.</p>
      </div>
    </div>
  </div>
</div>

        </div>
      </section>
    </>
  );
}
