"use client"; // if you use app dir, don't forget this line

import dynamic from "next/dynamic";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

function DounutChart() {
  let options = {
    labels: ["Basic Tees", "Custom Short Pants", "Super Hoodies"],
    chart: {
      id: "DounutChart",
      // Set a responsive width for the chart
      width: "100%", // This will make the chart scale to the container width

      // Keep the height fixed or adjust it as needed
      height: "200px",

      toolbar: {
        show: false,
      },
      // Change the position of the chart to "top" or "bottom" as needed
      position: "left", // or 'bottom'
    },
    legend: {
      show: true,
      // Align the legend to the "start", "center", or "end" as needed
      horizontalalign: "center", // or 'start' or 'end'
      floating: false,
      margin: {
        top: 20, // Adjust the top margin as needed
        bottom: 20, // Adjust the bottom margin as needed
      },
      // Change the position of the legend to "top" or "bottom" as needed
      position: "right", // or 'bottom'
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
            innerHeight: "200px", // Set chart width to 80% for medium-sized screens
          },
        },
      },
      {
        breakpoint: 480,
        options: {
          chart: {
            width: "100%", // Set chart width to 100% for small screens
            innerHeight: "200px", // Set chart width to 80% for medium-sized screens
          },
        },
      },

      {
        breakpoint: 420,
        options: {
          chart: {
            width: "100%",
            padding:0,// Set chart width to 100% for small screens
            innerHeight: "200px", // Set chart width to 80% for medium-sized screens
          },
          legend: {
            show: true,
            // Align the legend to the "start", "center", or "end" as needed
            horizontalalign: "end", // or 'start' or 'end'
            floating: false,
            margin: {
              top: 20, // Adjust the top margin as needed
              bottom: 20, // Adjust the bottom margin as needed
            },
            // Change the position of the legend to "top" or "bottom" as needed
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
