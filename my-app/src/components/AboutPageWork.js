export const AboutPageWork = () => {
  return (
    <div className="flex bg-[#2A7CC7] text-[#ffffff] mt-[6vw] ">
      <div className="flex flex-col gap-[3vw] px-[15vw] pt-[6vw] ">
        <h5 className="font-bold text-lg">WORK WITH US</h5>
        <h2 className="text-[42px] font-bold">Now Let’s grow Yours</h2>
        <p>
          The gradual accumulation of information about atomic and small-scale
          behavior during the first quarter of the 20th
        </p>
        <div>
          <button className="rounded border-2 border-[#ffffff] px-[4vw] py-[2vw] font-bold">
            Button
          </button>
        </div>
      </div>
      <div className="w-[75%]">
        <img src="/pics/about.png" />
      </div>
    </div>
  );
};
