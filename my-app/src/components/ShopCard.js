export const ShopCard = () => {
  return (
    <div
      style={{
        backgroundImage: `url('./pics/shop-card-img1.jpg')`,
      }}
      className={`w-[25vw] h-[25vw] text-[#FFFFFF] font-navText flex flex-col items-center justify-center  bg-cover `}
    >
      <div className="font-bold">
        <h5>CLOTHS
        </h5>
      </div>
      <div className="text-sm">
        <p>5 Items</p>
      </div>
    </div>
  );
};
