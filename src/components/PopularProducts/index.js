import React, { useState } from "react";
import cn from "classnames";
import styles from "./PopularProducts.module.sass";
import { Link } from "react-router-dom";
import Card from "../Card";
import ModalProduct from "../ModalProduct";

const products = [
    {
      title: "Áo Khoác Da Nam Limited",
      price: "2.490.000₫",
      active: true,
      image: "/api/placeholder/400/300",
      image2x: "/api/placeholder/800/600",
      status: "Còn hàng",
      discount: "20%",
    },
    {
      title: "Túi Xách Nữ Thời Trang",
      price: "890.000₫",
      active: false,
      image: "/api/placeholder/400/300",
      image2x: "/api/placeholder/800/600",
      status: "Hết hàng",
      discount: "15%",
    },
    {
      title: "Giày Sneaker Thể Thao",
      price: "1.290.000₫",
      active: true,
      image: "/api/placeholder/400/300",
      image2x: "/api/placeholder/800/600",
      status: "Còn hàng",
      discount: "30%",
    },
    {
      title: "Đồng Hồ Nam Cao Cấp",
      price: "4.890.000₫",
      active: true,
      image: "/api/placeholder/400/300",
      image2x: "/api/placeholder/800/600",
      status: "Còn hàng",
      discount: "10%",
    },
    {
      title: "Ví Da Thật Handmade",
      price: "790.000₫",
      active: true,
      image: "/api/placeholder/400/300",
      image2x: "/api/placeholder/800/600",
      status: "Còn hàng",
      discount: "25%",
    },
    {
      title: "Dây Chuyền Bạc 925",
      price: "590.000₫",
      active: false,
      image: "/api/placeholder/400/300",
      image2x: "/api/placeholder/800/600",
      status: "Hết hàng",
      discount: "20%",
    },
    {
      title: "Kính Mát Thời Trang",
      price: "450.000₫",
      active: true,
      image: "/api/placeholder/400/300",
      image2x: "/api/placeholder/800/600",
      status: "Còn hàng",
      discount: "35%",
    },
    {
      title: "Thắt Lưng Da Cao Cấp",
      price: "890.000₫",
      active: true,
      image: "/api/placeholder/400/300",
      image2x: "/api/placeholder/800/600",
      status: "Còn hàng",
      discount: "15%",
    }
];

const PopularProducts = ({ className, views }) => {
  const [visibleModalProduct, setVisibleModalProduct] = useState(false);

  return (
    <>
      <Card
        className={cn(styles.card, className)}
        title="Popular products"
        classTitle="title-blue"
      >
        <div className={styles.popular}>
          <div className={styles.head}>
            <div className={styles.stage}>Products</div>
            <div className={styles.stage}>Earning</div>
          </div>
          <div className={styles.list}>
            {products.map(
              (x, index) =>
                views > index && (
                  <div
                    className={styles.item}
                    key={index}
                    onClick={() => setVisibleModalProduct(true)}
                  >
                    <div className={styles.preview}>
                      <img
                        srcSet={`${x.image2x} 2x`}
                        src={x.image}
                        alt="Product"
                      />
                    </div>
                    <div className={styles.title}>{x.title}</div>
                    <div className={styles.details}>
                      <div className={styles.price}>{x.price}</div>
                      {x.active ? (
                        <div className={cn("status-green", styles.status)}>
                          Active
                        </div>
                      ) : (
                        <div className={cn("status-red", styles.status)}>
                          Deactive
                        </div>
                      )}
                    </div>
                  </div>
                )
            )}
          </div>
          <Link
            className={cn("button-stroke", styles.button)}
            to="/products/dashboard"
          >
            All products
          </Link>
        </div>
      </Card>
      <ModalProduct
        visible={visibleModalProduct}
        onClose={() => setVisibleModalProduct(false)}
      />
    </>
  );
};

export default PopularProducts;
