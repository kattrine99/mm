import { BlockWindow, Footer, Header, ConnectBusinessModal, Heading, Button } from "../../components";

import { useState} from "react";
import { useTranslation } from "react-i18next";
import { FaCheck, FaPlus } from "react-icons/fa6";


export type PlaceCard = {
    title: string;
    img: string;
};

export const ForParnters = () => {
    const { t } = useTranslation();
    const [openIndex, setOpenIndex] = useState<number | null>(1);
    const [formOpen, setFormOpen] = useState(false);
    const [, setSuccessOpen] = useState(false);
    const faqs = t("faq.items", { returnObjects: true }) as {
        question: string;
        answer: string;
    }[];
    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
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
            <Header />
            <BlockWindow
                heading={
                    <>
                    Инвестиции,  <span className="text-[#1754F1]">которые работают на Вас</span>
                    </>
                }
                imgURL="/images/mm-bg.png"
                styleClass="bg-cover min-[1160px]:bg-contain bg-right bg-no-repeat"
                content={[
                    {
                    type: "accent",
                    parts: [
                        { text: "Стартовые инвестиции зависят от формата точки." },
                    ],
                    },
                    {
                    type: "accent",
                    parts: [
                        { text: "Но главное — это не вложения. " },
                        { text: "Главное — возврат инвестиций." },
                    ],
                    },
                    {
                    type: "accent",
                    parts: [
                        { text: "Мы предоставляем:" },
                    ],
                    },
                    {
                    type: "list",
                    variant: "check",
                    items: [
                        "Детальный расчёт",
                        "Финансовую модель",
                        "Прогноз прибыли",
                        "Окупаемость",
                    ],
                    }
                ]}
            />
            <div className="px-4 sm:px-6 md:px-8 min-[1060px]:px-10 xl:px-15 2xl:px-25 my-[clamp(40px,6vw,200px)] ">
                <div
                    className="
                        relative overflow-hidden rounded-2xl
                        border border-[#ECF7FE]
                        shadow-[0px_8px_30px_rgba(23,84,241,0.12)]
                        bg-[#ECF7FE] min-h-100 h-auto lg:h-140 items-center justify-center
                    "
                >
                    <div className="absolute -top-24 -right-24 w-[320px] h-[320px] rounded-full bg-[#1754F1]/10 blur-3xl" />
                    <div className="absolute -bottom-28 -left-28 w-[360px] h-[360px] rounded-full bg-white/70 blur-3xl" />

                    <div className="relative p-6 sm:p-8 lg:p-10 flex flex-col lg:flex-row gap-8 h-full">
                        <div className="flex-1">
                            <h2 className="mt-4 font-vela_sans font-semibold text-[clamp(26px,3.2vw,44px)] leading-[110%] text-[#1C1917]">
                                Количество партнёров{" "}
                                <span className="text-[#1754F1]">ограничено</span>
                            </h2>

                            <p className="mt-4 text-[#6A6A6A] text-[clamp(15px,1.2vw,18px)] leading-[150%] max-w-[70ch]">
                                Мы не продаём франшизу всем подряд. Мы выбираем стратегических партнёров
                                для долгосрочного сотрудничества.
                            </p>

                            <p className="mt-3 text-[#1C1917] text-[clamp(15px,1.2vw,18px)] leading-[150%] max-w-[70ch]">
                                Оставьте заявку, чтобы получить{" "}
                                <span className="font-semibold text-[#1754F1]">
                                    презентацию и расчёт
                                </span>
                                .
                            </p>
                        </div>
                        <div
                            className="           
                                rounded-2xl
                                bg-white/70 backdrop-blur-md
                                border border-white/60
                                shadow-[0px_8px_30px_rgba(23,84,241,0.12)]
                                p-8
                                flex flex-col gap-4 justify-between h-auto
                            "
                        >
                            <div className="flex flex-col gap-1">
                                <Heading text="Получить материалы" level={2} />              
                                <p className="text-[#6A6A6A] text-sm leading-[140%]">
                                    Ответим и пришлём расчёт под вашу локацию.
                                </p>
                            </div>
                            <div className="flex flex-col gap-6">
                                <div className="flex flex-col sm:flex-row lg:flex-col gap-4">
                                        <button
                                        className="
                                            w-full py-4 px-6 rounded-2xl
                                            bg-[#1754F1] text-white
                                            font-vela_sans text-lg
                                            shadow-[0px_10px_25px_rgba(23,84,241,0.25)]
                                            hover:brightness-110 transition
                                        "
                                        onClick={() => setFormOpen(true)}
                                    >
                                        Оставить заявку
                                    </button>

                                    <button
                                        className="
                                            w-full py-4 px-6 rounded-2xl
                                            bg-white text-[#1754F1]
                                            border border-[#1754F1]/20
                                            font-vela_sans text-lg
                                            hover:bg-[#ECF7FE] transition
                                        "
                                    >
                                        Получить презентацию
                                    </button>
                                </div>
                                <p className="text-[#6A6A6A] text-xs leading-[140%]">
                                * Без спама. Только материалы и консультация.
                                </p>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex max-[1060px]:flex-col mx-4 sm:mx-6 md:mx-8 min-[1060px]:mx-10 xl:mx-15 2xl:mx-25 mt-[clamp(40px,6vw,200px)] bg-white rounded-2xl shadow-[0px_4px_12px_0px_rgba(131,139,180,0.16)] p-8 gap-8 max-[1060px]:gap-20">
                <div className="flex flex-col flex-1">
                    <Heading
                        text='Разберём ключевые вопросы перед запуском'
                        subtext='и развеем сомнения'
                        level={2}
                    />
                    <div className="divide-y divide-gray-200 mt-14">
                        {faqs.map((faq, i) => (
                            <div key={i}>
                                <button
                                    onClick={() => toggleFAQ(i)}
                                    className="flex justify-between items-center w-full py-6 text-left"
                                >
                                    <span className="text-xl leading-[120%] font-medium">{faq.question}</span>
                                    <span
                                        className={`
                                            text-[#6A6A6A]
                                            transition-all duration-300 ease-in-out
                                            ${openIndex === i ? "rotate-45" : "rotate-0"}
                                        `}
                                    >
                                        <FaPlus className="w-6 h-6"/>
                                    </span>
                                </button>
                                <div
                                    className={`overflow-hidden transition-all duration-600 ${openIndex === i ? "max-h-100 opacity-100" : "max-h-0 opacity-0"
                                        }`}
                                >
                                    <p className="pb-8 text-lg text-[#6A6A6A] leading-[130%]">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="px-6 md:px-8 min-[1060px]:px-10 xl:px-15 2xl:px-25 py-[clamp(40px,6vw,200px)]">
                <div className=" grid grid-cols-1 lg:grid-cols-[460px_1fr] gap-6 items-stretch">
                    <div
                            className="
                                relative overflow-hidden rounded-2xl
                                shadow-[0px_8px_24px_rgba(131,139,180,0.16)]
                                bg-[url('/images/micromarket.png')] bg-cover bg-center bg-no-repeat
                            "
                        />
                        <div
                            className="
                                relative overflow-hidden rounded-2xl bg-white
                                shadow-[0px_8px_24px_rgba(131,139,180,0.16)]
                                border border-[#ECF7FE]
                                p-6 sm:p-8 lg:p-10
                            "
                        >
                            <Heading
                                text=" Начните зарабатывать на технологиях "
                                level={3}
                                subtext="уже сейчас"
                            />
                            <p className="mt-6 text-[clamp(16px,1.4vw,20px)]">
                                Оставьте заявку и получите:
                            </p>

                            <div className="mt-8 grid sm:grid-cols-2 gap-x-12 gap-y-5 text-left max-w-[720px] mx-auto">
                
                                <Benefit text="Презентацию проекта" />
                                <Benefit text="Финансовую модель" />
                                <Benefit text="Расчёт окупаемости" />
                                <Benefit text="Консультацию эксперта" />
                                
                            </div>

                            {/* CTA кнопка */}
                            <div className="mt-10 flex flex-col items-center gap-4">
                                
                                <Button
                                    className="
                                        py-4 px-10 bg-[#1754F1] rounded-2xl font-vela_sans text-lg text-white cursor-pointer max-[1160px]:w-full"
                                    onClick={() => setFormOpen(true)}
                                    children="Получить расчёт"
                                />
                                <p className="text-white/80 text-sm">
                                    Форма заявки с подтверждением по номеру телефона
                                </p>
                            </div>
                        </div>
                    </div>
            </div>
            <div id="footer">
                <Footer />
            </div>
        </div >
    )
}

export function PlaceCard({ title, img }: { title: string; img: string }) {
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
function Benefit({ text }: { text: string }) {
    return (
        <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-7 h-7 rounded-full bg-white text-[#1754F1] font-bold text-sm">
                <FaCheck className="w-5 h-5 text-[#1754F1]"/>
            </div>
            <p className=" text-[clamp(16px,1.2vw,18px)]">
                {text}
            </p>
        </div>
    );
}