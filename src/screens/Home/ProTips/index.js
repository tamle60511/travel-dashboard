import React, { useState } from "react";
import cn from "classnames";
import styles from "./ProTips.module.sass";
import Card from "../../../components/Card";
import Icon from "../../../components/Icon";
import ModalPreview from "../../../components/ModalPreview";

const tips = [
  {
    title: "Sản phẩm mới ra mắt",
    icon: "schedule",
    statusColor: "purple",
    statusText: "Mới",
    avatar: "/api/placeholder/32/32",
    action: "Xem ngay",
  },
  {
    title: "Hướng dẫn mua sắm",
    icon: "arrow-right",
    statusColor: "green",
    statusText: "Hữu ích",
    avatar: "/api/placeholder/32/32",
    action: "5 phút đọc",
  },
  {
    title: "Ưu đãi độc quyền",
    icon: "gift",
    avatar: "/api/placeholder/32/32",
    action: "Khám phá",
  },
  {
    title: "Flash Sale sắp diễn ra",
    icon: "flash",
    statusColor: "red",
    statusText: "Hot",
    avatar: "/api/placeholder/32/32",
    action: "Sắp diễn ra",
  },
  {
    title: "Chính sách đổi trả",
    icon: "shield",
    statusColor: "green",
    statusText: "Quan trọng",
    avatar: "/api/placeholder/32/32",
    action: "4 phút đọc",
  },
  {
    title: "Thông báo từ Shop",
    icon: "bell",
    avatar: "/api/placeholder/32/32",
    action: "Xem tất cả",
  },
];

const ProTips = ({ className }) => {
  const [visibleModalPreview, setVisibleModalPreview] = useState(false);

  return (
    <>
      <Card
        className={cn(styles.card, className)}
        title="Pro tips"
        classTitle="title-green"
      >
        <div className={styles.tips}>
          <div className={styles.info}>
            Need some ideas for the next product?
          </div>
          <div className={styles.list}>
            {tips.map((x, index) => (
              <div
                className={styles.item}
                key={index}
                onClick={() => setVisibleModalPreview(true)}
              >
                <div className={styles.icon}>
                  <Icon name={x.icon} size="24" />
                </div>
                <div className={styles.details}>
                  <div className={styles.title}>{x.title}</div>
                  <div className={styles.line}>
                    {x.statusText && (
                      <div
                        className={cn(
                          { "status-purple": x.statusColor === "purple" },
                          { "status-green-dark": x.statusColor === "green" },
                          { "status-red-dark": x.statusColor === "red" },
                          styles.status
                        )}
                      >
                        {x.statusText}
                      </div>
                    )}
                    <div className={styles.user}>
                      <div className={styles.avatar}>
                        <img src={x.avatar} alt="Avatar" />
                      </div>
                      <div className={styles.action}>{x.action}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Card>
      <ModalPreview
        visible={visibleModalPreview}
        onClose={() => setVisibleModalPreview(false)}
        video="/images/content/video.mp4"
        title="Use guidelines"
      />
    </>
  );
};

export default ProTips;
