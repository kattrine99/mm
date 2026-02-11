import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { Button } from '../Button/Button';
import type { ReactNode } from 'react';
import { useTranslation } from "react-i18next";

interface BusinessProps {
    title_right?: string;
    title_left?: string;
    description?: string;
    paragraph?: ReactNode;
}
export const BusinessSwiper = ({ title_right, title_left, description, paragraph }: BusinessProps) => {
    const { t } = useTranslation();
    const buttons = t("buttons", { returnObjects: true }) as string[];
    const slides = t("businessSwiper.items", { returnObjects: true }) as {
        title: string;
        category: string;
        image: string;
    }[];
    if (!Array.isArray(slides)) {
        console.error("businessSwiper.items не является массивом", slides);
        return null;
    }
    return (
        <div className="px-4 sm:px-6 md:px-8 min-[1060px]:px-10 xl:px-15 2xl:px-25 py-[clamp(60px,6vw,200px)] flex max-[1060px]:flex-col gap-7.5">
            <div className="flex flex-col flex-1 justify-between bg-[url('/images/bg-3.png')] bg-no-repeat bg-cover shadow-[0px_4px_12px_0px_rgba(131,139,180,0.16)] rounded-2xl p-6 ">
                <div>
                    <h2 className="text-[#1C1917] text-[clamp(32px,5vw,40px)] font-bold leading-[120%]">{title_left}<span className="text-[#0088E7]">{description}</span> {title_right}</h2>
                    <div className="text-lg leading-[130%] text-[#6A6A6A] py-4">{paragraph}</div>
                </div>
                <div className="flex gap-4 flex-wrap max-[480px]:grid  grid-cols-2">
                    {buttons.map((button, i) => {
                        return (
                            <div key={i}>
                                <Button className="mt-auto bg-[#0088E7] max-[480px]:w-full text-white text-[16px] leading-[120%] font-medium py-3 px-[clamp(15px,4vw,32px)] rounded-full w-fit">
                                    {button}
                                </Button>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="flex flex-0.5">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={20}
                    loop={true}
                    speed={1000}
                    modules={[Pagination]}
                    pagination={{ clickable: true }}
                    className="businessSwiper px-0 max-w-112.5 max-[1060px]:max-w-full shadow-[0px_4px_12px_0px_rgba(131,139,180,0.16)] rounded-2xl p-6"
                >
                    {slides.map((s, i) => (
                        <SwiperSlide key={i}>
                            <div className="flex flex-col max-[1060px]:items-center p-8 gap-6">
                                <div className="w-[clamp(14rem, 40vw, 23.9375rem)] h-105">
                                    <img src={s.image} className="w-full h-full object-cover rounded-2xl" />
                                </div>
                                <div className="flex flex-col gap-3">
                                    <h3 className="font-medium text-xl text-[#1C1917] leading-[120%]">{s.title}</h3>
                                    <p className="text-lg text-[#6A6A6A] leading-[130%]">{s.category}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}
