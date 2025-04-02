import Image from "next/image";
import { LeftIcon, RightIcon } from "@icons";
import { Frame } from "@components/common";
import { ResponsiveType } from "@types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Controller, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "@styles/responsive-swiper.css";

type ImageListProps ={
  data: ImageProps[];
}

type ImageProps = {
  src: string;
  alt: string
};

export default function ResponsiveSwiper({
                                           data,
                                         }: ImageListProps&ResponsiveType) {
  return (
    <>
      <div className="_responsive-swiper-wrapper">
        <Swiper
            modules={[Controller, Navigation, Pagination]}
          className="_responsive-swiper"
          wrapperTag="ul"
          slidesPerView={"auto"}
          pagination={{
            type: "fraction",
          }}
          navigation={{
            prevEl: "._btn-prev",
            nextEl: "._btn-next",
          }}
        >
          {data?.map((image: ImageProps) => {
            const { src, alt } = image;
            return (
              <SwiperSlide
                tag="li"
                key={src}
              >
                <Frame>
                  <Image
                    src={src}
                    alt={alt}
                    unoptimized={true}
                    fill
                  />
                </Frame>
              </SwiperSlide>
            );
          })}
        </Swiper>

        <button
          type="button"
          className="_btn-prev"
          aria-label="이전 슬라이드 보기"
        >
          <Image
            src={LeftIcon}
            alt="좌측 화살표 아이콘"
            width={24}
            height={24}
          />
        </button>
        <button
          type="button"
          className="_btn-next"
          aria-label="다음 슬라이드 보기"
        >
          <Image
            src={RightIcon}
            alt="우측 화살표 아이콘"
            width={24}
            height={24}
          />
        </button>
      </div>
    </>
  );
}
