export const ProductDetail = () => {
  return (
    <div className="font-navText bg-[#FAFAFA] text-[#252B42]">
      <div>
        <div className="flex md:justify-center items-center gap-3 tracking-[.0125em] px-[6vw] py-[2vw] ">
          <a className="font-bold ">Home</a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="16"
            viewBox="0 0 10 16"
            fill="none"
            className="text-[#BDBDBD]"
          >
            <g clip-path="url(#clip0_3006_10767)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.680771 0.180771C0.737928 0.123469 0.805828 0.0780066 0.880583 0.0469869C0.955337 0.0159672 1.03548 0 1.11641 0C1.19735 0 1.27749 0.0159672 1.35224 0.0469869C1.427 0.0780066 1.4949 0.123469 1.55205 0.180771L8.9358 7.56452C8.9931 7.62168 9.03857 7.68958 9.06959 7.76433C9.10061 7.83909 9.11657 7.91923 9.11657 8.00016C9.11657 8.0811 9.10061 8.16124 9.06959 8.23599C9.03857 8.31074 8.9931 8.37865 8.9358 8.4358L1.55205 15.8196C1.43651 15.9351 1.27981 16 1.11641 16C0.953015 16 0.79631 15.9351 0.680771 15.8196C0.565232 15.704 0.500322 15.5473 0.500322 15.3839C0.500322 15.2205 0.565232 15.0638 0.680771 14.9483L7.63011 8.00016L0.680771 1.05205C0.623469 0.994897 0.578006 0.926996 0.546986 0.852242C0.515967 0.777487 0.5 0.697347 0.5 0.616412C0.5 0.535478 0.515967 0.455338 0.546986 0.380583C0.578006 0.305829 0.623469 0.237928 0.680771 0.180771Z"
                fill="#BDBDBD"
              />
            </g>
            <defs>
              <clipPath id="clip0_3006_10767">
                <rect
                  width="9"
                  height="16"
                  fill="white"
                  transform="translate(0.5)"
                />
              </clipPath>
            </defs>
          </svg>
          <h6 className="text-[#BDBDBD] font-bold">Shop</h6>
        </div>
      </div>
      <div className="grid grid-cols-2 md:flex md:flex-col">
        <div className=" w-[40vw] md:w-[100vw] grid grid-cols-1 grid-rows-2  gap-[1vw] px-[6vw] ">
          <img className="w-[40vw] md:w-[100vw] " src="/pics/teamjean.png" />
          <div className=" grid grid-cols-4 gap-[1vw]  ">
            <img src="/pics/teamjean.png" />
            <img className=" opacity-50 " src="/pics/teamjean.png" />
          </div>
        </div>
        <div className="md:flex md:flex-col md:px-[5vw] md:gap-[10vw]">
          <h3 className="text-[2vw] md:text-[7vw]">Floating Phone</h3>
          <div className=" flex gap-[0.5vw] mt-[1.5vw] ">
            <img src="/pics/Vector.png" />
            <img src="/pics/Vector.png" />
            <img src="/pics/Vector.png" />
            <img src="/pics/Vector.png" />
            <img src="/pics/Vector (1).png" />
            <h6 className="font-bold text-[#737373]">10 reviews</h6>
          </div>
          <h4 className="text-[2.5vw] font-bold mt-[1.5vw]">$1,339.33</h4>
          <div className="flex">
            <p className="text-[#737373] font-bold">Avaibality : </p>
            <p className=" text-main-blue font-bold px-[1vw]"> in Stock</p>
          </div>
          <p className=" mt-[1.5vw] mb-[1.5vw] md:text-center ">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </p>
          <hr />
          <div className="flex gap-[1vw] mt-[1.5vw]">
            <img src="/pics/Ellipse14.png"></img>
            <img src="/pics/Ellipse 15.png"></img>
            <img src="/pics/Ellipse 16.png"></img>
            <img src="/pics/Ellipse 17.png"></img>
          </div>
          <div className="flex items-center gap-[1vw] mt-[2vw]">
            <button className="bg-main-blue text-white font-bold px-[1vw] py-[1vw] rounded  ">
              Select Options
            </button>
            <i class="fa-brands fa-gratipay"></i>
            <i class="fa-solid fa-cart-shopping"></i>
            <i class="fa-solid fa-eye"></i>
          </div>
        </div>
      </div>
    </div>
  );
};
