export const ProductListPageNav = () => {
  return (
    <div className="md:flex-col md:gap-[10vw] flex items-center justify-between px-[4vw] font-bold text-[#252B42] text-base font-navText py-[2vw] bg-[#FAFAFA] ">
      <div className="text-2xl   tracking-[.00625em]">
        <h3>Shop</h3>
      </div>
      <div className="flex items-center gap-3 tracking-[.0125em] ">
        <a>Home</a>
        <i class="fa-solid fa-chevron-right"></i>
        <h6 className="text-[#BDBDBD]">Shop</h6>
      </div>
    </div>
  );
};
