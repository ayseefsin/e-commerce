import { useState } from "react";
export const Carousel = () => {
  const slides = [
    {
      url: "https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/2021-04/woman%20shopping.jpg",
      name: "women",
    },
    {
      url: "https://peaseandcurren.com/wp-content/uploads/2020/03/Retail-and-online-shopping-1536x1024.jpg",
      name: "women",
    },
  ];
  const [slide, setSlide] = useState(1);
  const sliderFnc = () => {
    slide === 1 ? setSlide(0) : setSlide(1);
  };
  return (
    <div
      style={{ backgroundImage: `url(${slides[slide].url})` }}
      className="bg-cover items-center flex flex-shrink-0 duration-700"
    >
      <div onClick={sliderFnc} className="p-[6vw] flex justify-items-center">
        <i
          class="fa-solid fa-chevron-left fa-2xl"
          style={{ color: "#ffffff" }}
        ></i>
      </div>
      <div className="flex px-[0.65vw] justify-between bg-[/pics/shop-hero-1-product-slide-1.jpg] ">
        <div className="py-[8vw] flex flex-col w-[35vw] justify-items-start gap-[35px] font-navText text-[#FFF]">
          <div>
            <h5 className="text-base font-bold tracking-[.00625em]">
              SUMMER 2020
            </h5>
          </div>
          <div className="text-[4vw] font-bold leading-[5rem] tracking-[.0125em]">
            <h1>NEW COLLECTION</h1>
          </div>
          <div>
            <h4 className="text-[2vw] leading-[1.875rem] font-normal tracking-[.0125em]">
              We know how large objects will act, but things on a small scale.
            </h4>
          </div>
          <div>
            <button className="px-[2.5rem] py-[0.938rem] flex flex-row items center bg-[#2DC071]">
              <h3 className="font-bold text-base leading-[2rem] tracking-[.00625em]">
                SHOP NOW
              </h3>
            </button>
          </div>
        </div>
      </div>
      <div className="w-[20vw]"></div>
      <div>
        <div onClick={sliderFnc} className="flex items-center pl-[20vw] ">
          <i
            class="fa-solid fa-chevron-right fa-2xl"
            style={{ color: "#ffffff" }}
          ></i>
        </div>
      </div>
    </div>
  );
};
