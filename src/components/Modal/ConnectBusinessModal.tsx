import { Modal } from "./Modal";
import { ConnectBusinessForm, type FormValues } from "./ConnectBusinessForm";
import { useTranslation } from "react-i18next";
import { useState } from "react";

export const ConnectBusinessModal = ({
    open,
    onClose,
    onSuccess,
}: {
    open: boolean;
    onClose: () => void;
    onSuccess: (data?: FormValues) => void;
}) => {
    const { t } = useTranslation();

    const [successOpen, setSuccessOpen] = useState(false);
    const [errorOpen, setErrorOpen] = useState(false);
    const [errorText, ] = useState("");

    const handleSubmitOk = (data: FormValues) => {
        onClose();
        setSuccessOpen(true);
        onSuccess?.(data);
    };

    return (
        <>
            <Modal
                open={open}
                onClose={onClose}
                title={t("connectBusinessForm.title")}
                description={<ConnectBusinessForm onSubmitOk={handleSubmitOk} />}
            />

            <Modal
                open={successOpen}
                onClose={() => setSuccessOpen(false)}
                type="success"
                title={t("modal.successTitle")}
                description={t("modal.successDesc")}
                footer={
                    <button
                        onClick={() => setSuccessOpen(false)}
                        className="rounded-xl px-5 py-3 bg-[#0088E7] text-white hover:opacity-90 transition"
                    >
                        {t("modal.closeBtn")}
                    </button>
                }
            />

            <Modal
                open={errorOpen}
                onClose={() => setErrorOpen(false)}
                type="error"
                title={t("connectBusinessForm.errors.title")}
                description={errorText || t("connectBusinessForm.errors.generic")}
                footer={
                    <button
                        onClick={() => setErrorOpen(false)}
                        className="rounded-xl px-5 py-3 bg-[#0088E7] text-white hover:opacity-90 transition"
                    >
                        {t("modal.closeBtn")}
                    </button>
                }
            />
        </>
    );
};
