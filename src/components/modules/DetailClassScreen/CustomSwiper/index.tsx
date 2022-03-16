import React from "react";
import Swiper from "react-native-swiper";

import styles from "./styles";
import theme from "Theme";

type CustomSwiperProps = {
  // id: string | number;
  children: React.ReactNode
}

const CustomSwiper = ({ children }: CustomSwiperProps) => {
  return (
    <Swiper
      style={styles.carouselContainer}
      removeClippedSubviews={false}
      paginationStyle={styles.paginationStyle}
      dotColor={theme.colors.darkGray}
      activeDotColor={theme.colors.white}
      dotStyle={styles.dotStyle}
    >
      {children}
    </Swiper>
  )
}

export default React.memo(CustomSwiper);