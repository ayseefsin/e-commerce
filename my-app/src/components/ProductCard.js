import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const ProductCard = () => {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:9292/v1/product")
      .then((response) => {
        setProductList(response);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(console.log("process done"));
  }, []);

  return (
    <div className="md:items-center md:justify-center">
      <div className="flex flex-col w-[15vw] md:w-[50vw] md:items-center md:justify-center ">
        <div className="flex justify-center aspect-[1/2] md:aspect-[2/3] drop-shadow-md hover:shadow-xl">
          <Link to="/products/detail">
            <img
              className="object-cover w-full h-full"
              src="https://www.figma.com/file/tXhNJv706AWM0lXlyxLH9l/image/23057910d190d178c2a7b276e896b9d38b982bf6"
            />
          </Link>
        </div>
        <div className="flex flex-col gap-[2vw] ">
          <div className="flex justify-center">
            <h5 className="text-[#252B42] text-center ">Graphic Design</h5>
          </div>
          <div className="flex justify-center">
            <a className="text-[#737373] text-center">English Department</a>
          </div>
          <div className="flex justify-center gap-[0.375em]">
            <div>
              <h5 className="text-[#BDBDBD] font-bold text-base ">$16.90</h5>
            </div>
            <div>
              <h5 className="text-[#23856D] font-bold text-base ">$6.48</h5>
            </div>
          </div>
          <div className="flex gap-[0.375em] justify-center ">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
              >
                <circle cx="8.38461" cy="8" r="8" fill="#23A6F0" />
              </svg>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
              >
                <circle cx="8.46154" cy="8" r="8" fill="#23856D" />
              </svg>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
              >
                <circle cx="8.53846" cy="8" r="8" fill="#E77C40" />
              </svg>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
              >
                <circle cx="8.61538" cy="8" r="8" fill="#252B42" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
