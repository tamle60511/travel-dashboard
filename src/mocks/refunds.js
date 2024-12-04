export const refunds = [
  {
    id: 0,
    product: "Áo Khoác Nam Denim Classic",
    category: "Thời trang nam",
    image: "/api/placeholder/400/300",
    image2x: "/api/placeholder/800/600",
    status: "Đã duyệt",
    date: "04/12/2024",
    customer: "Nguyễn Văn Minh",
    avatar: "/api/placeholder/32/32",
    parameters: [
      {
        title: "Ngày yêu cầu",
        content: "03/12/2024",
      },
      {
        title: "Lý do",
        content: "Sản phẩm không đúng size",
      },
      {
        title: "Đã nhận hàng",
        receivedStatus: true,
        receivedValue: true,
      },
      {
        title: "Ngày mua hàng",
        content: "01/12/2024",
      },
      {
        title: "Mã đơn hàng",
        content: "DH123456789",
      },
      {
        title: "Mã yêu cầu",
        content: "RF123456789",
      },
      {
        title: "Phí vận chuyển",
        tooltip: "Phí vận chuyển không được hoàn trả",
        price: 30000,
      },
      {
        title: "Số tiền hoàn trả",
        tooltip: "Đã trừ phí vận chuyển",
        price: 619000,
      },
    ],
    returnMethod: "Hoàn tiền vào ví điện tử",
    returnStatus: "Đã hoàn tiền",
  },
  {
    id: 1,
    product: "Giày Thể Thao Nike Air Max",
    category: "Giày dép",
    image: "/api/placeholder/400/300",
    image2x: "/api/placeholder/800/600",
    status: "Đang xử lý",
    date: "03/12/2024",
    customer: "Trần Thị Hương",
    avatar: "/api/placeholder/32/32",
    parameters: [
      {
        title: "Ngày yêu cầu",
        content: "02/12/2024",
      },
      {
        title: "Lý do",
        content: "Sản phẩm bị lỗi",
      },
      {
        title: "Đã nhận hàng",
        receivedStatus: true,
        receivedValue: true,
      },
      {
        title: "Ngày mua hàng",
        content: "01/12/2024",
      },
      {
        title: "Mã đơn hàng",
        content: "DH123456790",
      },
      {
        title: "Mã yêu cầu",
        content: "RF123456790",
      },
      {
        title: "Phí vận chuyển",
        tooltip: "Phí vận chuyển được hoàn trả do lỗi sản phẩm",
        price: 40000,
      },
      {
        title: "Số tiền hoàn trả",
        tooltip: "Hoàn trả toàn bộ bao gồm phí vận chuyển",
        price: 2290000,
      },
    ],
    returnMethod: "Hoàn tiền vào tài khoản ngân hàng",
    returnStatus: "Chờ xác nhận",
    images: [
      "/api/placeholder/400/300",
      "/api/placeholder/400/300"
    ]
  }
];