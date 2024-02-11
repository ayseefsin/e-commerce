import { Link } from "react-router-dom";

export const NavLight = () => {
  return (
    <div className="flex bg-[#FFF] font-navText justify-between items-center px-[.5vw] py-[0.35rem] mx-[4vw] ">
      <div className="flex items-center text-[2vw] font-bold text-[#252B42] h-[3.625rem] py-[1vw]  pr-[12vw] tracking-[.00625em] ">
        <h3>Bandage</h3>
        <div className="flex gap-[2vw] h-[3.625rem] justify-center items-center pl-[4vw] py-[1vw] text-[#737373] text-[.9vw] font-bold font-navText tracking-[.0125em]">
          <div>
            <Link to="/">Home</Link>
          </div>
          <div className="flex items-center">
            <Link to="/products" className="font-medium text-[#252B42]">
              Shop
            </Link>
            <i class="fa-solid fa-angle-down"></i>
          </div>
          <div>
            <Link to="/about">About</Link>
          </div>
          <div>
            <Link to="/team">Team</Link>
          </div>
          <div>
            <a>Contact</a>
          </div>
        </div>
      </div>
      <div className="flex items-center h-[3.625rem]">
        <div className="flex text-main-blue font-bold text-[1vw] items-center gap-[5vw]">
          <div className="flex gap-[1vw]">
            <i class="fa-regular fa-user"></i>
            <a>Login</a>
            <p>/</p>
            <a>Register</a>
          </div>
          <div className="flex text-[1vw] items-center gap-[2vw] ">
            <div className="flex">
              <i class="fa-solid fa-magnifying-glass"></i>
            </div>
            <div className="flex">
              <i class="fa-solid fa-cart-shopping"></i>
              <p>1</p>
            </div>
            <div className="flex">
              <i class="fa-regular fa-heart"></i>
              <p>1</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
