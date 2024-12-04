import { progress } from "../utils";

export const market = [
  {
    id: 0,
    product: "Áo Thun Nam Cotton Basic",
    category: "Thời trang nam",
    image: "/api/placeholder/400/300",
    image2x: "/api/placeholder/800/600",
    status: true,
    price: 199000,
    sales: 1200,
    balance: 37.8,
    views: 79850,
    viewsPercent: progress(),
    likesPercent: progress(),
    likes: 2341,
    inventory: 500,
  },
  {
    id: 1,
    product: "Túi Xách Nữ Thời Trang",
    category: "Phụ kiện nữ",
    image: "/api/placeholder/400/300",
    image2x: "/api/placeholder/800/600",
    status: false,
    price: 449000,
    sales: 732,
    balance: 27.5,
    views: 30432,
    viewsPercent: progress(),
    likesPercent: progress(),
    likes: 1247,
    inventory: 150,
  },
  // Thêm các sản phẩm khác tương tự...
];

export const released = [
  {
    id: 0,
    product: "Điện Thoại Samsung Galaxy S24",
    category: "Điện thoại & Máy tính bảng",
    image: "/api/placeholder/400/300",
    image2x: "/api/placeholder/800/600",
    price: 22990000,
    status: true,
    ratingValue: 4.8,
    ratingCounter: 187,
    sales: 320,
    balance: 55.8,
    views: 147850,
    viewsPercent: progress(),
    releaseDate: "01/12/2024",
    preOrder: true,
  },
  {
    id: 1,
    product: "Laptop Gaming Asus ROG 2024",
    category: "Máy tính & Laptop",
    image: "/api/placeholder/400/300",
    image2x: "/api/placeholder/800/600",
    price: 32990000,
    status: true,
    ratingValue: 4.9,
    ratingCounter: 67,
    sales: 150,
    balance: 42.5,
    views: 98500,
    viewsPercent: progress(),
    releaseDate: "28/11/2024",
    preOrder: false,
  },
  
];