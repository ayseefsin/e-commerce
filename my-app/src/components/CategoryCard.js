import { categorySource } from "./CategorySource";
export const CategoryCard = (category, url) => {
  return (
    <div className="aspect-[1/1] drop-shadow-md flex items-end pl-[2vw] pb-[2vh] overflow-hidden bg-cover bg-[url(https://s3-alpha-sig.figma.com/img/9da5/ab42/c0357746eb27e42fff6279478e2c8a48?Expires=1703462400&Signature=QNKdTbNX6JYJOo25Y2HEz~8CkTD~bM~NWVyWQgTbxiGWj9rv-vVJwuaYl25adhnLvGx-BdeBGIMhS6~Tt88gz5hBkIpoxRE9ftUuoYo547MJj4XEbu0Phi9L8rl6Kl2zajlzwMqTkTh22r7b3Rcs04~dyl-s2y~IASNdkK4S3xpmcLNgdMbTquUAR-5xvGKwahY86U71EKBiZNBlStGGqcesObNGWqDD6mDlgLDUhJH0cWwwycLnF-aMCyAwomNGgxIl7-tlDz8bekhqhYzscJ50ZQ1fQfeO~OnkBMixWiBTxO0gFt5MxusHaRtUN1RpO5VrXCaChECiZDh3aTk8lg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)] ">
      <button className="bg-[#FFFFFF] py-3 w-[12vw] text-base font-bold text-[#252B42]">
        {categorySource[0].category}
      </button>
    </div>
  );
};
