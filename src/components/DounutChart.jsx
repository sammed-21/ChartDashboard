"use client"; // if you use app dir, don't forget this line

import dynamic from "next/dynamic";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

function DounutChart() {
  let options = {
    labels: ["Basic Tees", "Custom Short Pants", "Super Hoodies"],
    chart: {
      id: "DounutChart",
       width: "100%", 

       height: "200px",

      toolbar: {
        show: false,
      },
       
      position: "left",  
    },
    legend: {
      show: true,
      
      horizontalalign: "center",  
      floating: false,
      margin: {
        top: 20,  
        bottom: 20, 
      },
      position: "right",  
    },
    plotOptions: {
      pie: {
        position: "right",
        labels: {
          width: 100,
          show: true,
          position: "bottom",
        },
        customScale: 0.9,
        position: "left", // Change the position of the pie chart to "left" as needed
      },
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#98D89E", "#EE8484", "#F6DC7D"],

    subtitle: {
      text: "May - June 2021",
      align: "right", // Left-align the subtitle
      margin: 10,
      offsetX: 0, // Set horizontal offset as needed
      offsetY: 0,
      floating: "left",
      style: {
        fontSize: "12px",
        fontWeight: "normal",
        fontFamily: undefined,
        color: "gray",
      },
    },
    padding: {
      top: "30px",
      left: "30px",
    },
    stroke: {
      show: true,
      curve: "round",
      lineCap: "",
      borderRadius: "5px",
    },
    responsive: [
      {
        breakpoint: 660,
        options: {
          chart: {
            width: "80%",
            innerHeight: "200px", 
          },
        },
      },
      {
        breakpoint: 480,
        options: {
          chart: {
            width: "100%", 
            innerHeight: "200px",
          },
        },
      },

      {
        breakpoint: 420,
        options: {
          chart: {
            width: "100%",
            padding:0,
            innerHeight: "200px",
          },
          legend: {
            show: true,
            
            horizontalalign: "end", 
            floating: false,
            margin: {
              top: 20, 
              bottom: 20,  
            },
            
            position: "bottom", // or 'bottom'
          },
        },
      },
    ],
  };
  let series = [23, 34, 12];

  return (
    <>
      <div className="max-sm:py-10  ">
        <ApexChart
          type="donut"
          width={500}
          height={200}
          options={options}
          series={series}
        />
      </div>
    </>
  );
}
export default DounutChart;
