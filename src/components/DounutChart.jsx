
'use client' // if you use app dir, don't forget this line

import dynamic from "next/dynamic";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

function DounutChart() {
 
  let options = {
    labels: ["Basic Tees", "Custom Short Pants", "Super Hoodies"],
    chart: {
      id: 'DounutChart',
      width: '200px',
      height: '200px',
      toolbar: {
        show: false,
      },
    },
    legend: {
      show: true,
      position: 'top', // Position the legend at the bottom
      horizontalAlign: 'right', // Center-align the legend horizontally
      floating: false,
      margin: {
        top: 10, // Adjust the top margin as needed
        bottom: 10, // Adjust the bottom margin as needed
      },
    },
    plotOptions: {
      pie: {
        position:"right",
        labels: {
          width: 100,
          show: true,
          position: "bottom",
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
        breakpoint: 660, // Adjust this breakpoint as needed
        options: {
          height:"100px",
          legend: {
            enabled:false
          },    subtitle: {
            text: "May - June 2021",
            align: "right", // Left-align the subtitle
            margin: 10,
            offsetX: 0, // Set horizontal offset as needed
            offsetY: 0,
            floating: 'right',
            
            style: {
              fontSize: "12px",
              fontWeight: "normal",
              fontFamily: undefined,
              color: "gray",
            },
          },
          chart: {
            width: "100%", // Set 100% width for mobile screens
            height: "100%",
            legend: {
              enabled:false
            },
            // Adjust the height as needed
            padding: {
              top: "80px", // Adjust padding for mobile screens
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
      <div className=" ">
      <ApexChart type="donut" width={500} height={200}  options={options} series={series} />
      </div>
    </>
  );
}
export default DounutChart;
