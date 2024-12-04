import { progress } from "../utils";

export const posts = [
  {
    title: 'FLASH SALE CUỐI NĂM 🔥 Giảm đến 70% toàn bộ sản phẩm',
    description: 'Săn deal 12.12 siêu hời - Freeship toàn quốc - Voucher giảm thêm 100K',
    image: "/api/placeholder/400/300",
    image2x: "/api/placeholder/800/600",
    type: "promotion",
    schedule: "2024-12-12",
    distribution: 1.2,
    socials: [
      {
        title: "facebook",
        url: "https://www.facebook.com/shop",
      },
      {
        title: "tiktok",
        url: "https://www.tiktok.com/@shop",
      },
    ],
    linkClicks: {
      counter: 2600,
      balance: 37.8,
      progress: progress(),
    },
    views: {
      counter: 25600,
      balance: 17.8,
      progress: progress(),
    },
    engagement: {
      counter: 1500,
      balance: 22.5,
      progress: progress(),
    },
    products: [
      {
        id: "SP001",
        name: "Áo Thun Nam",
        discount: 50
      },
      {
        id: "SP002",
        name: "Váy Đầm Nữ",
        discount: 70
      }
    ]
  },
  {
    title: 'Bộ sưu tập mới WINTER 2024 đã về 🎄',
    description: 'BST với hơn 100 mẫu thời trang mới nhất cho mùa đông năm nay',
    image: "/api/placeholder/400/300",
    image2x: "/api/placeholder/800/600",
    type: "new_collection",
    video: true,
    distribution: 1.6,
    socials: [
      {
        title: "facebook",
        url: "https://www.facebook.com/shop",
      },
      {
        title: "instagram",
        url: "https://www.instagram.com/shop",
      }
    ],
    linkClicks: {
      counter: 1600,
      balance: 24.5,
      progress: progress(),
    },
    views: {
      counter: 33400,
      balance: 28.8,
      progress: progress(),
    },
    engagement: {
      counter: 1500,
      balance: 12.9,
      progress: progress(),
    },
    products: [
      {
        id: "SP003",
        name: "Áo Khoác Dạ",
        newPrice: 899000
      },
      {
        id: "SP004",
        name: "Quần Len",
        newPrice: 499000
      }
    ]
  },
  {
    title: 'Chương trình "Khách hàng thân thiết" 💝',
    description: 'Tích điểm gấp đôi - Đổi quà không giới hạn từ 1/12 - 31/12',
    image: "/api/placeholder/400/300",
    image2x: "/api/placeholder/800/600",
    type: "loyalty",
    distribution: 1.5,
    socials: [
      {
        title: "facebook",
        url: "https://www.facebook.com/shop",
      },
      {
        title: "zalo",
        url: "https://zalo.me/shop",
      }
    ],
    linkClicks: {
      counter: 1230,
      balance: 14.5,
      progress: progress(),
    },
    views: {
      counter: 9800,
      balance: 12.8,
      progress: progress(),
    },
    engagement: {
      counter: 2500,
      balance: 18.2,
      progress: progress(),
    },
    rewards: [
      {
        points: 1000,
        gift: "Voucher 100K"
      },
      {
        points: 2000,
        gift: "Voucher 250K"
      }
    ]
  }
];