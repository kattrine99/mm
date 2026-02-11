import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { Heading } from '../Heading/Heading';


type Props = {
    images: string[];
    autoplay?: boolean;
    delay?: number;
    title?: string;
    description?: string;
};

export const AppScreensSwiper = ({
    images,
    title = "",
    description = ""
}: Props) => {
    return (
        <section className="w-full flex flex-col justify-center text-center">
            <Heading text={title} level={2} subtext={description} />
            <div className="mt-14">
                <Swiper
                    modules={[Pagination]}
                    centeredSlides
                    loop={true}
                    slidesPerView={5}
                    spaceBetween={55}
                    pagination={{ clickable: true }}
                    className='screensSwiper'
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        640: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 50,
                        },
                    }}
                >
                    {images.map((src, i) => (
                        <SwiperSlide
                            key={i}
                            className='!flex !items-center !justify-center'>
                            <div className='flex max-sm:h-140 max-sm:w-70 justify-center items-center'>
                                <img
                                    src={src}
                                    alt={`screen ${i + 1}`}
                                    className="h-full w-full object-cover flex justify-center slide-image select-none"
                                    draggable={false}
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section >
    );
}
