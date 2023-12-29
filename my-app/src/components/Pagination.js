export const Pagination = () => {
  return (
    <div className="text-xs flex justify-center items-center py-[25px] font-bold font-navText">
      <div className="shadow-lg hover:shadow-2xl hover:text-[#cfcfcf] border-solid border-2 rounded-l-[5px] border-[#BDBDBD] bg-[#F3F3F3]] text-[#BDBDBD] px-[25px] py-[25px]">
        <a>First</a>
      </div>
      <div className="shadow-lg hover:shadow-2xl hover:text-[#72c0ed] border-solid border-2  border-[#BDBDBD]  bg-[#FFF] text-[#23A6F0] px-[20px] py-[25px]">
        <a>1</a>
      </div>
      <div className="shadow-lg hover:shadow-2xl hover:text-[#dadada] border-solid border-2  border-[#BDBDBD]  bg-[#23A6F0] text-[#FFFFFF] px-[20px] py-[25px]">
        <a>2</a>
      </div>
      <div className="shadow-lg hover:shadow-2xl hover:text-[#72c0ed] border-solid border-2  border-[#BDBDBD]  bg-[#FFF] text-[#23A6F0] px-[20px] py-[25px]">
        <a>3</a>
      </div>
      <div className="shadow-lg hover:shadow-2xl hover:text-[#72c0ed] border-solid border-2 rounded-r-[5px] border-[#BDBDBD]  bg-[#FFF] text-[#23A6F0] px-[25px] py-[25px]">
        <a>Next</a>
      </div>
    </div>
  );
};
