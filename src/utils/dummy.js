import TotalLIke from "/public/totalRevenu.png";
import Transaction from "/public/transaction_icon.png";
import Like from "/public/like.png";
import User from "/public/user_icon.png";
import downArrow from "/public/downArrow.png";
export const dummyBoxData = [
  {
    image: TotalLIke,
    bgColor: "#10b981",
    // bgColor: "#10b981",
    text: "Total Revenues",
    number: "$2,129,430",

    downArrow: downArrow,
    percentage: "2.5%",
  },
  {
    image: Transaction,
    bgColor:"#fcd34d",
    text: "Total Transaction",
    number: "1520",

    percentage: "2.5%",
  },
  {
    image: Like,
    bgColor:"#f87171",
    text: "Total Likes",
    number: "9721",

    percentage: "2.5%",
  },
  {
    image: User,
    bgColor: "#818cf8",
    text: "Total Users",
    number: "9721",

    percentage: "2.5%",
  },
];

export const TotalRevenueSeries = [
  {
    name: 'Guest',
    data: [183, 124, 115, 85, 143],
  },
  {
    name: 'User',
    data: [95, 84, 72, 44, 108,],
  },
];

export const TotalRevenueOptions = {
  chart: {
    type: 'bar',
    id: 'BarChart',
    width: '100%',
    toolbar: {
      show: false,
    },
  },
  colors: ['#98D89E', '#EE8484'],
  plotOptions: {
    bar: {
      borderRadius: 4,
      horizontal: false,
      columnWidth: '55%',
    },
  },
  dataLabels: {
    enabled: false,
  },
  grid: {
    show: false,
  },
  stroke: {
    colors: ['transparent'],
    width: 4,
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  },
  yaxis: {
    title: {
      text: '$ (thousands)',
    },
  },
  fill: {
    opacity: 1,
  },
  legend: {
    position: 'top',
    horizontalAlign: 'right',
  },
  tooltip: {
    y: {
      formatter(val) {
        return `$ ${val} thousands`;
      },
    },
  },
};