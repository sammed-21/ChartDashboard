
'use client' // if you use app dir, don't forget this line

import dynamic from "next/dynamic";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

function DounutChart() {
 
  let options = {

    labels: ["Basic Tees", "Custom Short Pants", "Super Hoodies"],
    chart: {
      id: 'DounutChart',
      height: "400",
      width: "400",
    },
    bar: {
      borderRadius:"rounded"
    }, 
    title: {
      text: "Top Product",
      align: "left", // Left-align the chart title
      offsetX: 0, // Set horizontal offset as needed
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    plotOptions: {
      pie: {
        labels: {
          width: 100,
          show: true,
          float: 'right',
        
          position: "bottom", // Align labels at the bottom of the chart
        },
        customScale: 0.7,
      },
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#98D89E", "#EE8484", "#F6DC7D"],
    style: {
      borderRadius: "10px",
    },
    background: {
      width: "100%",
      borderRadius: 10,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    subtitle: {
      text: "May - June 2021",
      align: "right", // Left-align the subtitle
      margin: 10,
      offsetX: 0, // Set horizontal offset as needed
      offsetY: 0,
      floating: 'left',
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
      lineCap: '',
      borderRadius: "5px",
  
      
  },
    responsive: [
      {
        breakpoint: 300, // Adjust this breakpoint as needed
        options: {
          legend: {
            enabled:false
          },
          chart: {
            width: "100%", // Set 100% width for mobile screens
            height: "100%", // Adjust the height as needed
            padding: {
              top: "10px", // Adjust padding for mobile screens
              left: "10px", // Adjust padding for mobile screens
            },
          },
        },
      }
    ]
  }
  let series = [23, 34, 12];

  return (
    <>
      <div className="w-full overflow-hidden relative  justify-between items-right py-3 px-3 max-md:h-[9rem] ">
      <ApexChart type="donut" height={200} width={400} options={options} series={series} />
      </div>
    </>
  );
}
export default DounutChart;
