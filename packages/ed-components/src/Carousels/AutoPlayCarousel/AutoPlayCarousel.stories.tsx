import { ComponentMeta, ComponentStory } from "@storybook/react";
import AutoPlayCarousel from "./AutoPlayCarousel";
import { SwiperSlide } from "swiper/react";
import { Avatar } from "../..";
import { Theme } from "@eduact/student-theme";
export default {
  title: "Carousels/AutoPlay",
  component: AutoPlayCarousel,
  argTypes: {},
} as ComponentMeta<typeof AutoPlayCarousel>;

export const AutoPlayCarouselDefault: ComponentStory<typeof AutoPlayCarousel> =
  (args) => {
    return (
      <AutoPlayCarousel
        loop
        slidesPerGroup={2}
        breakpoints={{
          [Theme.breakpointsInPx.md]: { slidesPerGroup: 3, slidesPerView: 3 },
          [Theme.breakpointsInPx.lg]: { slidesPerGroup: 7, slidesPerView: 7 },
        }}
        slidesPerView={2}
        {...args}
      >
        <AutoPlayCarousel.Item>
          <Avatar
            img="https://source.unsplash.com/featured/300x201"
            avatarSize={"large"}
          />
        </AutoPlayCarousel.Item>
        <SwiperSlide>
          <Avatar background="dark" avatarSize={"large"} />
        </SwiperSlide>
        <SwiperSlide>
          <Avatar background="darkSilver" avatarSize={"large"} />
        </SwiperSlide>
        <SwiperSlide>
          <Avatar background="maxBluePurple" avatarSize={"large"} />
        </SwiperSlide>
        <SwiperSlide>
          <Avatar background="princetonOrange" avatarSize={"large"} />
        </SwiperSlide>
        <SwiperSlide>
          <Avatar background="purple" avatarSize={"large"} />
        </SwiperSlide>
        <SwiperSlide>
          <Avatar background="red" avatarSize={"large"} />
        </SwiperSlide>
        <SwiperSlide>
          <Avatar
            img="https://source.unsplash.com/featured/300x201"
            avatarSize={"large"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Avatar background="dark" avatarSize={"large"} />
        </SwiperSlide>
        <SwiperSlide>
          <Avatar background="darkSilver" avatarSize={"large"} />
        </SwiperSlide>
        <SwiperSlide>
          <Avatar background="maxBluePurple" avatarSize={"large"} />
        </SwiperSlide>
        <SwiperSlide>
          <Avatar background="princetonOrange" avatarSize={"large"} />
        </SwiperSlide>
        <SwiperSlide>
          <Avatar background="purple" avatarSize={"large"} />
        </SwiperSlide>
        <SwiperSlide>
          <Avatar background="red" avatarSize={"large"} />
        </SwiperSlide>
        <SwiperSlide>
          <Avatar
            img="https://source.unsplash.com/featured/300x201"
            avatarSize={"large"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Avatar background="dark" avatarSize={"large"} />
        </SwiperSlide>
        <SwiperSlide>
          <Avatar background="darkSilver" avatarSize={"large"} />
        </SwiperSlide>
        <SwiperSlide>
          <Avatar background="maxBluePurple" avatarSize={"large"} />
        </SwiperSlide>
        <SwiperSlide>
          <Avatar background="princetonOrange" avatarSize={"large"} />
        </SwiperSlide>
        <SwiperSlide>
          <Avatar background="purple" avatarSize={"large"} />
        </SwiperSlide>
        <SwiperSlide>
          <Avatar background="red" avatarSize={"large"} />
        </SwiperSlide>
      </AutoPlayCarousel>
    );
  };
