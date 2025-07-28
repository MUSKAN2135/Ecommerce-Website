// import heroimg from "../../images/soon.webp";

import { useContext } from "react";
import { Link } from "react-router-dom";

export default function Herosection() {
  return (
    <div className="md:ml-22 sm:ml-14 ml-8 mr-2 lg:pt-48 md:pt-32 pt-30 ">
      <div className="border-l-2 border-[#0097b2] h-full">
        <div className="hero-text pb-10">
          <h2 className="px-4 pt-5 pb-4 md:text-5xl sm:text-4xl text-2xl text-left text-gray-300" data-aos="fade-up" data-aos-anchor="#example-anchor" data-aos-offset="500" data-aos-duration="500">Welcome to Trendymart</h2>
          <p className="p-4 mb-2 md:w-3/5 text-gray-500" data-aos="zoom-out-right" data-aos-duration="2000">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima fuga voluptatibus, ab quam exercitationem dolorum aliquam consectetur dolore! Dolorum esse nobis ducimus molestiae facilis inventore doloribus facere saepe soluta libero!</p>
          <button data-aos="fade-left" data-aos-duration="3000">
            <Link to='/shop' className="bg-[#0097b2] transition duration-150 mx-4 md:w-45 w-auto text-white hover:bg-[transparent] hover:border hover:border-[#0097b2] transition duration-10 cursor-pointer hover:text-gray-400 py-3 px-8 shadow-md rounded">
              Buy Now
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
