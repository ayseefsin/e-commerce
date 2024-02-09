export const TeamPage = () => {
  return (
    <>
      <div className="flex flex-col items-center gap-[3vw]">
        <h5 className="text-lg font-bold ">WHAT WE DO</h5>
        <h2 className="text-6xl font-bold">Innovation tailored for you</h2>
        <div className="flex items-center gap-[1vw]">
          <h6>Home</h6>
          <i class="fa-solid fa-chevron-right"></i>
          <h6>Team</h6>
        </div>
      </div>
      <div className="flex">
        <div className="flex-1">
          <img src="/pics/shop-hero-2-png-picture-1.png" />
        </div>
        <div className="grid grid-cols-2 flex-1">
          <div>
            <img src="/pics/pembeSandalye.png" />
          </div>
          <div>
            <img src="/pics/pembeSandalye.png" />
          </div>
          <div>
            <img src="/pics/pembeSandalye.png" />
          </div>
          <div>
            <img src="/pics/pembeSandalye.png" />
          </div>
        </div>
      </div>
    </>
  );
};
