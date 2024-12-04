import { progress } from "../utils";

export const viewers = [
  {
    id: 0,
    product: "Áo Thun Nam Cotton Basic",
    date: "28/11/2024 - 04/12/2024",
    image: "/api/placeholder/400/300",
    image2x: "/api/placeholder/800/600",
    progress: progress(),
    totalViews: 55000,
    conversionRate: "2.8%",
    items: [
      {
        title: "Khách hàng thân thiết",
        color: "#B5E4CA",
        counter: 22000,
        width: "40%",
        averageTime: "4:30",
        purchaseRate: "3.5%"
      },
      {
        title: "Khách mới",
        color: "#CABDFF",
        counter: 33000,
        width: "60%",
        averageTime: "2:45",
        purchaseRate: "1.8%"
      }
    ],
    engagement: {
      addToCart: 2800,
      wishlist: 1500,
      reviews: 320
    }
  },
  {
    id: 1,
    product: "Giày Thể Thao Nike Air Max",
    date: "28/11/2024 - 04/12/2024",
    image: "/api/placeholder/400/300",
    image2x: "/api/placeholder/800/600",
    progress: progress(),
    totalViews: 78000,
    conversionRate: "3.2%",
    items: [
      {
        title: "Khách hàng thân thiết",
        color: "#B5E4CA",
        counter: 46800,
        width: "60%",
        averageTime: "5:15",
        purchaseRate: "4.2%"
      },
      {
        title: "Khách mới",
        color: "#CABDFF",
        counter: 31200,
        width: "40%",
        averageTime: "3:20",
        purchaseRate: "2.1%"
      }
    ],
    engagement: {
      addToCart: 3900,
      wishlist: 2200,
      reviews: 450
    }
  },
  {
    id: 2,
    product: "Túi Xách Nữ Cao Cấp",
    date: "28/11/2024 - 04/12/2024",
    image: "/api/placeholder/400/300",
    image2x: "/api/placeholder/800/600",
    progress: progress(),
    totalViews: 45000,
    conversionRate: "2.5%",
    items: [
      {
        title: "Khách hàng thân thiết",
        color: "#B5E4CA",
        counter: 20250,
        width: "45%",
        averageTime: "4:50",
        purchaseRate: "3.8%"
      },
      {
        title: "Khách mới",
        color: "#CABDFF",
        counter: 24750,
        width: "55%",
        averageTime: "3:10",
        purchaseRate: "1.5%"
      }
    ],
    engagement: {
      addToCart: 2200,
      wishlist: 1800,
      reviews: 280
    },
    demographics: {
      gender: {
        female: "75%",
        male: "25%"
      },
      ageGroups: {
        "18-24": "15%",
        "25-34": "45%",
        "35-44": "30%",
        "45+": "10%"
      }
    }
  }
];