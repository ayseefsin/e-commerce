export const ContainerFluid = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-1 md:items-center font-navText gap-[3vw] pb-[15vw] ">
      <div className="w-[60vw] md:w-[100vw] px-[6vw]">
        <img src="./pics/asian.png" />
      </div>

      <div className="flex flex-col gap-[3vw] py-[10vw] px-[5vw] md:items-center ">
        <div className="">
          <h5 className="text-[#BDBDBD] font-bold text-base ">SUMMER 2020</h5>
        </div>
        <div>
          <h2 className="text-[#252B42] text-[2.5rem] md:text-[1.5rem] font-bold">
            Part of the Neural Universe
          </h2>
        </div>
        <div>
          <h4 className="text-xl md:text-lg text-[#737373] ">
            We know how large objects will act, but things on a small scale.
          </h4>
        </div>
        <div className=" flex text-sm  font-bold gap-[3vw] ">
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
