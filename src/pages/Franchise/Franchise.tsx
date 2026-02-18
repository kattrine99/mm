import { BlockWindow, Header, PercentsCards, Heading, Footer, ConnectBusinessModal, Modal } from "../../components";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import {  LuPiggyBank } from "react-icons/lu";

import { RiLineChartLine, RiNumber1, RiNumber2, RiNumber3 } from "react-icons/ri";
import { MdBusinessCenter } from "react-icons/md";
import { BiTrendingUp } from "react-icons/bi";

export const Franchise = () => {
    const [formOpen, setFormOpen] = useState(false);
    const [successOpen, setSuccessOpen] = useState(false);
    const { t } = useTranslation();
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
                    Запустите собственную сеть <span className="text-[#1754F1]">MikroMarket</span> 
                    </>
                }
                imgURL="/images/about-bg.png"
                styleClass="bg-cover min-[1160px]:bg-contain bg-right bg-no-repeat"
                content={[
                    {
                    type: "accent",
                    parts: [
                        { text: "Вы получаете проверенную модель бизнеса с прозрачной экономикой." },
                    ],
                    },
                    {
                    type: "accent",
                    parts: [
                        { text: "Мы уже протестировали формат, просчитали юнит-экономику и оптимизировали процессы." },
                    ],
                    },
                    {
                    type: "accent",
                    parts: [
                        { text: "Ваша задача — масштабировать." },

                    ],
                    },
                ]}
                actions={[
                    { text: "Получить финансовую модель", variant: "primary" },
                    { text: "Оставить заявку", variant: "secondary", onClick: () => setFormOpen(true) },
                ]}
            />
            <div className="px-4 sm:px-6 md:px-8 min-[1060px]:px-10 xl:px-15 2xl:px-25 pt-[clamp(40px,6vw,200px)] flex flex-col min-lg:flex-row gap-7">
                
                <div className="flex rounded-2xl overflow-hidden shadow-[0px_4px_12px_0px_rgba(131,139,180,0.16)]">
                    <img src="/images/micromarket.png" className=" w-full h-auto max-h-140 object-cover hidden  min-lg:block" />
                    <img src="/images/mini-microm.png" className=" w-full h-auto max-h-140 object-cover  min-lg:hidden block" />
                </div>
                <div className="flex-1 rounded-2xl overflow-hidden justify-between py-4  xl:py-6 2xl:py-8 px-6 xl:px-8 2xl:px-10 shadow-[0px_4px_12px_0px_rgba(131,139,180,0.16)] md:bg-[url('/images/bg-4.png')] bg-no-repeat bg-contain bg-bottom-right">
                    <Heading text='Кому подойдёт формат' level={2} subtext='микромаркета'/>
                    <div className="pt-[clamp(24px,6vw,64px)] flex flex-col lg:grid grid-cols-2  gap-4 ">
                        <div className="flex flex-row gap-8 p-6 justify-start items-center">
                            <div className="flex rounded-full items-center justify-center w-15 h-15 bg-[#F1F9FF] text-[#1754F1]">
                                <MdBusinessCenter  className="w-8 h-8"/>
                            </div>
                            <p className="text-2xl text-[#1C1917]">Предпринимателям</p>
                        </div>
                        <div className="flex flex-row gap-8 p-6 justify-start items-center">
                            <div className="flex rounded-full items-center justify-center w-15 h-15 bg-[#F1F9FF] text-[#1754F1]">
                                <RiLineChartLine  className="w-8 h-8"/>
                            </div>
                            <p className="text-2xl text-[#1C1917]">Инвесторам</p>
                        </div>
                        <div className="flex flex-row gap-8 p-6 justify-start items-center">
                            <div className="flex rounded-full items-center justify-center w-15 h-15 bg-[#F1F9FF] text-[#1754F1]">
                                <BiTrendingUp  className="w-8 h-8"/>
                            </div>
                            <p className="text-2xl text-[#1C1917]">Владельцам недвижимости</p>
                        </div>
                        <div className="flex flex-row gap-8 p-6 justify-start items-center">
                            <div className="flex rounded-full items-center justify-center w-15 h-15 bg-[#F1F9FF] text-[#1754F1]">
                                <LuPiggyBank  className="w-8 h-8"/>
                            </div>
                            <p className="text-2xl text-[#1C1917]">Тем, кто хочет пассивный доход</p>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="px-4 sm:px-6 md:px-8 min-[1060px]:px-10 xl:px-15 2xl:px-25 my-[clamp(40px,6vw,200px)]">
                <Heading text={t('aboutPlatform.profit.title')} level={2} subtext={t('aboutPlatform.profit.subtext')} />
                <div className="pt-[clamp(32px,_3.5vw,_48px)] grid grid-cols-1 lg:grid-cols-3 gap-6">
                            <PercentsCards
                                title={<p className="text-[#1C1917] text-2xl font-semibold mb-4">{t('aboutPlatform.profit.cards.0.title')}</p>}
                                description={
                                    <div className="flex flex-col gap-10 max-w-95 text-[#6A6A6A] text-lg leading-[130%] font-light">
                                        <p>{t('aboutPlatform.profit.cards.0.desc')}</p>
                                    </div>
                                }
                                icon={<RiNumber1 className="text-[#ECF7FE] group-hover:text-[#1754F1] duration-500 w-15 h-15"/>}
                                CardClass='group flex flex-col gap-14 flex-1 justify-between shadow-[0px_4px_12px_0px_rgba(131,139,180,0.16)] hover:scale-[1.005] duration-300 hover:shadow-[0px_10px_15px_0px_rgba(131,139,180,0.16)] hover:scale-[1.025] duration-300 hover:bg-[#ECF7FE] hover:color-[#1754F1] rounded-2xl p-6 '
                            />
                            <PercentsCards
                                title={<p className="text-[#1C1917] text-2xl font-semibold mb-4">{t('aboutPlatform.profit.cards.1.title')}</p>}
                                description={
                                    <div className="flex flex-col gap-10 max-w-95 text-[#6A6A6A] text-lg leading-[130%] font-light">
                                        <p>{t('aboutPlatform.profit.cards.1.desc')}</p>
                                    </div>
                                }
                                icon={<RiNumber2  className="text-[#ECF7FE] group-hover:text-[#1754F1] duration-500 w-15 h-15"/>}
                                CardClass='group flex flex-col gap-14 flex-1 justify-between shadow-[0px_4px_12px_0px_rgba(131,139,180,0.16)] bg-[url("/public/images/bg-2.png")] bg-no-repeat bg-right-top hover:scale-[1.025] duration-300 hover:shadow-[0px_10px_15px_0px_rgba(131,139,180,0.16)] hover:bg-[#ECF7FE] hover:color-[#1754F1] rounded-2xl p-6 '
                            />
                            <PercentsCards
                                title={<p className="text-[#1C1917] text-2xl font-semibold mb-4">{t('aboutPlatform.profit.cards.2.title')}</p>}
                                description={
                                    <div className="flex flex-col gap-10 max-w-95 text-[#6A6A6A] text-lg leading-[130%] font-light">
                                        <p>{t('aboutPlatform.profit.cards.2.desc')}</p>
                                    </div>
                                }
                                icon={<RiNumber3 className="text-[#ECF7FE] group-hover:text-[#1754F1] duration-500 w-15 h-15"/>}
                                CardClass='group flex flex-col gap-14 flex-1 justify-between shadow-[0px_4px_12px_0px_rgba(131,139,180,0.16)] hover:scale-[1.005] duration-300 hover:shadow-[0px_10px_15px_0px_rgba(131,139,180,0.16)] hover:scale-[1.025] duration-300 hover:bg-[#ECF7FE] hover:color-[#1754F1] rounded-2xl p-6 '
                            />
                </div>

            </div>
            <div id="footer">
                <Footer />
            </div>
        </div >
    )
}
