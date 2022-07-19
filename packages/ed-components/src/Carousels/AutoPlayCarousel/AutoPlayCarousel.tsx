import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Controller,
  A11y,
  Navigation,
  Pagination,
  Scrollbar,
  Swiper as SwiperClass,
} from "swiper";

import { NavIcon } from "../Carousels.styled";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import { FlexLayout } from "@eduact/ed-system";
import { AutoPlayCarouselProps } from "./AutoPlayCarousel.types";
import './Swiper.css'
interface AutoPlayCarouselComposition {
  Item: typeof SwiperSlide;
}

const AutoPlayCarousel: React.FC<AutoPlayCarouselProps> &
  AutoPlayCarouselComposition = ({
  children,
  withArrows = true,
  arrowColor = "primary",
  ...props
}) => {
  const [controller, setController] = useState<SwiperClass | undefined>();

  const handleNext = () => {
    if (controller) {
      controller.slideNext();
    }
  };
  const handlePrev = () => {
    if (controller) {
      controller.slidePrev();
    }
  };

  return (
    <FlexLayout alignItems={"center"}>
      {withArrows && (
        <NavIcon onClick={handlePrev} color={arrowColor}>
          <IoIosArrowDropleftCircle />
        </NavIcon>
      )}
      <Swiper
        updateOnWindowResize
        observer
        observeParents
        onSwiper={setController}
        modules={[Navigation, Pagination, Scrollbar, A11y, Controller]}
        {...props}
      >
        {children}
      </Swiper>
      {withArrows && (
        <NavIcon onClick={handleNext} color={arrowColor}>
          <IoIosArrowDroprightCircle />
        </NavIcon>
      )}
    </FlexLayout>
  );
};
AutoPlayCarousel.Item = SwiperSlide;
export default AutoPlayCarousel;
