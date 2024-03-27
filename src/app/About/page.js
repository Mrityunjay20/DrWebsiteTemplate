'use client'
import { FooterBlock } from "../components/FooterBlock";
import { NavbarWithMegaMenu } from "../components/NavbarWithMegaMenu";

export default function Home(){
    return(
        <div className="bg-white">
            <NavbarWithMegaMenu/>
            <FooterBlock/>
        </div>
    )
}