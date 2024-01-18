export const ContainerFluid = () => {
  return (
    <div className="grid grid-cols-2  font-navText gap-[3rem] ">
      <div className="w-[60vw] max-w-none">
        <img src="https://s3-alpha-sig.figma.com/img/5f8c/e73d/1a41b674cbd12f927c7ea9a6ca0ce76c?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JQ9KNvO~K3ydNrrWp~bUlS5WKgUkBfRq3YwEu0ytKqRYfL9zPU-3tBL0mp4XlZaiqz9lv~W0cMDQ-X3V6Kt5vd~ncmYsKdVmj2igjCHiZhygeLSMRtokopc0eXEplHj7FOVAykIfmuyurv4T1sjFKi2LBGW7p3co3oPmLgXop2~MLK8Q-MQ8v1~5mnEkvCa5h6duGqS9vXPZu3vv1ISqALlO4G0x26zCTXmJyjPfCALHGGeu06Dsl5mPvftjd2ZJIMv5Fx83Wt~dc2RPd-k5T7HuqwmFlwTTOfkDVfNTLgGKSutqQw~RYmptwSBG8sVFtduYM93IK4NVWWqPBqgIDA__" />
      </div>

      <div className="flex flex-col gap-[4vh] py-[10rem] px-[5rem] ">
        <div className="">
          <h5 className="text-[#BDBDBD] font-bold text-base ">SUMMER 2020</h5>
        </div>
        <div>
          <h2 className="text-[#252B42] text-[2.5rem] font-bold">
            Part of the Neural Universe
          </h2>
        </div>
        <div>
          <h4 className="text-xl text-[#737373] ">
            We know how large objects will act, but things on a small scale.
          </h4>
        </div>
        <div className=" flex text-sm font-bold gap-[3vw] ">
          <div className="bg-[#2DC071]">
            <button className="text-[#FFFFFF] px-[3vw] py-[2vh] ">
              BUY NOW
            </button>
          </div>
          <div className="border-solid border-2 border-[#2DC071]  ">
            <button className="text-[#2DC071] px-[3vw] py-[2vh]  ">
              READ MORE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
