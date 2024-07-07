import { Carousel } from "@material-tailwind/react";
 
export function CarouselSlider() {
  return (<>
    <Carousel transition={{ duration: 1 }} className="w-auto mx-auto">
      <img
        src="/b2.png"
        alt="image 1"
        className="h-full w-full object-contain"
      />
      {/* <img
        src="/b2.png"
        alt="image 1"
        className="h-full w-full object-contain"
      /> */}
      
    </Carousel>
    </>
  );
}