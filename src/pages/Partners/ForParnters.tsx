import { useNavigate, type To } from "react-router-dom";
import { BlockWindow, Footer, Header, ConnectBusinessModal, Heading, PercentsCards } from "../../components";

import { useState} from "react";
import { useTranslation } from "react-i18next";
import { LuShieldCheck, LuTickets } from "react-icons/lu";

import { RiCoinsLine, RiNumber1, RiNumber2, RiNumber3 } from "react-icons/ri";
import { FiBox, FiMapPin, FiShoppingCart, FiTool, FiTrendingUp } from "react-icons/fi";
import { HiChevronRight } from "react-icons/hi";
import { LuScanLine } from "react-icons/lu";
import { MdOutlinePayments } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";
import { GrTransaction } from "react-icons/gr";
import { PiMapPinAreaLight } from "react-icons/pi";
import { CgSmartphoneChip } from "react-icons/cg";
import { ImProfile } from "react-icons/im";
import { HiOutlineCalendarDays } from "react-icons/hi2";

type PlaceCard = {
    title: string;
    img: string;
};

export const ForParnters = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [formOpen, setFormOpen] = useState(false);
    const [, setSuccessOpen] = useState(false);
    const goto = (nav: To) => {

        return navigate(nav);
    }

    const places = t("forPartners.places.items", { returnObjects: true }) as string[];

    const PLACES: PlaceCard[] = [
    { title: places[0], img: "/images/business.jpg" },
    { title: places[1], img: "/images/house.jpg" },
    { title: places[2], img: "/images/fit.jpg" },
    { title: places[3], img: "/images/factory.jpg" }
    ];
    const timeline = [
        {
            day: t("forPartners.timeline.items.0.day"),
            title: t("forPartners.timeline.items.0.title"),
            desc: t("forPartners.timeline.items.0.desc"),
            bullets: [
            { icon: <FiTool className="w-5 h-5" />, text: t("forPartners.timeline.items.0.bullets.0") },
            { icon: <FiBox className="w-5 h-5" />, text: t("forPartners.timeline.items.0.bullets.1") },
            ],
        },
        {
            day: t("forPartners.timeline.items.1.day"),
            title: t("forPartners.timeline.items.1.title"),
            desc: t("forPartners.timeline.items.1.desc"),
            bullets: [{ icon: <FiMapPin className="w-5 h-5" />, text: t("forPartners.timeline.items.1.bullets.0") }],
        },
        {
            day: t("forPartners.timeline.items.2.day"),
            title: t("forPartners.timeline.items.2.title"),
            desc: t("forPartners.timeline.items.2.desc"),
            bullets: [{ icon: <FiTrendingUp className="w-5 h-5" />, text: t("forPartners.timeline.items.2.bullets.0") }],
        },
        ];
    return (
        <div>
            {/* модалки */}
            <ConnectBusinessModal
                open={formOpen}
                onClose={() => setFormOpen(false)}
                onSuccess={() => {
                    setSuccessOpen(true);
                }}
            />
            <Header />
            <BlockWindow
                heading={<>
                    {t("forPartners.hero.title_prefix")} {""}
                    <span className="text-[#0088E7]">{t("forPartners.hero.title_country")}</span>
                    
                </>}
                text={t("aboutPlatform.hero.subtitle")}
                buttonText1={t('aboutPlatform.hero.btn1')}
                buttonGoTo1={() => setFormOpen(true)}
                buttonText2={t("forPartners.hero.btn2")}
                buttonGoTo2={() => goto("/about_platform")} 
                imgURL={"/images/mm-bg.png"} 
                styleClass="bg-cover bg-right"/>

            <div className="px-6 md:px-8 min-[1060px]:px-10 xl:px-15 2xl:px-25 pt-[clamp(40px,6vw,200px)]">
                <Heading text={t("forPartners.whyNow.title")} level={2} subtext={t("forPartners.whyNow.subtitle")} />
                <div className="flex flex-col gap-10 pt-[clamp(32px,_3.5vw,_48px)] ">
                    <div className="group flex flex-col sm:flex-row items-start sm:items-center gap-6 shadow-[0px_4px_12px_0px_rgba(131,139,180,0.16)] hover:scale-[1.005] duration-300 hover:shadow-[0px_6px_15px_0px_rgba(23,84,241,0.16)] rounded-2xl p-6">
                        <div className="flex items-center justify-center bg-[#ECF7FE] rounded-full p-4 ">
                            <RiNumber1 className="text-white group-hover:text-[#1754F1] group-active:text-[#1754F1] duration-500 w-10 h-10 sm:w-15 sm:h-15"/>
                        </div>
                        <div className="flex flex-col gap-3 items-start max-lg:pl-6 pl-10">
                            <h3 className="text-3xl sm:text-4xl leading-tight font-bold text-[#1754F1]">{t("forPartners.whyNow.items.0.title")}</h3>
                            <p className="text-lg text-[#6A6A6A]">{t("forPartners.whyNow.items.0.desc")}</p>
                        </div>
                    </div>
                    <div className="group flex flex-col sm:flex-row items-start sm:items-center gap-6 shadow-[0px_4px_12px_0px_rgba(131,139,180,0.16)] hover:scale-[1.005] duration-300 hover:shadow-[0px_6px_15px_0px_rgba(23,84,241,0.16)] rounded-2xl p-6">
                        <div className="flex items-center justify-center bg-[#ECF7FE] rounded-full p-4 ">
                            <RiNumber2 className="text-white group-hover:text-[#1754F1] group-active:text-[#1754F1] duration-500 w-10 h-10 sm:w-15 sm:h-15"/>
                        </div>
                        <div className="flex flex-col gap-3 items-start max-lg:pl-6 pl-10">
                            <h3 className="text-3xl sm:text-4xl leading-tight font-bold text-[#1754F1]">{t("forPartners.whyNow.items.1.title")}</h3>
                            <p className="text-lg text-[#6A6A6A]">{t("forPartners.whyNow.items.1.desc")}</p>
                        </div>
                    </div>
                    <div className="group flex flex-col sm:flex-row items-start sm:items-center gap-6 shadow-[0px_4px_12px_0px_rgba(131,139,180,0.16)] hover:scale-[1.005] duration-300 hover:shadow-[0px_6px_15px_0px_rgba(23,84,241,0.16)] rounded-2xl p-6">
                        <div className="flex items-center justify-center bg-[#ECF7FE] rounded-full p-4 ">
                            <RiNumber3 className="text-white group-hover:text-[#1754F1] group-active:text-[#1754F1] duration-500 w-10 h-10 sm:w-15 sm:h-15"/>
                        </div>
                        <div className="flex flex-col gap-3 items-start max-lg:pl-6 pl-10">
                            <h3 className="text-3xl sm:text-4xl leading-tight font-bold text-[#1754F1]">{t("forPartners.whyNow.items.2.title")}</h3>
                            <p className="text-lg text-[#6A6A6A]">{t("forPartners.whyNow.items.2.desc")}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="
            mx-4 sm:mx-6 max-lg:text-center md:mx-8 min-[1060px]:mx-10 xl:mx-15 2xl:mx-25
            mt-[clamp(40px,6vw,200px)]
            text-center rounded-2xl
            bg-[url('/images/mm-2.png')] bg-no-repeat bg-cover overflow-hidden
            min-h-80
            ">

                <div className="bg-[#CADBF9]/70 py-10 px-6 xl:py-14 xl:px-12">

                    <Heading text={t('forPartners.about.title')} level={2} subtext={t('forPartners.about.subtitle')} />

                    <p className="mt-4 text-[clamp(18px,2vw,28px)] font-semibold text-[#1C1917]">
                       {t('forPartners.selfService.title')}
                    </p>

                    <div className="mt-10 flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-14">
                        {/* step 1 */}
                        <div className="flex flex-col items-center gap-4">
                            <div className="flex items-center justify-center w-18 h-18 rounded-2xl bg-white shadow-[0px_4px_12px_rgba(131,139,180,0.16)]">
                                <FiShoppingCart className="w-9 h-9 text-[#1754F1]" />
                            </div>
                            <p className="text-[#1C1917] font-semibold text-[clamp(16px,1.5vw,20px)]">
                                {t('forPartners.about.steps.0')}
                            </p>
                        </div>

                        <HiChevronRight className="hidden lg:block w-10 h-10 text-[#1754F1]/60" />

                        {/* step 2 */}
                        <div className="flex flex-col items-center gap-4">
                            <div className="flex items-center justify-center w-18 h-18 rounded-2xl bg-white shadow-[0px_4px_12px_rgba(131,139,180,0.16)]">
                                <LuScanLine className="w-9 h-9 text-[#1754F1]" />
                            </div>
                            <p className="text-[#1C1917] font-semibold text-[clamp(16px,1.5vw,20px)]">
                                {t('forPartners.about.steps.1')}
                            </p>
                        </div>

                        <HiChevronRight className="hidden lg:block w-10 h-10 text-[#1754F1]/60" />

                        {/* step 3 */}
                        <div className="flex flex-col items-center gap-4">
                            <div className="flex items-center justify-center w-18 h-18 rounded-2xl bg-white shadow-[0px_4px_12px_rgba(131,139,180,0.16)]">
                                <MdOutlinePayments className="w-9 h-9 text-[#1754F1]" />
                            </div>
                            <p className="text-[#1C1917] font-semibold text-[clamp(16px,1.5vw,20px)]">
                                {t('forPartners.about.steps.2')}
                            </p>
                        </div>
                    </div>

                    <div className="
                    mt-20
                    max-w-[980px]
                    mx-auto
                    rounded-2xl
                    backdrop-blur-md
                    bg-white/70
                    border border-white/60
                    shadow-[0px_8px_30px_rgba(23,84,241,0.12)]
                    px-8 py-7
                    flex flex-col lg:flex-row items-center justify-between
                    gap-6
                    ">
                        <div className="
                        w-14 h-14 flex flex-0.5 items-center 
                        rounded-full justify-center
                        bg-[#1754F1]
                        text-white
                        
                        ">
                            <FaArrowRight />
                        </div>

                        <p className="
                        flex-1
                        text-left max-lg:text-center
                        text-[clamp(15px,1.3vw,19px)]
                        leading-[140%]
                        text-[#1C1917]
                        ">
                            <span className="font-semibold text-[#1754F1]">
                                {t('forPartners.selfService.advantages')}
                            </span>{" "}
                            {t('forPartners.about.advantages')}
                        </p>
                    </div>

                </div>
            </div>
            <div className="px-4 sm:px-6 md:px-8 min-[1060px]:px-10 xl:px-15 2xl:px-25 pt-[clamp(40px,6vw,200px)]">
                <Heading text={t('forPartners.numbers.title')} level={2} subtext={t('forPartners.numbers.subtitle')} />
                <div className="pt-14 grid grid-cols-3 max-lg:grid-cols-2 max-[880px]:!flex flex-col gap-7.5">
                    <div className="flex flex-col gap-7.5">

                        <PercentsCards
                        title={
                            <>
                                <span className="text-[56px] text-[#0088E7] leading-[130%]">10 000 сум </span>
                                <p className="text-[#1C1917] mb-10">{t('forPartners.numbers.avgCheck')}</p>
                            </>
                        }
                        icon={
                            <>
                                <LuTickets className="text-[#ECF7FE] group-hover:text-[#1754F1] duration-500 w-10 h-10"/>
                            </>
                        }
                        CardClass="flex flex-row-reverse justify-between shadow-[0px_4px_12px_0px_rgba(131,139,180,0.16)] hover:scale-[1.005] duration-300 hover:shadow-[0px_10px_15px_0px_rgba(131,139,180,0.16)] rounded-2xl px-6  pt-6"
                    />
                        <PercentsCards
                                title={
                                    <>
                                        <span className="text-[56px] text-[#0088E7] leading-[130%]">~ 45 </span>
                                        <p className="text-[#1C1917] mb-10">{t('forPartners.numbers.transactions')}</p>
                                    </>
                                }
                                description={
                                    <>
                                        <p className="text-[#6A6A6A] text-sm lg:text-[16px]  leading-[120%]">
                                            {t('forPartners.numbers.transactionsHint')}
                                        </p>
                                    </>
                                }
                                icon={
                                    <>
                                         <GrTransaction className="text-[#ECF7FE] group-hover:text-[#1754F1] duration-500 w-10 h-10"/>                             </>
                                }
                                CardClass="flex flex-row-reverse flex-1 justify-between shadow-[0px_4px_12px_0px_rgba(131,139,180,0.16)] hover:scale-[1.005] duration-300 hover:shadow-[0px_10px_15px_0px_rgba(131,139,180,0.16)] rounded-2xl p-6 "

                        />
                    </div>
                        <PercentsCards
                            CardClass="flex max-[880px]:!hidden justify-between shadow-[0px_4px_12px_0px_rgba(131,139,180,0.16)] hover:scale-[1.005] duration-300 hover:shadow-[0px_10px_15px_0px_rgba(131,139,180,0.16)] rounded-2xl bg-[url('/images/micromarket.png')] bg-cover bg-no-repeat flex-1 px-6 pt-6"
                        />
                  
                    <div className="flex col-span-1 md:col-span-2 lg:col-span-1 flex-col gap-7.5 grow">
                        <PercentsCards
                            title={
                                <>
                                    <span className="text-[56px] text-[#0088E7] leading-[130%]">~ 1 млн сум</span>
                                    <p className="text-[#1C1917] mb-10">{t('forPartners.numbers.rent')}</p>
                                </>
                            }
                            icon={
                                <>
                                   <PiMapPinAreaLight className="text-[#ECF7FE] group-hover:text-[#1754F1] duration-500 w-10 h-10"/>
                                </>
                            }
                            CardClass="flex flex-row-reverse flex-1 justify-between shadow-[0px_4px_12px_0px_rgba(131,139,180,0.16)] hover:scale-[1.005] duration-300 hover:shadow-[0px_10px_15px_0px_rgba(131,139,180,0.16)] rounded-2xl p-6 "

                        />
                        <PercentsCards
                            title={
                                <>
                                    <span className="text-[56px] text-[#0088E7] leading-[130%]">~ 55%</span>
                                    <p className="text-[#1C1917] mb-10">{t('forPartners.numbers.margin')}</p>
                                </>
                            }
                            icon={
                                <>
                                   <RiCoinsLine className="text-[#ECF7FE] group-hover:text-[#1754F1] duration-500 w-10 h-10"/>
                                </>
                            }
                            CardClass="flex flex-row-reverse justify-between shadow-[0px_4px_12px_0px_rgba(131,139,180,0.16)]  hover:scale-[1.005] duration-300 hover:shadow-[0px_10px_15px_0px_rgba(131,139,180,0.16)] object-scale-down rounded-2xl flex-1 p-6"
                        />
                    </div>
                </div>
            </div>
            <div className="px-4 sm:px-6 md:px-8 min-[1060px]:px-10 xl:px-15 2xl:px-25 my-[clamp(40px,6vw,200px)] text-center">
                <Heading text={t('forPartners.tech.title')} level={2} subtext={t('forPartners.tech.subtitle')} />
                <div className="pt-[clamp(32px,_3.5vw,_48px)] grid grid-cols-1 lg:grid-cols-3 gap-6">
                            <PercentsCards
                                title={<p className="text-[#1754F1] text-2xl font-extrabold uppercase mb-4">{t('forPartners.tech.items.0.title')}</p>}
                                description={
                                    <div className="flex flex-col gap-10 max-w-95 text-[#6A6A6A] text-lg leading-[130%] font-light">
                                        <p>{t('forPartners.tech.items.0.desc')}</p>
                                    </div>
                                }
                                icon={<CgSmartphoneChip  className="text-[#ECF7FE] group-hover:text-[#1754F1] duration-500 w-15 h-15"/>}
                                CardClass='group flex flex-col gap-14 flex-1 justify-between shadow-[0px_4px_12px_0px_rgba(131,139,180,0.16)] hover:scale-[1.005] duration-300 hover:shadow-[0px_10px_15px_0px_rgba(131,139,180,0.16)] hover:scale-[1.025] duration-300 hover:bg-[#ECF7FE] hover:color-[#1754F1] rounded-2xl p-6 '
                            />
                            <PercentsCards
                                title={<p className="text-[#1754F1] text-2xl font-extrabold uppercase mb-4">{t('forPartners.tech.items.1.title')}</p>}
                                description={
                                    <div className="flex flex-col gap-10 max-w-95 text-[#6A6A6A] text-lg leading-[130%] font-light">
                                        <p>{t('forPartners.tech.items.1.desc')}</p>
                                    </div>
                                }
                                icon={<ImProfile   className="text-[#ECF7FE] group-hover:text-[#1754F1] duration-500 w-15 h-15"/>}
                                CardClass='group flex flex-col gap-14 flex-1 justify-between shadow-[0px_4px_12px_0px_rgba(131,139,180,0.16)] bg-[url("/public/images/bg-2.png")] bg-no-repeat bg-right-top hover:scale-[1.025] duration-300 hover:shadow-[0px_10px_15px_0px_rgba(131,139,180,0.16)] hover:bg-[#ECF7FE] hover:color-[#1754F1] rounded-2xl p-6 '
                            />
                            <PercentsCards
                                title={<p className="text-[#1754F1] text-2xl font-extrabold uppercase mb-4">{t('forPartners.tech.items.2.title')}</p>}
                                description={
                                    <div className="flex flex-col gap-10 max-w-95 text-[#6A6A6A] text-lg leading-[130%] font-light">
                                        <p>{t('forPartners.tech.items.2.desc')}</p>
                                    </div>
                                }
                                icon={<LuShieldCheck  className="text-[#ECF7FE] group-hover:text-[#1754F1] duration-500 w-15 h-15"/>}
                                CardClass='group flex flex-col gap-14 flex-1 justify-between shadow-[0px_4px_12px_0px_rgba(131,139,180,0.16)] hover:scale-[1.005] duration-300 hover:shadow-[0px_10px_15px_0px_rgba(131,139,180,0.16)] hover:scale-[1.025] duration-300 hover:bg-[#ECF7FE] hover:color-[#1754F1] rounded-2xl p-6 '
                            />
                </div>

            </div>
            <div className="px-4 sm:px-6 md:px-8 min-[1060px]:px-10 xl:px-15 2xl:px-25 pt-[clamp(40px,6vw,200px)] text-center">
                
                    <Heading text={t('forPartners.places.title')} level={2} />
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                    {PLACES.map((p) => (
                        <PlaceCard key={p.title} title={p.title} img={p.img} />
                    ))}
                    </div>
            
            </div>
            <div className="px-4 sm:px-6 md:px-8 min-[1060px]:px-10 xl:px-15 2xl:px-25 my-[clamp(40px,6vw,200px)]">
                <Heading text={t('forPartners.timeline.title')} level={2} subtext={t('forPartners.timeline.subtitle')} />
                <p className="mt-3 text-[#6A6A6A] text-[clamp(14px,1.2vw,18px)] leading-[140%] max-w-[70ch]">
                    {t('forPartners.timeline.desc')}                
                </p>
        <div className="relative mt-10">
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 bg-[#1754F1]/15" />

            <div className="grid gap-10 lg:gap-14">
            {timeline.map((item, idx) => {
                const isLeft = idx % 2 === 0;

                return (
                <div key={item.day} className="relative">
                    <div className="lg:hidden absolute left-4 top-0 bottom-0 w-[2px] bg-[#1754F1]/15" />
                    <div className="hidden lg:block">
                    <div className="absolute left-1/2 top-8 -translate-x-1/2 z-20 w-10 h-10 rounded-full bg-white border border-[#1754F1]/25 shadow-[0px_4px_12px_0px_rgba(131,139,180,0.16)] grid place-items-center">
                        <div className="w-3 h-3 rounded-full bg-[#1754F1]" />
                    </div>
                    <div
                        className={[
                        "absolute top-[2.5rem] z-10 h-[2px] bg-[#1754F1]/15",
                        isLeft
                            ? "left-1/2 w-[calc(50%-2.5rem)]" 
                            : "right-1/2 w-[calc(50%-2.5rem)]", 
                        ].join(" ")}
                    />
                    </div>
                    <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-start">
                    <div className={isLeft ? "lg:pr-10" : "lg:order-2 lg:pl-10"}>
                        <div className="lg:hidden relative pl-14">
                        <div className="absolute left-0 top-7 z-20 w-9 h-9 rounded-full bg-white border border-[#1754F1]/25 shadow-[0px_4px_12px_0px_rgba(131,139,180,0.16)] grid place-items-center">
                            <div className="w-3 h-3 rounded-full bg-[#1754F1]" />
                        </div>
                        <div className="absolute left-4 top-9 w-10 h-[2px] bg-[#1754F1]/15" />

                        <div className="rounded-2xl bg-white border border-[#1754F1]/10 shadow-[0px_4px_12px_0px_rgba(131,139,180,0.12)] p-6 sm:p-8">
                            <div className="flex items-center gap-3">
                            <span className="inline-flex items-center gap-2 rounded-full bg-[#ECF7FE] text-[#1754F1] px-3 py-1 text-sm font-semibold">
                                <HiOutlineCalendarDays className="w-4 h-4" />
                                {item.day}
                            </span>
                            </div>

                            <p className="mt-4 text-[clamp(18px,1.6vw,24px)] font-bold text-[#1C1917] leading-[120%]">
                            {item.title}
                            </p>
                            <p className="mt-3 text-[#6A6A6A] text-[clamp(14px,1.2vw,18px)] leading-[140%]">
                            {item.desc}
                            </p>

                            <div className="mt-6 grid gap-3">
                            {item.bullets.map((b, i) => (
                                <div key={i} className="flex items-start gap-3 rounded-xl bg-[#F6F7FA] px-4 py-3">
                                <div className="mt-0.5 text-[#1754F1]">{b.icon}</div>
                                <p className="text-[#1C1917] font-medium leading-[130%]">{b.text}</p>
                                </div>
                            ))}
                            </div>
                        </div>
                        </div>
                        <div className="hidden lg:block">
                        <div className="rounded-2xl bg-white border border-[#1754F1]/10 shadow-[0px_4px_12px_0px_rgba(131,139,180,0.12)] p-6 sm:p-8">
                            <div className="flex items-center gap-3">
                            <span className="inline-flex items-center gap-2 rounded-full bg-[#ECF7FE] text-[#1754F1] px-3 py-1 text-sm font-semibold">
                                <HiOutlineCalendarDays className="w-4 h-4" />
                                {item.day}
                            </span>
                            </div>

                            <p className="mt-4 text-[clamp(18px,1.6vw,24px)] font-bold text-[#1C1917] leading-[120%]">
                            {item.title}
                            </p>
                            <p className="mt-3 text-[#6A6A6A] text-[clamp(14px,1.2vw,18px)] leading-[140%]">
                            {item.desc}
                            </p>

                            <div className="mt-6 grid gap-3">
                            {item.bullets.map((b, i) => (
                                <div key={i} className="flex items-start gap-3 rounded-xl bg-[#F6F7FA] px-4 py-3">
                                <div className="mt-0.5 text-[#1754F1]">{b.icon}</div>
                                <p className="text-[#1C1917] font-medium leading-[130%]">{b.text}</p>
                                </div>
                            ))}
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className={isLeft ? "" : "lg:order-1"} />
                    </div>
                </div>
                );
            })}
            </div>
        </div>
        </div>

            <div id="footer">
                <Footer />
            </div>
        </div >
    )
}

function PlaceCard({ title, img }: { title: string; img: string }) {
    return (
        <div
        className="
            group relative overflow-hidden rounded-2xl bg-white
            shadow-[0px_4px_12px_0px_rgba(131,139,180,0.16)]
        "
        >
        <div className="relative h-[220px] sm:h-[260px] xl:h-[360px]">
            
            <img
            src={img}
            alt={title}
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
            />

            <div
            className="
                absolute inset-0
                bg-[#1754F1]/70 backdrop-blur-[2px]
                transition-transform duration-2000 ease-in-out
                group-hover:translate-y-full group-active:translate-y-full
            "
            />

            <div className="absolute inset-0 flex items-center justify-center px-4">
            <p className="text-white font-semibold leading-[120%] text-[clamp(16px,1.2vw,20px)]">
                {title}
            </p>
            </div>

        </div>
        </div>
    );
}