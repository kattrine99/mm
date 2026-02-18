import { BlockWindow, Header, PercentsCards, Heading, Footer, ConnectBusinessModal, Modal } from "../../components";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import {  LuLayoutGrid, LuShieldCheck, LuTickets} from "react-icons/lu";

import { RiMoneyDollarCircleLine, RiNumber1, RiNumber2, RiNumber3, RiNumber4, RiUserSettingsLine } from "react-icons/ri";
import { TfiCup } from "react-icons/tfi";
import { MdAnalytics, MdInventory2, MdOutlineTouchApp } from "react-icons/md";
import { FaCalendarDays, FaChevronRight, FaMoneyBillWave } from "react-icons/fa6";
import { GrTransaction } from "react-icons/gr";
import { PiMapPinAreaLight } from "react-icons/pi";
import { FiTrendingUp } from "react-icons/fi";
import { HiOutlineSparkles } from "react-icons/hi";
import { PlaceCard } from "../Partners/ForParnters";
import { TbTruckDelivery } from "react-icons/tb";
import { CgSmartphoneChip } from "react-icons/cg";

export const MainPage = () => {
    const [formOpen, setFormOpen] = useState(false);
    const [successOpen, setSuccessOpen] = useState(false);
    const { t } = useTranslation();
    const places = t("forPartners.places.items", { returnObjects: true }) as string[];

    const PLACES: PlaceCard[] = [
    { title: places[0], img: "/images/business.jpg" },
    { title: places[1], img: "/images/house.jpg" },
    { title: places[2], img: "/images/fit.jpg" },
    { title: places[3], img: "/images/factory.jpg" }
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
            <Modal
                open={successOpen}
                onClose={() => setSuccessOpen(false)}
                type="success"
                title={t('modal.successTitle')}
                description={t('modal.successDesc')}
                footer={
                    <button
                        onClick={() => setSuccessOpen(false)}
                        className="rounded-xl px-5 py-3 bg-[#1754F1] text-white hover:opacity-90 transition"
                    >
                        {t('modal.close')}
                    </button>
                }
            />
            <Header />
            <BlockWindow
                heading={
                    <>
                    Зарабатывайте на <span className="text-[#1754F1]">автоматизированных микромаркетах</span> 24/7 без продавцов
                    </>
                }
                imgURL="/images/mm-2.png"
                styleClass="bg-cover min-[1160px]:bg-contain bg-right bg-no-repeat"
                content={[
                    {
                    type: "accent",
                    parts: [
                        { text: "Готовый бизнес под ключ в Узбекистане. " },
                        { text: "Без персонала. " },
                        { text: "Без кассиров. " },
                        { text: "Без лишних расходов." },
                    ],
                    },
                    {
                    type: "list",
                    variant: "check",
                    items: [
                        "Окупаемость от 8 месяцев",
                        "Полная автоматизация",
                        "Контроль дохода в реальном времени",
                        "Поддержка на каждом этапе",
                    ],
                    },
                ]}
                actions={[
                    { text: "Получить финансовую модель", variant: "primary" },
                    { text: "Оставить заявку", variant: "secondary", onClick: () => setFormOpen(true) },
                ]}
            />

            <div className="px-6 md:px-8 min-[1060px]:px-10 xl:px-15 2xl:px-25 pt-[clamp(40px,6vw,200px)]">
                <Heading text="Традиционная торговля " level={2} subtext="больше не работает"/>                
                <div className="flex flex-col gap-10 pt-[clamp(32px,_3.5vw,_48px)] ">
                    <div className="group flex flex-col sm:flex-row items-start sm:items-center gap-6 shadow-[0px_4px_12px_0px_rgba(131,139,180,0.16)] hover:scale-[1.005] duration-300 hover:shadow-[0px_6px_15px_0px_rgba(23,84,241,0.16)] rounded-2xl p-6">
                        <div className="flex items-center justify-center bg-[#ECF7FE] rounded-full p-4 ">
                            <RiNumber1 className="text-white group-hover:text-[#1754F1] group-active:text-[#1754F1] duration-500 w-10 h-10 sm:w-15 sm:h-15"/>
                        </div>
                        <div className="flex flex-col gap-3 items-start max-lg:pl-6 pl-10">
                            <h3 className="text-3xl sm:text-4xl leading-tight font-bold text-[#1754F1]">Рост затрат на персонал</h3>
                            <p className="text-lg text-[#6A6A6A]">Зарплаты сотрудников постоянно увеличиваются и давят на маржинальность.</p>
                        </div>
                    </div>
                    <div className="group flex flex-col sm:flex-row items-start sm:items-center gap-6 shadow-[0px_4px_12px_0px_rgba(131,139,180,0.16)] hover:scale-[1.005] duration-300 hover:shadow-[0px_6px_15px_0px_rgba(23,84,241,0.16)] rounded-2xl p-6">
                        <div className="flex items-center justify-center bg-[#ECF7FE] rounded-full p-4 ">
                            <RiNumber2 className="text-white group-hover:text-[#1754F1] group-active:text-[#1754F1] duration-500 w-10 h-10 sm:w-15 sm:h-15"/>
                        </div>
                        <div className="flex flex-col gap-3 items-start max-lg:pl-6 pl-10">
                            <h3 className="text-3xl sm:text-4xl leading-tight font-bold text-[#1754F1]">Потеря контроля</h3>
                            <p className="text-lg text-[#6A6A6A]">Сложно отслеживать действия сотрудников и качество обслуживания.</p>
                        </div>
                    </div>
                    <div className="group flex flex-col sm:flex-row items-start sm:items-center gap-6 shadow-[0px_4px_12px_0px_rgba(131,139,180,0.16)] hover:scale-[1.005] duration-300 hover:shadow-[0px_6px_15px_0px_rgba(23,84,241,0.16)] rounded-2xl p-6">
                        <div className="flex items-center justify-center bg-[#ECF7FE] rounded-full p-4 ">
                            <RiNumber3 className="text-white group-hover:text-[#1754F1] group-active:text-[#1754F1] duration-500 w-10 h-10 sm:w-15 sm:h-15"/>
                        </div>
                        <div className="flex flex-col gap-3 items-start max-lg:pl-6 pl-10">
                            <h3 className="text-3xl sm:text-4xl leading-tight font-bold text-[#1754F1]">Ошибки и потери</h3>
                            <p className="text-lg text-[#6A6A6A]">Воровство, ошибки на кассе, недостачи и человеческий фактор.</p>
                        </div>
                    </div>
                    <div className="group flex flex-col sm:flex-row items-start sm:items-center gap-6 shadow-[0px_4px_12px_0px_rgba(131,139,180,0.16)] hover:scale-[1.005] duration-300 hover:shadow-[0px_6px_15px_0px_rgba(23,84,241,0.16)] rounded-2xl p-6">
                        <div className="flex items-center justify-center bg-[#ECF7FE] rounded-full p-4 ">
                            <RiNumber4 className="text-white group-hover:text-[#1754F1] group-active:text-[#1754F1] duration-500 w-10 h-10 sm:w-15 sm:h-15"/>
                        </div>
                        <div className="flex flex-col gap-3 items-start max-lg:pl-6 pl-10">
                            <h3 className="text-3xl sm:text-4xl leading-tight font-bold text-[#1754F1]">Ограниченные часы работы</h3>
                            <p className="text-lg text-[#6A6A6A]">Невозможно работать круглосуточно, особенно в ночное время.</p>
                        </div>
                    </div>
                    <div className="group mt-[clamp(20px,2vw,48px)] bg-[#F2FAFE] rounded-r-2xl border-l-8 border-[#1754F1] p-8 flex flex-col lg:flex-row gap-10  justify-between items-center">
                       <div>
                         <p className="text-xl sm:text-2xl font-semibold text-[#1F2328] mb-3">
                            Сегодня выигрывают автоматизированные форматы.
                        </p>

                        <p className="text-lg text-[#4B5563] max-w-[800px]">
                            <span className="text-[#1754F1] font-bold">MikroMarket</span> — это новая модель торговли, где технологии работают вместо продавцов.
                        </p>
                       </div>
                       <div className="bg-white rounded-full group-hover:bg-[#1754F1] group-active:bg-[#1754F1] duration-500 p-5">
                        <TfiCup className="w-10 h-10 text-[#1754F1]  group-hover:text-white group-active:text-white duration-500"/>
                       </div>
                    </div>
                </div>
            </div>
            <div
                className="
                    mx-4 sm:mx-6 md:mx-8 min-[1060px]:mx-10 xl:mx-15 2xl:mx-25
                    mt-[clamp(40px,6vw,200px)]
                    rounded-2xl text-center
                    bg-[url('/images/mm-bg.png')] bg-no-repeat bg-cover bg-center overflow-hidden
                    min-h-80 
                "
                >
                <div className="bg-gradient-to-b from-white/85 via-white/70 to-[#CADBF9]/55
    backdrop-blur-sm py-10 px-6 xl:py-25 xl:px-14 rounded-2xl flex flex-col items-center gap-6 overflow-hidden">
                    <h2 className="  mx-auto
font-vela_sans font-semibold text-[clamp(32px,3.4vw,54px)] leading-[110%] text-[#1C1917]">
                    {t("mainPage.autonomousShop.title.pre")}{" "}
                    <span className="text-[#1754F1]">{t("mainPage.autonomousShop.title.accent")}</span>
                    </h2>
                    <p className="mt-5 mx-auto max-w-[980px]
  text-[clamp(15px,1.5vw,20px)]
  leading-[160%]  text-[#1C1917]/75">
                    {t("mainPage.autonomousShop.desc")}
                    </p>

                    <p className="mt-8 text-[clamp(18px,2vw,28px)] font-semibold text-[#1C1917]">
                    {t("mainPage.autonomousShop.manageTitle")}
                    </p>

                    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-[1100px] mx-auto">
                        {[
                        { Icon: FaMoneyBillWave, label: t("mainPage.autonomousShop.manageList.0") },
                        { Icon: MdInventory2 , label: t("mainPage.autonomousShop.manageList.1") },
                        { Icon: MdAnalytics , label: t("mainPage.autonomousShop.manageList.2") },
                        { Icon: LuLayoutGrid, label: t("mainPage.autonomousShop.manageList.3") },
                        ].map(({ Icon, label }, idx) => (
                        <div key={idx} className="group flex flex-col items-center gap-4">
                            <div
                            className="
                                flex items-center justify-center
                                w-18 h-18 rounded-2xl
                                bg-white/90
                                border border-white/70
                                shadow-[0px_10px_25px_rgba(16,24,40,0.08)]
                                transition-transform duration-500
                                group-hover:-translate-y-2
                                group-active:-translate-y-2
                            "
                            >
                            <Icon className="w-9 h-9 text-[#1754F1]" />
                            </div>
                            <p className="text-[#1C1917]  group-hover:text-[#1754F1] group-active:text-[#1754F1] transform duration-500 font-semibold text-[clamp(16px,1.3vw,18px)] leading-[130%]">
                            {label}
                            </p>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="px-4 sm:px-6 md:px-8 min-[1060px]:px-10 xl:px-15 2xl:px-25 pt-[clamp(40px,6vw,200px)]">
                <Heading text={'Финансовая модель'} level={2} subtext={'в цифрах'} />
                <div className="pt-14 grid grid-cols-3 max-lg:grid-cols-2 max-[880px]:!flex flex-col gap-7.5">
                                <div className="flex flex-col gap-7.5">
            
                                    <PercentsCards
                                    title={
                                        <>
                                            <span className="text-[56px] text-[#1754F1] leading-[130%]">от $X </span>
                                            <p className="text-[#1C1917] mb-10">Средний оборот одной точки (в месяц) </p>
                                        </>
                                    }
                                    icon={
                                        <>
                                            <GrTransaction  className="text-[#ECF7FE] group-hover:text-[#1754F1] duration-500 w-10 h-10"/>
                                        </>
                                    }
                                    CardClass="group flex flex-row-reverse justify-between shadow-[0px_4px_12px_0px_rgba(131,139,180,0.16)] hover:scale-[1.005] duration-300 hover:shadow-[0px_10px_15px_0px_rgba(131,139,180,0.16)] hover:bg-[#ECF7FE] hover:color-[#1754F1] rounded-2xl px-6  pt-6"
                                />
                                    <PercentsCards
                                            title={
                                                <>
                                                    <span className="text-[56px] text-[#1754F1] leading-[130%]">8-14 месяцев </span>
                                                    <p className="text-[#1C1917] mb-10">Окупаемость  </p>
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
                                                     <FaCalendarDays  className="text-[#ECF7FE] group-hover:text-[#1754F1] duration-500 w-10 h-10"/>                             </>
                                            }
                                            CardClass="group flex flex-row-reverse flex-1 justify-between shadow-[0px_4px_12px_0px_rgba(131,139,180,0.16)] hover:scale-[1.005] duration-300 hover:shadow-[0px_10px_15px_0px_rgba(131,139,180,0.16)] hover:bg-[#ECF7FE] hover:color-[#1754F1] rounded-2xl p-6 "
            
                                    />
                                </div>
                                    <PercentsCards
                                        title={
                                            <div className="flex flex-col gap-4 p-6 rounded-2xl">
                                                <span className="text-[56px] text-[#1754F1] leading-[130%]">Без затрат</span>
                                                <div className="ml-5 flex flex-col gap-3">

                                                    <div className="flex items-center gap-2">
                                                    <FaChevronRight  className="w-6 h-6 text-[#1754F1]" />
                                                    <p className="text-[#1C1917]">на кассиров</p>
                                                    </div>

                                                    <div className="flex items-center gap-2">
                                                    <FaChevronRight  className="w-6 h-6 text-[#1754F1]" />
                                                    <p className="text-[#1C1917]">на ночные смены</p>
                                                    </div>

                                                    <div className="flex items-center gap-2">
                                                    <FaChevronRight  className="w-6 h-6 text-[#1754F1]" />
                                                    <p className="text-[#1C1917]">на человеческий фактор</p>
                                                    </div>

                                                    <div className="flex items-center gap-2">
                                                    <FaChevronRight  className="w-6 h-6 text-[#1754F1]" />
                                                    <p className="text-[#1C1917]">на управление персоналом</p>
                                                    </div>
                                                </div>
                                            </div>
                                        }
                                        icon={
                                            <>
                                               <RiMoneyDollarCircleLine  className="text-[#ECF7FE] group-hover:text-[#1754F1] duration-500 w-10 h-10"/>
                                            </>
                                        }
                                        CardClass="group flex flex-row-reverse bg-[url('/images/bg-3.png')] bg-no-repeat bg-right-bottom flex-1 justify-between shadow-[0px_4px_12px_0px_rgba(131,139,180,0.16)] hover:scale-[1.005] duration-300 hover:shadow-[0px_10px_15px_0px_rgba(131,139,180,0.16)] hover:bg-[#ECF7FE] hover:color-[#1754F1] rounded-2xl p-6 "
            
                                    />
                              
                                <div className="flex col-span-1 md:col-span-2 lg:col-span-1 flex-col gap-7.5 grow">
                                    <PercentsCards
                                        title={
                                            <>
                                                <span className="text-[56px] text-[#1754F1] leading-[130%]">24/7</span>
                                                <p className="text-[#1C1917] mb-10">Ваши деньги работают</p>
                                            </>
                                        }
                                        icon={
                                            <>
                                               <PiMapPinAreaLight className="text-[#ECF7FE] group-hover:text-[#1754F1] duration-500 w-10 h-10"/>
                                            </>
                                        }
                                        CardClass="group flex flex-row-reverse flex-1 justify-between shadow-[0px_4px_12px_0px_rgba(131,139,180,0.16)] hover:scale-[1.005] duration-300 hover:shadow-[0px_10px_15px_0px_rgba(131,139,180,0.16)] hover:bg-[#ECF7FE] hover:color-[#1754F1] rounded-2xl p-6 "
            
                                    />
                                    <PercentsCards
                                        title={
                                            <>
                                                <span className="text-[56px] text-[#1754F1] leading-[130%]">~ 40%</span>
                                                <p className="text-[#1C1917] mb-10">Чистая прибыль</p>
                                            </>
                                        }
                                        icon={
                                            <>
                                               <LuTickets className="text-[#ECF7FE] group-hover:text-[#1754F1] duration-500 w-10 h-10"/>
                                            </>
                                        }
                                        CardClass="group flex flex-row-reverse justify-between shadow-[0px_4px_12px_0px_rgba(131,139,180,0.16)]  hover:scale-[1.005] duration-300 hover:shadow-[0px_10px_15px_0px_rgba(131,139,180,0.16)] hover:bg-[#ECF7FE] hover:color-[#1754F1] object-scale-down rounded-2xl flex-1 p-6"
                                    />
                                </div>
                </div>
            </div>                
            <div className="px-4 sm:px-6 md:px-8 min-[1060px]:px-10 xl:px-15 2xl:px-25 py-[clamp(40px,6vw,200px)] flex flex-col lg:grid grid-cols-2 justify-between gap-7.5">
                    <div className="flex flex-1 flex-col p-5 lg:px-6 lg:py-8 bg-[#ECF7FE] shadow-[0px_4px_12px_0px_rgba(131,139,180,0.16)] rounded-2xl bg-[url(/images/bg-form.png)] bg-cover">
                        <Heading text={'Почему рынок'} level={2} subtext="растёт"/>
                        <div className="mt-8 lg:mt-15 flex items-center gap-4">
                            <div>
                                <FiTrendingUp className="w-10 h-10 text-[#1754F1] "/>
                            </div>
                            <div>
                                <h2 className="text-2xl lg:text-3xl font-semibold text-[#1754F1]">Тренд</h2>
                                <p className="text-lg text-[#6A6A6A] leading-[130%]">Рост безналичных платежей (Humo/Uzcard) и привычка к QR-оплатам.</p>
                            </div>
                        </div>
                        <div className=" mt-10 flex items-center gap-4">
                            <div>
                                <HiOutlineSparkles  className="w-10 h-10 text-[#1754F1] "/>
                            </div>
                            <div>
                                <h2 className="text-2xl lg:text-3xl font-semibold text-[#1754F1]">Уникальность</h2>
                                <p className="text-lg text-[#6A6A6A] leading-[130%]">В Узбекистане рынок микромаркетов еще не насыщен.</p>
                            </div>
                        </div>
                        <div className=" mt-10 flex items-center gap-4">
                            <div>
                                <MdOutlineTouchApp  className="w-10 h-10 text-[#1754F1] "/>
                            </div>
                            <div>
                                <h2 className="text-2xl lg:text-3xl font-semibold text-[#1754F1]">Удобство</h2>
                                <p className="text-lg text-[#6A6A6A] leading-[130%]">Люди хотят покупать «здесь и сейчас», не стоя в очередях.</p>
                            </div>
                        </div>      
                    </div>
                    <div className="flex flex-col p-8 flex-1 justify-between bg-white shadow-[0px_4px_12px_0px_rgba(131,139,180,0.16)] rounded-2xl">
                        <div className="flex flex-col gap-4 ">
                            <Heading text='Сейчас — самое выгодное время занять локации' level={2} />
                            <p className="text-lg text-[#6A6A6A] leading-[130%]">Через 2–3 года лучшие места будут заняты.</p> 
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                                    {PLACES.map((p) => (
                                        <div
                                            className="
                                                group relative overflow-hidden rounded-2xl bg-white
                                                shadow-[0px_4px_12px_0px_rgba(131,139,180,0.16)]
                                            "
                                            >
                                            <div className="relative h-50">

                                                <img
                                                src={p.img}
                                                alt={p.title}
                                                className="absolute inset-0 h-full w-full object-cover"
                                                loading="lazy"
                                                />

                                                <div
                                                className="
                                                    absolute inset-0
                                                    bg-[#1754F1]/40 backdrop-blur-sm
                                                    transition-transform duration-700 ease-out
                                                    translate-y-0
                                                    group-hover:translate-y-[68%] group-active:translate-y-[68%] rounded-2xl
                                                "
                                                />
                                                <div
                                                className="
                                                    absolute inset-0
                                                    flex items-end justify-center
                                                    pb-4 px-4
                                                "
                                                >
                                                <p
                                                    className="
                                                    text-white font-semibold leading-[120%]
                                                    text-[clamp(16px,1.2vw,20px)]
                                                    transition-colors duration-300
                                                    "
                                                >
                                                    {p.title}
                                                </p>
                                                </div>

                                            </div>
                                        </div>
                                    ))}
                            </div>
                    </div >
            </div>
            <div className="px-4 sm:px-6 md:px-8 min-[1060px]:px-10 xl:px-15 2xl:px-25 my-[clamp(40px,6vw,200px)]">
                <Heading text='Вы получаете готовый бизнес ' level={2} subtext='под ключ' />
                <div className="pt-[clamp(32px,_3.5vw,_48px)] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                            <PercentsCards
                                title={<p className="text-[#1C1917] text-2xl font-semibold mb-4"> Поставка и установка оборудования</p>}
                                icon={<TbTruckDelivery  className="text-[#ECF7FE] group-hover:text-[#1754F1] group-active:text-[#1754F1] duration-500 w-15 h-15"/>}
                                CardClass='group flex flex-col gap-14 flex-1 justify-between shadow-[0px_4px_12px_0px_rgba(131,139,180,0.16)] hover:scale-[1.005] duration-300 hover:shadow-[0px_10px_15px_0px_rgba(131,139,180,0.16)] hover:bg-[#ECF7FE] hover-active:bg-[#ECF7FE] rounded-2xl p-6 '
                            />
                            <PercentsCards
                                title={<p className="text-[#1C1917] text-2xl font-semibold mb-4"> Настройка программного обеспечения</p>}
                                icon={<CgSmartphoneChip   className="text-[#ECF7FE] group-hover:text-[#1754F1] group-active:text-[#1754F1] duration-500 w-15 h-15"/>}
                                CardClass='group flex flex-col gap-14 flex-1 justify-between shadow-[0px_4px_12px_0px_rgba(131,139,180,0.16)] bg-[url("/public/images/bg-2.png")] bg-no-repeat bg-right-top hover:scale-[1.025] duration-300 hover:shadow-[0px_10px_15px_0px_rgba(131,139,180,0.16)] hover:bg-[#ECF7FE] hover:color-[#1754F1] rounded-2xl p-6 '
                            />
                            <PercentsCards
                                title={<p className="text-[#1C1917] text-2xl font-semibold mb-4"> Обучение и запуск</p>}
                                icon={<RiUserSettingsLine  className="text-[#ECF7FE] group-hover:text-[#1754F1] group-active:text-[#1754F1] duration-500 w-15 h-15"/>}
                                CardClass='group flex flex-col gap-14 flex-1 justify-between shadow-[0px_4px_12px_0px_rgba(131,139,180,0.16)] hover:scale-[1.005] duration-300 hover:shadow-[0px_10px_15px_0px_rgba(131,139,180,0.16)] hover:scale-[1.025] duration-300 hover:bg-[#ECF7FE] hover-active:bg-[#ECF7FE] rounded-2xl p-6 '
                            />
                            <PercentsCards
                                title={<p className="text-[#1C1917] text-2xl font-semibold mb-4"> Постоянное сопровождение </p>}
                                icon={<LuShieldCheck   className="text-[#ECF7FE] group-hover:text-[#1754F1] group-active:text-[#1754F1] duration-500 w-15 h-15"/>}
                                CardClass='group flex flex-col gap-14 flex-1 justify-between shadow-[0px_4px_12px_0px_rgba(131,139,180,0.16)] hover:scale-[1.005] duration-300 hover:shadow-[0px_10px_15px_0px_rgba(131,139,180,0.16)] hover:scale-[1.025] duration-300 hover:bg-[#ECF7FE] hover-active:bg-[#ECF7FE] rounded-2xl p-6 '
                            />
                </div>

            </div>
            <div id="footer">
                <Footer />
            </div>
        </div >
    )
}
