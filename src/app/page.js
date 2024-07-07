'use client'
import AboutSection from "./components/AboutSection";
import { CarouselSlider } from "./components/CorouselSlider";
import Details from "./components/Details";
import { FooterBlock } from "./components/FooterBlock";
import Gallery from "./components/Gallery";
import Jumbotron from "./components/Jumbotron";
import { NavbarWithMegaMenu } from "./components/NavbarWithMegaMenu";
import Testimonials from "./components/Testimonials";
 
export default function Home() {
  return(
    <div className="bg-white scroll-smooth duration-300">
      <NavbarWithMegaMenu/>
      <CarouselSlider/>
      <Details/>
      <AboutSection/>
      <Gallery/>
      {/* <Jumbotron/> */}
      <Testimonials className="scroll-smooth"/>
      <FooterBlock/>
  </div>
  )
}
