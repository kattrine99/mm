import { Footer, Header, Heading } from "../../components"
import { useTranslation } from "react-i18next";

export const Policy = () => {
    const { t } = useTranslation();
    const content = t("policy.content", { returnObjects: true }) as string[];

    return (
        <div>
            <Header />
            <div className="px-4 sm:px-6 md:px-8 min-[1060px]:px-10 xl:px-15 2xl:px-25 py-[clamp(40px,6vw,200px)]">
                <Heading
                    text={t("policy.title")}
                    level={2}
                    subtext={` ${t("policy.subtitle")}`}
                />
                <div className="mt-8 flex flex-col gap-4 text-lg text-[#6A6A6A] leading-[150%]">
                    {content.map((p, i) => <p key={i}>{p}</p>)}

                </div>
            </div>
            <Footer />
        </div>
    )
}
