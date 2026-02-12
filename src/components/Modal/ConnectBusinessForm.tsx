import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button } from "../Button/Button";
import { useTranslation } from "react-i18next";
import type { TFunction } from "i18next";

const createSchema = (t: TFunction<"translation", undefined>) =>
    yup
        .object({
            name: yup
                .string()
                .trim()
                .min(2, t("connectBusinessForm.validation.name_min"))
                .required(t("connectBusinessForm.validation.required")),
            company: yup
                .string()
                .trim()
                .min(2, t("connectBusinessForm.validation.company_min"))
                .required(t("connectBusinessForm.validation.required")),
            phone: yup
                .string()
                .required(t("connectBusinessForm.validation.required"))
                .test(
                    "uz",
                    t("connectBusinessForm.validation.phone_invalid"),
                    (v) => {
                        if (!v) return false;
                        const digits = v.replace(/\D/g, "");
                        return /^998\d{9}$/.test(digits);
                    }
                ),
            comment: yup
                .string()
                .max(500, t("connectBusinessForm.validation.comment_max"))
                .default("")
                .defined(),
            agree: yup
                .boolean()
                .oneOf([true], t("connectBusinessForm.validation.agree"))
                .default(false)
                .defined(),
        })
        .required();

export type FormValues = yup.InferType<ReturnType<typeof createSchema>>;

export function ConnectBusinessForm({
    onSubmitOk,
}: {
    onSubmitOk?: (v: FormValues) => void;
}) {
    const { t } = useTranslation();

    const schema = createSchema(t);

    const {
        control,
        handleSubmit,
        formState: { errors, isValid, isSubmitting },
        } = useForm<FormValues>({
            mode: "onChange",
            resolver: yupResolver(schema),
            defaultValues: {
            name: "",
            company: "",
            phone: "",
            comment: "",
            agree: false,
            },
        });
    
        function formatUzPhone(input: string) {
        const d = input.replace(/\D/g, "");
        const core = d.startsWith("998") ? d.slice(3) : d;
        const withCode = "998" + core;
        const digits = withCode.slice(3, 12);
        const pad = (s: string, n: number) => (s + "_".repeat(n)).slice(0, n);
        const p = pad(digits, 9).split("");
        return `+998 (${p[0]}${p[1]}) ${p[2]}${p[3]}${p[4]}-${p[5]}${p[6]}-${p[7]}${p[8]}`
            .replace(/[_()-\s]+$/g, "");
        }
    
        const onSubmit = async (data: FormValues) => {
        const digits = data.phone.replace(/\D/g, "");
        const normalized = `+${digits.startsWith("998") ? digits : "998" + digits}`;

        try {
            const resp = await fetch("/api/telegram", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name: data.name,
                company: data.company,
                phone: normalized,
                comment: data.comment || "",
            }),
            });

            const json = await resp.json().catch(() => null);
            if (!resp.ok || !json?.ok) {
            throw new Error(json?.description || `HTTP ${resp.status}`);
            }

            onSubmitOk?.({ ...data, phone: normalized }); // ✅ фикс TS6133

            alert("Заявка отправлена! Мы скоро свяжемся с вами.");
        } catch (e: any) {
            console.error(e);
            alert(`Не удалось отправить заявку: ${e?.message || "ошибка сети"}`);
        }
        };


    return (
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <Controller
                name="name"
                control={control}
                render={({ field }) => (
                    <>
                        <input
                            {...field}
                            placeholder={t('connectBusinessForm.placeholders.name')}
                            className="w-full rounded-2xl bg-[#F6F7FA] px-5 py-4 outline-none focus:ring-2 focus:ring-[#0088E7]"
                        />
                        {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
                    </>
                )}
            />
            <Controller
                name="company"
                control={control}
                render={({ field }) => (
                    <>
                        <input
                            {...field}
                            placeholder={t('connectBusinessForm.placeholders.company')}
                            className="w-full rounded-2xl bg-[#F6F7FA] px-5 py-4 outline-none focus:ring-2 focus:ring-[#0088E7]"
                        />
                        {errors.company && <p className="mt-1 text-sm text-red-600">{errors.company.message}</p>}
                    </>
                )}
            />
            <Controller
                name="phone"
                control={control}
                render={({ field: { value, onChange, onBlur, ref } }) => (
                    <>
                        <input
                            ref={ref}
                            value={value}
                            onBlur={onBlur}
                            onChange={(e) => onChange(formatUzPhone(e.target.value))}
                            inputMode="tel"
                            placeholder="+998 (__) ___-__-__"
                            className="w-full rounded-2xl bg-[#F6F7FA] px-5 py-4 outline-none focus:ring-2 focus:ring-[#0088E7]"
                        />
                        {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>}
                    </>
                )}
            />
            <Controller
                name="comment"
                control={control}
                render={({ field }) => (
                    <>
                        <textarea
                            {...field}
                            rows={4}
                            placeholder={t('connectBusinessForm.placeholders.comment')}
                            className="w-full rounded-2xl bg-[#F6F7FA] px-5 py-4 outline-none resize-y focus:ring-2 focus:ring-[#0088E7]"
                        />
                        {errors.comment && <p className="mt-1 text-sm text-red-600">{errors.comment.message}</p>}
                    </>
                )}
            />
            <Controller
                name="agree"
                control={control}
                render={({ field: { value, onChange, ref } }) => (
                    <>
                        <label className="flex items-start gap-3">
                            <input
                                ref={ref}
                                type="checkbox"
                                checked={!!value}
                                onChange={(e) => onChange(e.target.checked)}
                                className="mt-1 h-5 w-5 rounded border-[#D0D5DD] accent-[#0088E7]"
                            />
                            <span className="text-[#0B0B0BCC]">
                                {t('connectBusinessForm.agree.label_prefix')}{" "}
                                <a href="/policy" className="text-[#0088E7] underline underline-offset-2">
                                    {t('connectBusinessForm.agree.policy_link')} </a>
                            </span>
                        </label>
                        {errors.agree && <p className="mt-1 text-sm text-red-600">{errors.agree.message}</p>}
                    </>
                )}
            />

            <Button
                type="submit"
                disabled={!isValid || isSubmitting}
                className="w-full rounded-2xl px-6 py-4 bg-[#0088E7] text-white text-lg disabled:opacity-50"
            >
                {t('connectBusinessForm.submit')}
            </Button>
        </form>
    );
}
