
'use client' // if you use app dir, don't forget this line

import dynamic from "next/dynamic";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

function DounutChart() {
 
  let options = {

    labels: ["Basic Tees", "Custom Short Pants", "Super Hoodies"],
    chart: {
      id: 'DounutChart',
      width: '200px',
  height: '200px'
    },legend: {floating: true} ,
    bar: {
      borderRadius:"rounded"
    }, 
    title: {
      text: "Top Product",
      align: "left", // Left-align the chart title
      offsetX: 0, // Set horizontal offset as needed
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
