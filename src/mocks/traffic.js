import { progress } from "../utils";

export const traffic = [
  {
    id: 0,
    product: "Áo Thun Nam Cotton Basic",
    date: "28/11/2024 - 04/12/2024",
    image: "/api/placeholder/400/300",
    image2x: "/api/placeholder/800/600",
    progress: progress(),
    totalVisits: 150000,
    conversionRate: "3.2%",
    items: [
      {
        title: "Google Search",
        color: "#FFBC99",
        counter: 55000,
        width: "35%",
        bounceRate: "45%"
      },
      {
        title: "Facebook Ads",
        color: "#B1E5FC",
        counter: 42000,
        width: "28%",
        bounceRate: "52%"
      },
      {
        title: "Direct Traffic",
        color: "#B5E4CA",
        counter: 35000,
        width: "22%",
        bounceRate: "38%"
      },
      {
        title: "Others",
        color: "#FFD88D",
        counter: 18000,
        width: "15%",
        bounceRate: "48%"
      }
    ],
  },
  {
    id: 1,
    product: "Giày Thể Thao Nike Air Max",
    date: "28/11/2024 - 04/12/2024",
    image: "/api/placeholder/400/300",
    image2x: "/api/placeholder/800/600",
    progress: progress(),
    totalVisits: 220000,
    conversionRate: "4.5%",
    items: [
      {
        title: "Google Search",
        color: "#FFBC99",
        counter: 88000,
        width: "40%",
        bounceRate: "42%"
      },
      {
        title: "Social Media",
        color: "#CABDFF",
        counter: 44000,
        width: "20%",
        bounceRate: "48%"
      },
      {
        title: "Affiliate",
        color: "#B5E4CA",
        counter: 33000,
        width: "15%",
        bounceRate: "35%"
      },
      {
        title: "Email Marketing",
        color: "#B1E5FC",
        counter: 33000,
        width: "15%",
        bounceRate: "40%"
      },
      {
        title: "Others",
        color: "#FFD88D",
        counter: 22000,
        width: "10%",
        bounceRate: "50%"
      }
    ],
    deviceStats: {
      mobile: "65%",
      desktop: "30%",
      tablet: "5%"
    }
  },
  {
    id: 2,
    product: "Túi Xách Nữ Cao Cấp",
    date: "28/11/2024 - 04/12/2024",
    image: "/api/placeholder/400/300",
    image2x: "/api/placeholder/800/600",
    progress: progress(),
    totalVisits: 180000,
    conversionRate: "3.8%",
    items: [
      {
        title: "Instagram Ads",
        color: "#CABDFF",
        counter: 63000,
        width: "35%",
        bounceRate: "46%"
      },
      {
        title: "Google Search",
        color: "#B5E4CA",
        counter: 45000,
        width: "25%",
        bounceRate: "40%"
      },
      {
        title: "Referral",
        color: "#B1E5FC",
        counter: 36000,
        width: "20%",
        bounceRate: "43%"
      },
      {
        title: "Others",
        color: "#FFD88D",
        counter: 36000,
        width: "20%",
        bounceRate: "49%"
      }
    ],
    peakHours: {
      morning: "20%",
      afternoon: "35%",
      evening: "45%"
    }
  }
];