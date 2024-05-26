import { Carousel, Typography, Button} from "@material-tailwind/react";
import Link from "next/link";

export default function Testimonials() {
  return (
    <>
    <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl uppercase font-semibold title-font mb-4 text-gray-900">
              Testimonials
            </h1>
          </div>
    <Carousel id="testimonials" className="rounded-xl mx-auto w-3/4">
    
      <div className="relative h-full w-full">
        <img
          src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-1xl md:text-2xl lg:text-3xl"
            >
              Mr. Amit Saxena
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              Dr. Brijesh Shrivastava is a gift to the city of Bhopal. His skill and expertise in performing a complex angioplasty procedure for my father in law were nothing short of exceptional. 
              Also we received clear explanation and good support right from the initial consultation to the successful completion of the procedure, Dr. Brijesh and his team at ANANT Heart Hospital Bhopal provided great care and support. 
              I am thankful for the professionalism and dedication to the patient well-being. Now on the path to recovery, we cannot thank Dr. Brijesh and team enough for their life-changing work!
            </Typography>
            <div className="flex justify-center gap-2">
              <Link href='https://g.co/kgs/BBYD5dQ' target='__blank' size="lg" className="text-light-blue-400">
              View on Google
              </Link>
              
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-1xl md:text-2xl lg:text-3xl"
            >
              Mrs. Sonia Tripathi
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              I am very thankful to Dr Shrivastav for his Cordial manner of handling the patient and family. 
              Given the matter of heart and stress it puts the family into, he is very supportive and caring towards the patient as well as family.
              Needless to say, he is very good at what he does. Unlike many, Dr Shrivastava is just a call away in an hour of need. Thanks 🙏
              </Typography>
            <div className="flex justify-center gap-2">
              <Link href='https://g.co/kgs/vdP4Q1m' target='__blank' size="lg" className="text-light-blue-400">
              View on Google
              </Link>
              
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-1xl md:text-2xl lg:text-3xl"
            >
             Mr. Amitesh Argal
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              I had a great experience.
              Dr. Brijesh is very polite. He explained us about the complications very well and is very patient in answering all the queries.
              He did angiography of my mother very comfortably and prescribed minimum medicines.
              The clinic is very hygienic too.
            </Typography>
            <div className="flex justify-center gap-2">
              <Link href='https://g.co/kgs/Susd43J' target='__blank' size="lg" className="text-light-blue-400">
              View on Google
              </Link>
              
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-1xl md:text-2xl lg:text-3xl"
            >
             Dr. Amarjeet S. Khalsa
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              Great Doctor. Quite analytical in cardiac approach and his diagnosis of the problem is very accurate. 
              Dr Brijesh is very supportive and tolerant to his patients. God bless him. 👍
            </Typography>
            <div className="flex justify-center gap-2">
              <Link href='https://g.co/kgs/8StNzUD' target='__blank' size="lg" className="text-light-blue-400">
              View on Google
              </Link>
              
            </div>
          </div>
        </div>
      </div>
    </Carousel>
    </>
  );
}
