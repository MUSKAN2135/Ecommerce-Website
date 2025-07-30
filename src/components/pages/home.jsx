import { useState } from "react";
import Footer from "../footer/footer";
import Herosection from "../herosection/hero";
import Navbar from "../navbar/navbar";
import Allproducts from "../productslist/Allproducts";
import bgimg from '/slider-bg.png'
import Newsletter from "../newsletter/news";
import Gallery from "../gallery/gallery";
import Section from "../section/section";

export default function Home() {
    return (
        <div className="overflow-hidden">
            <div style={{ backgroundImage: `url(${bgimg})`, backgroundSize: "cover", height: "110vh" }}>
                <div>
                    <Navbar />
                </div>
                <div>
                    <Herosection />
                </div>
            </div>
            <div className="mt-8">
                <Allproducts />
            </div>
            <Section />
            <Gallery />
            <Newsletter />
            <Footer />
        </div>
    )
}
