export const Carousel2 = () => {
  return (
    <div className="flex text-[#FFFFFF] bg-[#23856D] text-navText ">
      <div className="flex items-center">
        <i class="fa-solid fa-chevron-left fa-2xl"></i>
      </div>
      <div className="flex md:flex-col md:items-center">
        <div className="flex flex-col gap-[6vh] py-[30vh] px-[10vw] ">
          <div>
            <h4 className="text-xl ">SUMMER 2020</h4>
          </div>
          <div>
            <h1 className="text-6xl font-bold  tracking-[.0125em] ">
              Vita Classic Product
            </h1>
          </div>
          <div>
            <p className="text-sm">
              We know how large objects will act, We know how are objects will
              act, We know
            </p>
          </div>
          <div className="flex items-center gap-[2vw] ">
            <div>
              <h4 className="text-2xl">$16.48</h4>
            </div>
            <div className="flex bg-[#2DC071] rounded-md ">
              <button className="text-sm font-bold px-[3vw] py-[2vh] ">
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
        <div className="w-[30vw] md:w-[70vw] py-[10vh] overflow-hidden h-[85vh] ">
          <img src="/pics/shop-hero-2-png-picture-1.png" />
        </div>
      </div>

      <div className="flex items-center">
        <i class="fa-solid fa-chevron-right fa-2xl"></i>
      </div>
    </div>
  );
};
