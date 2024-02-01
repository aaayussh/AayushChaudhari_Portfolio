import React from "react";

import PriceWise from "../assets/portfolio/PriceWise.png";
import Spotblog from "../assets/portfolio/Spotblog.png";
import AtmosCheck from "../assets/portfolio/AtmosCheck.png";
import WorkBuddy from "../assets/portfolio/WorkBuddy.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: Spotblog,
      href: "https://github.com/aaayussh/Spot-Blog",
      
    },
    {
      id: 2,
      src: AtmosCheck,
      href: "https://github.com/aaayussh/AtmosCheck0",
    },
    {
      id: 3,
      src: PriceWise,
      href: "https://github.com/aaayussh/Pricewise",
    },
    {
      id: 4,
      src: WorkBuddy,
      href: "https://github.com/aaayussh/Fitlog",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-3 md:grid-cols-2 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, href }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              {/* <div className="flex items-center justify-center">
                 <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                
                  Code
                </button>
              </div>  */}


              <div className="flex items-center justify-center">
                <a href={href} target="_blank" rel="noopener noreferrer">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Code
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;