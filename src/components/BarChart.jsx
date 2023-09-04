

'use client' // if you use app dir, don't forget this line

import dynamic from "next/dynamic";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });
 // Use dynamic import
import { TotalRevenueOptions, TotalRevenueSeries } from "@/utils/dummy";


export const BarChart = () => {
  return (
    <div className="w-full h-72">
      
        <ApexChart
          type="bar"
          series={TotalRevenueSeries}
          options={TotalRevenueOptions}
          height={240}
          style={{ width: "100%" }}
        />
    </div>
  );
};

export default BarChart;
