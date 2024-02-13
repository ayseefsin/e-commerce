export const FooterInput = () => {
  return (
    <div className="flex flex-col items-start gap-5">
      <h5 className="text-[#252B42] py-[1rem]  font-bold text-base">
        Get In Touch
      </h5>
      <div className="flex">
        <input placeholder="Your e-mail" type="text"></input>
        <button className="md:px-[5vw] rounded-md text-sm px-12 py-6 bg-[#23A6F0] font-bold text-[#FFF]">
          Subscribe
        </button>
      </div>
      <p className="text-[#737373]">Lore imp sum dolor Amit</p>
    </div>
  );
};
