import * as React from "react"
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

// Swiper
import { Navigation, Pagination} from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>
          <StaticImage
            alt="Some description text here"
            src="../images/image1.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <StaticImage
            alt="Some description text here"
            src="../images/image2.jpg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <StaticImage
            alt="Some description text here"
            src="../images/image3.jpg"
          />
        </SwiperSlide>
      </Swiper>
    </Layout>
  );
}

export default IndexPage
