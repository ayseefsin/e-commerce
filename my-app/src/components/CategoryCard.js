import { categorySource } from "./CategorySource";
export const CategoryCard = (category, url) => {
  return (
    <div className="aspect-[1/1] drop-shadow-md hover:shadow-xl flex items-end pl-[2vw] pb-[2vh] overflow-hidden bg-cover bg-[url(https://s3-alpha-sig.figma.com/img/9da5/ab42/c0357746eb27e42fff6279478e2c8a48?Expires=1704672000&Signature=KY4bHHt~GW-yWnTRbDwAjxHWthByw2zLM2NXLYY~w13jCz1x19h8cmbYpLY2mtPOCPJ~0My8xZze3SXJ1Vt5j~Sns~yGheKZIwvtgOnRhWKzSqHb-iAJLW1PJJupDeGIJMNXc1FrdUT~nLpOIFF1rjzrxGpFiXhXuUHmTYF2FDPbyJDFV31D797VaZFbg7FNLzXhcCGKmaWRLeLPb-hEYy18VpqmwOVVwNwXe4VC4Y7xX~XKCiqeowM-rGLHDSVwgYmMYG0JezFigirQm-bRPRraDvWsk1J92gbmmkhygr9sPpGShXyplZ5QwvwGFKC4~3raCWplAvudtGSK6Nsbtg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4)] ">
      <button className="bg-[#FFFFFF] py-3 w-[12vw] text-base font-bold text-[#252B42]">
        {categorySource[0].category}
      </button>
    </div>
  );
};
