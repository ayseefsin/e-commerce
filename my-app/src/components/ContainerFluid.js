export const ContainerFluid = () => {
  return (
    <div className="grid grid-cols-2  font-navText gap-[3rem] ">
      <div className="w-[60vw] max-w-none">
        <img src="https://s3-alpha-sig.figma.com/img/5f8c/e73d/1a41b674cbd12f927c7ea9a6ca0ce76c?Expires=1704067200&Signature=F30uV5SiUdT1SJbd7QnylK83Ar5R5Kq5pSku7u6NsvPpeThpSuCel7W4IAmLU6Cezau~~SiMp9-PYcwdnewWVKuumiGhLqvfm0ibc7uk6OlUb2SB8vQJ6JDQhj8m7ZlUzff6-1JKX2le6kA1QR4To7tcbQ~eB3jd0-OaPezVdSJ44auzJF7RvDqd2nrkfgBM8qoyR4fCVj6l9FMU0~KYe~nQMDuP95y3WKKZk0nkPZsaLyZ-UppMxcxDcAA3UAb35VVBQvwE8oVVUEwDvhAU43KjEG7Bk2kVIW8ZJVOTgvrhnMzMZlpvmaz96MWrxkitrrNsDmfEqysXMecBVesI3A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
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
