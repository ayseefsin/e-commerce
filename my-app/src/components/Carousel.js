import { useState } from "react";
export const Carousel = () => {
  const slides = [
    {
      url: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA18kVdH.img",
      name: "women",
    },
    {
      url: "https://wallpapercave.com/wp/wp1866317.jpg",
      name: "women",
    },
  ];
  const [slide, setSlide] = useState(0);
  const sliderFnc = () => {
    slide === 1 ? setSlide(0) : setSlide(1);
  };
  return (
    <div
      style={{ backgroundImage: `url(${slides[slide].url})` }}
      className="bg-cover items-center flex flex-shrink-0 duration-700"
    >
      <div onClick={sliderFnc} className="p-[6vw] flex justify-items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="45"
          viewBox="0 0 24 45"
          fill="none"
        >
          <g clip-path="url(#clip0_2984_6850)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M23.4993 43.7724C23.341 43.9302 23.1529 44.0554 22.9458 44.1408C22.7387 44.2263 22.5167 44.2703 22.2925 44.2703C22.0683 44.2703 21.8463 44.2263 21.6392 44.1408C21.4321 44.0554 21.244 43.9302 21.0857 43.7724L0.631107 23.4352C0.472368 23.2778 0.346428 23.0908 0.260496 22.8849C0.174566 22.679 0.130333 22.4582 0.130333 22.2353C0.130333 22.0124 0.174566 21.7917 0.260496 21.5858C0.346428 21.3799 0.472368 21.1928 0.631107 21.0354L21.0857 0.698261C21.4057 0.380028 21.8398 0.201248 22.2925 0.201248C22.7451 0.201248 23.1792 0.380028 23.4993 0.698261C23.8194 1.01649 23.9992 1.4481 23.9992 1.89815C23.9992 2.3482 23.8194 2.77981 23.4993 3.09805L4.24815 22.2353L23.4993 41.3726C23.658 41.53 23.784 41.717 23.8699 41.9229C23.9558 42.1288 24.0001 42.3496 24.0001 42.5725C24.0001 42.7954 23.9558 43.0161 23.8699 43.222C23.784 43.4279 23.658 43.6149 23.4993 43.7724Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_2984_6850">
              <rect
                width="24"
                height="44.4706"
                fill="white"
                transform="translate(24 44.4706) rotate(-180)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div className="flex px-[0.65vw] justify-between bg-[/pics/shop-hero-1-product-slide-1.jpg] ">
        <div className="py-[8vw] flex flex-col w-[599px] justify-items-start gap-[35px] font-navText text-[#FFF]">
          <div>
            <h5 className="text-base font-bold h-[1.5rem] tracking-[.00625em]">
              SUMMER 2020
            </h5>
          </div>
          <div className="text-[3.625rem] font-bold leading-[5rem] tracking-[.0125em]">
            <h1>NEW COLLECTION</h1>
          </div>
          <div>
            <h4 className="text-xl leading-[1.875rem] font-normal tracking-[.0125em]">
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
        <div onClick={sliderFnc} className="flex items-center pl-[5vw] ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="45"
            viewBox="0 0 24 45"
            fill="none"
          >
            <g clip-path="url(#clip0_2984_6847)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.565959 0.698218C0.724296 0.540391 0.912395 0.415172 1.11948 0.329734C1.32657 0.244296 1.54857 0.200317 1.77278 0.200317C1.99698 0.200317 2.21899 0.244296 2.42607 0.329734C2.63316 0.415172 2.82126 0.540391 2.9796 0.698218L23.4341 21.0354C23.5929 21.1928 23.7188 21.3798 23.8048 21.5857C23.8907 21.7916 23.9349 22.0124 23.9349 22.2353C23.9349 22.4582 23.8907 22.6789 23.8048 22.8848C23.7188 23.0907 23.5929 23.2777 23.4341 23.4352L2.9796 43.7723C2.65953 44.0906 2.22542 44.2693 1.77278 44.2693C1.32013 44.2693 0.886027 44.0906 0.565959 43.7723C0.245891 43.4541 0.066078 43.0225 0.066078 42.5724C0.066078 42.1224 0.245891 41.6908 0.565959 41.3725L19.8171 22.2353L0.565959 3.098C0.407221 2.94057 0.281279 2.75356 0.195347 2.54766C0.109416 2.34176 0.0651855 2.12103 0.0651855 1.89811C0.0651855 1.67519 0.109416 1.45446 0.195347 1.24856C0.281279 1.04267 0.407221 0.855647 0.565959 0.698218Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_2984_6847">
                <rect width="24" height="44.4706" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
};
