import React from "react";
import { dummyBoxData } from "@/utils/dummy";
// import User from "../public/totalRevenu.png";
import downArrow from "/public/downArrow.png";
import Image from "next/image";
const ProductBox = ({
  image,
    text,
    bgColor
 
  
  //   text = "total like",
  //   number = "$49494949",
  //   percentage = "2.3%",
}) => {
  return (
    // <div className="min-w-[17.3rem] max-md:w-full bg-slate-50 max-h-[7.5rem] rounded-xl max-sm:min-w-[13rem] drop-shadow-2xl">
      <div className="flex  justify-center items-center gap-2 ">
        {/* <div > */}
           <div
            className={`w-7 items-center justify-center flex rounded-full h-7 `}
            style={{ backgroundColor: [bgColor] }}
          >
            <Image src={image} width={14} height={15} className="" alt={'image'} />
          </div>

          <p className="text-sm font-normal underline pt-2 max-sm:text-xs">{text}</p>
        {/* </div> */}
       
        </div>
    //   </div>
  
  );
};

export default ProductBox;
