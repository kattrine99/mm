import { useState } from "react"
import { Button } from "../Button/Button"
import { Heading } from "../Heading/Heading"
import { ConnectBusinessForm } from "../Modal/ConnectBusinessForm"
import { Modal } from "../Modal/Modal"
import { useTranslation } from "react-i18next";

export const FormSection = () => {
    const [successOpen, setSuccessOpen] = useState(false);
    const { t } = useTranslation();

    return (
        <div className="mx-4 sm:mx-6 md:mx-8 min-[1060px]:mx-10 xl:mx-15 2xl:mx-25 my-[clamp(40px,6vw,200px)] flex max-lg:flex-col justify-between gap-7.5">
            <div className="flex flex-1 bg-[#ECF7FE] shadow-[0px_4px_12px_0px_rgba(131,139,180,0.16)] rounded-2xl">
                <div className="bg-[url(/images/bg-form.png)] bg-cover flex flex-col justify-between">
                    <div className="flex flex-col gap-4 p-8">
                        <Heading text={t('formSection.left.heading_text')} level={2} subtext={t('formSection.left.heading_subtext')} />
                        <p className="text-lg text-[#6A6A6A] leading-[130%]">{t('formSection.left.description')}</p>
                    </div>
                    <div className="m-6">
                        <Button className='w-full bg-[#0088E7] rounded-2xl py-5.5 text-white text-lg leading-[130%]' children={t('formSection.left.button')} />
                    </div>
                </div>
            </div>
            <div className="flex flex-col p-8 flex-1 justify-between bg-white shadow-[0px_4px_12px_0px_rgba(131,139,180,0.16)] rounded-2xl">
                <div className="flex flex-col gap-4 ">
                    <Heading text={t('formSection.right.heading_text')} level={2} subtext={t('formSection.right.heading_subtext')} />
                    <p className="text-lg text-[#6A6A6A] leading-[130%]">{t('formSection.right.description')}</p>
                    <ConnectBusinessForm
                        onSubmitOk={() => setSuccessOpen(true)} />

                    <Modal
                        open={successOpen}
                        onClose={() => setSuccessOpen(false)}
                        type="success"
                        title={t('modal.successTitle')}
                        description={t('modal.successDesc')}
                        footer={
                            <button
                                onClick={() => setSuccessOpen(false)}
                                className="rounded-xl px-5 py-3 bg-[#0088E7] text-white hover:opacity-90 transition"
                            >
                                {t('modal.closeBtn')}
                            </button>
                        }
                    />
                </div>
            </div>

        </div >
    )
}
