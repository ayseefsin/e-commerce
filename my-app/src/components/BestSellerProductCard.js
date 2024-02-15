export const BestSellerProductCard = () => {
  return (
    <div className="flex flex-col gap-[2vw] rounded shadow-lg hover:shadow-2xl w-[15vw] md:w-[84vw] pb-[2vw] ">
      <img className=" w-[100%] " src="/pics/pembeSandalye.png" />
      <div className="flex flex-col gap-[1vw] mx-[2vw] ">
        <div>
          <h5>Graphic Design</h5>
        </div>
        <div>
          <h5>English Department</h5>
        </div>
        <div className="flex ">
          <h5>$16.48</h5>
          <h5 className=" text-[#23856D] font-bold ">$16.48</h5>
        </div>
      </div>
    </div>
  );
};
