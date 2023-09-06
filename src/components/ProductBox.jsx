import React from "react";
import { dummyBoxData } from "@/utils/dummy";
// import User from "../public/totalRevenu.png";
import downArrow from "/public/downArrow.png";
import Image from "next/image";
const ProductBox = ({
  image,
  text,
  bgColor,
  number,
  downArrow,
  percentage,
  //   text = "total like",
  //   number = "$49494949",
  //   percentage = "2.3%",
}) => {
  return (
    <div className="min-w-[17rem] bg-white max-h-[7.5rem] m rounded-xl max-md:min-w-[12rem] max-xl:min-w-[14rem] drop-shadow-2xl">
  <div className="flex flex-col p-4">
    <div>
      <div
        className={`w-8 items-center justify-center flex rounded-full h-8 `}
        style={{ backgroundColor: [bgColor] }}
      >
        <Image src={image} width={18} height={17} className="" alt={'image'} />
      </div>

      <p className="text-xs pt-2">{text}</p>
    </div>
    <div className="flex w-full justify-between items-end">
      <h1 className="font-bold">{number}</h1>
      <div>
        {downArrow && (
          <Image src={downArrow} width={10} height={5} alt={'image'} />
        )}
      </div>
      <div
        className={`bg-[#E9F9EB] min-h-6 min-w-[10%] sm:min-w-[20%] text-xs flex items-end font-semibold text-[#3CC952] rounded-xl p-1`}
      >
        {percentage}
      </div>
    </div>
  </div>
</div>

    // <div className="max-w-[17rem]  bg-white max-h-[7.5rem] m rounded-xl max-sm:min-w-[12rem] max-xl:min-w-[14rem] drop-shadow-2xl">
    // {/* <div className="max-w-[17rem]  bg-white max-h-[7.5rem] m rounded-xl max-sm:min-w-[12rem] max-xl:min-w-[14rem] drop-shadow-2xl"> */}
    //   <div className="flex flex-col p-4 ">
    //     <div>
    //        <div
    //         className={`w-8 items-center justify-center flex rounded-full h-8 `}
    //         style={{ backgroundColor: [bgColor] }}
    //       >
    //         <Image src={image} width={18} height={17} className="" alt={'image'} />
    //       </div>

    //       <p className="text-xs pt-2">{text}</p>
    //     </div>
    //     <div className="flex w-full justify-between items-end">
    //       <h1 className="font-bold">{number}</h1>
    //       <div>
    //         {downArrow &&
    //         <Image src={downArrow} width={10} height={5} alt={'image'} />
    //         }
    //       </div>
    //       <div
    //         className={`bg-[#E9F9EB] min-h-6  min-w-sm text-xs flex items-end font-semibold text-[#3CC952] rounded-xl p-1 `}
    //       >
    //         {percentage}
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default ProductBox;
