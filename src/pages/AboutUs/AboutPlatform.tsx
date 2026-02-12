import { BlockWindow, Header, PercentsCards, Heading, Footer, ConnectBusinessModal, Modal } from "../../components";
import { useState, type JSX } from "react";
import { useTranslation } from "react-i18next";
import { LuBadgeDollarSign, LuBot, LuBuilding2, LuSettings, LuZap } from "react-icons/lu";
import { GiChocolateBar } from "react-icons/gi";
import { BsPlug } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { RiNumber1, RiNumber2, RiNumber3, RiUserSettingsLine } from "react-icons/ri";

export const AboutPlatform = () => {
    const [formOpen, setFormOpen] = useState(false);
    const [successOpen, setSuccessOpen] = useState(false);
    const { t } = useTranslation();
    const features = t('aboutPlatform.tasks.features', { returnObjects: true }) as {
        title: string; desc: string; icon: string; CardClass: string;
    }[];


    const iconMap: Record<string, JSX.Element> = {
        LuBuilding: <LuBuilding2 className="text-[#ECF7FE] group-hover:text-[#1754F1] duration-500 w-10 h-10" />,
        LuZap: <LuZap  className="text-[#ECF7FE] group-hover:text-[#1754F1] duration-500 w-10 h-10" />,
        LuBadgeDollarSign: <LuBadgeDollarSign className="text-[#ECF7FE] group-hover:text-[#1754F1] duration-500 w-10 h-10" />,
        GiChocolateBar: <GiChocolateBar  className="text-[#ECF7FE] group-hover:text-[#1754F1] duration-500 w-10 h-10" />,
        LuBot : <LuBot  className="text-[#ECF7FE] group-hover:text-[#1754F1] duration-500 w-10 h-10" />,
        LuSettings : <LuSettings  className="text-[#ECF7FE] group-hover:text-[#1754F1] duration-500 w-10 h-10" />
    };

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
                heading={<>{t('aboutPlatform.hero.heading.part1')}  <span className="text-[#1754F1]">{t('aboutPlatform.hero.heading.highlight')}</span> {t('aboutPlatform.hero.heading.part2')}
                </>}
                text={t('aboutPlatform.hero.text')}
                buttonText1={t('aboutPlatform.hero.btn1')}
                buttonGoTo1={() => setFormOpen(true)}
                buttonText2={t('aboutPlatform.hero.btn2')} buttonGoTo2={() => {
                    window.location.href = "tel:+998901234567";
                } } 
                imgURL={"/images/mm-2.png"} 
                styleClass="bg-cover min-[1160px]:bg-contain bg-right bg-no-repeat"/>
            <div>
                <div className="px-4 sm:px-6 md:px-8 min-[1060px]:px-10 xl:px-15 2xl:px-25 pt-[clamp(40px,6vw,200px)]">
                    <Heading text={t('aboutPlatform.sections.features.title')} level={2} subtext={t('aboutPlatform.sections.features.subtext')} />
                    <div className="pt-14 grid grid-cols-3 max-[1060px]:grid-cols-2 max-[880px]:!flex flex-col gap-7.5">
                        {features.map((f, idx) => (
                            <PercentsCards
                                key={idx}
                                title={<p className="text-[#1C1917] text-2xl font-semibold mb-4">{f.title}</p>}
                                description={
                                    <div className="flex flex-col gap-10 max-w-95 text-[#6A6A6A] text-lg leading-[130%] font-light">
                                        <p>{f.desc}</p>
                                    </div>
                                }
                                icon={iconMap[f.icon]}
                                CardClass={f.CardClass}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div className="px-4 sm:px-6 md:px-8 min-[1060px]:px-10 xl:px-15 2xl:px-25 pt-[clamp(40px,6vw,200px)] flex flex-col min-lg:flex-row gap-7">
                
                <div className="flex rounded-2xl overflow-hidden shadow-[0px_4px_12px_0px_rgba(131,139,180,0.16)]">
                    <img src="/images/micromarket.png" className=" w-full h-auto max-h-140 object-cover hidden  min-lg:block" />
                    <img src="/images/mini-microm.png" className=" w-full h-auto max-h-140 object-cover  min-lg:hidden block" />
                </div>
                <div className="flex-1 rounded-2xl overflow-hidden justify-between py-4  xl:py-6 2xl:py-8 px-6 xl:px-8 2xl:px-10 shadow-[0px_4px_12px_0px_rgba(131,139,180,0.16)] md:bg-[url('/images/bg-4.png')] bg-no-repeat bg-contain bg-bottom-right">
                    <Heading text={t('aboutPlatform.helpGrow.title.part1')} level={2} subtext={t('aboutPlatform.helpGrow.title.part2')} />
                    <div className="pt-[clamp(24px,6vw,100px)] flex flex-col lg:grid lg:grid-cols-3 gap-4 ">
                        <div className="flex flex-row lg:flex-col gap-8 p-6 justify-center items-center lg:border-r-1 border-[#849cd6] ">
                            <div className="flex rounded-full items-center justify-center w-15 h-15 bg-[#F1F9FF] text-[#1754F1]">
                                <IoLocationOutline  className="w-8 h-8"/>
                            </div>
                            <PercentsCards
                                title={
                                    <>
                                        <span className="text-4xl md:text-5xl lg:text-[56px]  text-[#1C1917] text-center leading-[130%]">1 м²</span>
                                    </>
                                }
                                description={
                                    <div className="flex flex-col gap-10 text-[#6A6A6A] text-lg leading-[130%] font-light">
                                        <p>{t('aboutPlatform.requirements.items.0.label')}</p>
                                    </div>
                                }
                                CardClass="flex flex-row-reverse flex-1 justify-between"
                            />
                        </div>
                        <div className="flex flex-row lg:flex-col gap-8 p-6 justify-center items-center lg:border-r-1 border-[#849cd6] ">
                            <div className="flex rounded-full items-center justify-center w-15 h-15 bg-[#F1F9FF] text-[#1754F1]">
                                <BsPlug  className="w-8 h-8"/>
                            </div>
                            <PercentsCards
                                title={
                                    <>
                                        <span className="text-4xl md:text-5xl lg:text-[56px] text-[#1C1917] text-center leading-[130%]"> 220 В</span>
                                    </>
                                }
                                description={
                                    <div className="flex flex-col gap-2 text-[#6A6A6A] text-lg leading-[130%] font-light">
                                        <p>{t('aboutPlatform.requirements.items.1.label')}</p>
                                        <span className="font-extralight text-[#b5b2b2] text-[16px]">{t('aboutPlatform.requirements.items.1.notePrefix')} <span className="text-[#1754F1]">{t('aboutPlatform.requirements.items.1.noteValue')}</span> </span>
                                    </div>
                                }
                                CardClass="flex flex-row-reverse flex-1 justify-between"
                            />
                        </div>
                        <div className="flex flex-row lg:flex-col gap-8 p-6 justify-center items-center  ">
                            <div className="flex rounded-full items-center justify-center w-15 h-15 bg-[#F1F9FF] text-[#1754F1]">
                                <RiUserSettingsLine  className="w-8 h-8"/>
                            </div>
                             <PercentsCards
                                title={
                                    <>
                                        <span className="text-4xl md:text-5xl lg:text-[56px] text-[#1C1917] text-center leading-[130%]">{t('aboutPlatform.requirements.items.2.value')}</span>
                                    </>
                                }
                                description={
                                    <div className="flex flex-col gap-2 text-[#6A6A6A] text-lg leading-[130%] font-light">
                                        <p>{t('aboutPlatform.requirements.items.2.label')}</p>
                                    </div>
                                }
                                CardClass="flex flex-row-reverse flex-1 justify-between"
                            />
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
