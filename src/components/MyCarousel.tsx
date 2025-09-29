import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

import bannerA from "../assets/images/banner.jpg";
import bannerB from "../assets/images/banner1.jpg";

const products = [
    {
        image: bannerA,
        title: "Premium Quality Products",
        description: "Discover our exceptional range of handcrafted items",
    },
    {
        image: bannerB,
        title: "Special Offers",
        description: "Limited time discounts on our most popular products",
    },
];

const MyCarousel = () => {
    return (
        <div className="relative w-full max-w-screen-2xl mx-auto my-6 group">
            <Swiper
                modules={[Autoplay, EffectFade]}
                spaceBetween={0}
                slidesPerView={1}
                effect="fade"
                speed={800}
                autoplay={{
                    delay: 2000,
                }}
                loop={true}
            >
                {products.map((item, index) => (
                    <SwiperSlide key={index}>
                        {/* Responsive container to control height */}
                        <div className="relative w-full h-[220px] sm:h-[300px] md:h-[380px] lg:h-[460px]">
                            <img
                                src={item.image}
                                alt={`Slide ${index + 1}`}
                                style={{ width: "100%", height: "50vh", objectFit: "cover" }}
                                className="absolute inset-0"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Custom Navigation Buttons */}
            <div className="swiper-button-prev !text-white !left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="swiper-button-next !text-white !right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .swiper-pagination { bottom: 12px !important; }
        @media (max-width: 768px) {
          .swiper-button-prev, .swiper-button-next { display: none !important; }
        }
      `}</style>
        </div>
    );
};

export default MyCarousel;
