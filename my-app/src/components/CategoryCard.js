import { categorySource } from "./CategorySource";
export const CategoryCard = (category, url) => {
  return (
    <div className="aspect-[1/1] drop-shadow-md hover:shadow-xl flex items-end pl-[2vw] pb-[2vh] overflow-hidden bg-cover bg-[url(https://s3-alpha-sig.figma.com/img/9da5/ab42/c0357746eb27e42fff6279478e2c8a48?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gzvivBooEZRE3RcCY-zHf6BD1ds~XZrMur036JDiteKCFpxYGSKUC8A2bj~WKL~Jo8Az3y3bzTGafJPJS-NhqtCHvhJcnkxrEVE90P-nQaicVZLoA0W73BejV2COlWvuPp5qWMsRe~g3gsIgrcDW-AK9Hgd6AONfT3yr~3IdVqeYfUO22xsBJcpsKsrnxz4lsO0VdmQo0DV~CvlwmExptwnOh71scwHxSmY6mlEv86yLl7Z92tt3eTpnSJiadkmRsoibdcFuQRbkKMqGxrECP2SDSQIaoVp6lwV812~aqEIDD6BeupQWgCvR~RZ~65Kn0mv3kjiI-GfCt9I2bxpx7w__)] ">
      <button className="bg-[#FFFFFF] py-3 w-[12vw] text-base font-bold text-[#252B42]">
        {categorySource[0].category}
      </button>
    </div>
  );
};
