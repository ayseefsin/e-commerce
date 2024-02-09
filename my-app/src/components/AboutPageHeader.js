export const AboutPageHeader = () => {
  const customStyle = {
    backgroundImage: 'url("/pics/hero2.png")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "40vw", // Example height
    width: "100%", // Example width
  };
  return (
    <div style={customStyle} className="flex flex-col p-[12vw] gap-[3vw]">
      <div className="flex flex-col gap-[3vw]">
        <h2 className="font-bold text-[#252B42] ">ABOUT COMPANY</h2>
        <h1 className="text-6xl font-bold text-[#252B42]">ABOUT US</h1>
        <p className="text-[#737373]">
          We know how large objects will act, but things on a small scale
        </p>
      </div>
      <div>
        <button className="bg-[#23A6F0] text-[#ffffff] font-bold px-[2vw] py-[1vw] rounded">
          Get Quote Now
        </button>
      </div>
    </div>
  );
};
