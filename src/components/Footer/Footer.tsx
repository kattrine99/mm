import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import type { TFunction } from "i18next";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Button } from "../Button/Button";
import { LuPhone, LuMail } from "react-icons/lu";
import { Heading } from "../Heading/Heading";

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
        .test("uz", t("connectBusinessForm.validation.phone_invalid"), (v) => {
          if (!v) return false;
          const digits = v.replace(/\D/g, "");
          return /^998\d{9}$/.test(digits);
        }),
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

export type FooterFormValues = yup.InferType<ReturnType<typeof createSchema>>;

export const Footer = () => {
  const { t } = useTranslation();

  const schema = createSchema(t);

  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<FooterFormValues>({
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

  const BOT_TOKEN = "";
  const CHAT_ID = "";

  const onSubmit = async (data: FooterFormValues) => {
    const digits = data.phone.replace(/\D/g, "");
    const normalized = `+${digits.startsWith("998") ? digits : "998" + digits}`;

    const text = `
📝 Новая заявка (микромаркет)
👤 Имя: ${data.name}
🏢 Компания: ${data.company}
📞 Телефон: ${normalized}
💬 Комментарий: ${data.comment || "—"}
`;

    try {
      const resp = await fetch(
        `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ chat_id: CHAT_ID, text }),
        }
      );

      const json = await resp.json().catch(() => null);
      if (!resp.ok || !json?.ok) {
        throw new Error(json?.description || `HTTP ${resp.status}`);
      }

      alert("Заявка отправлена! Мы скоро свяжемся с вами.");
    } catch (e: any) {
      console.error(e);
      alert(`Не удалось отправить заявку: ${e?.message || "ошибка сети"}`);
    }
  };

  return (
    <div className="flex flex-col bg-[url(/images/footer-bg.png)] bg-contain bg-no-repeat bg-left-top shadow-[0px_4px_12px_0px_rgba(131,139,180,0.16)] rounded-2xl mb-10 mx-4 sm:mx-6 md:mx-8 min-[1090px]:mx-10 xl:mx-15 2xl:mx-25">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 py-10 px-4 sm:px-6 md:px-8 min-[1090px]:px-10 xl:px-15 2xl:px-25">
        {/* LEFT: контакты */}
        <div className="flex flex-col gap-25">
         <div  className="flex flex-col gap-4">
             <p className="text-[#1C1917] text-[clamp(26px,2.4vw,40px)] leading-[110%] font-semibold">
            Хотите узнать подробнее?
          </p>

          <p className="text-[#1754F1] text-[clamp(28px,2.6vw,44px)] leading-[110%] font-semibold">
            Свяжитесь с нами
          </p>

         </div>
          <div className="mt-2 flex flex-col gap-5">
            <a
              href="tel:+998555181991"
              className="flex items-center gap-4 text-[#1C1917] text-xl hover:text-[#1754F1] transition"
            >
              <span className="w-14 h-14 rounded-full bg-gradient-to-b from-[#F4F8FF] to-[#DCE7FF] shadow-[0_4px_14px_rgba(23,84,241,0.15)] flex items-center justify-center">
                <LuPhone className="w-6 h-6 text-[#1754F1]" />
              </span>
              +998 (55) 518-19-91
            </a>

            <a
              href="mailto:info@gmail.com"
              className="flex items-center gap-4 text-[#1C1917] text-xl hover:text-[#1754F1] transition"
            >
              <span className="w-14 h-14 rounded-full bg-gradient-to-b from-[#F4F8FF] to-[#DCE7FF] shadow-[0_4px_14px_rgba(23,84,241,0.15)] flex items-center justify-center">
                <LuMail className="w-6 h-6 text-[#1754F1]" />
              </span>
              info@gmail.com
            </a>
          </div>
        </div>

        {/* RIGHT: форма */}
        <div className="flex flex-col gap-4">
            <Heading text={"Подключите минимаркет в вашем помещении"} level={3}/>

          <p className="text-[#6A6A6A] text-md leading-[130%] max-w-2xl">
            Оставьте заявку — мы свяжемся с вами и расскажем, как быстро установить автономный минимаркет и запустить сервис 24/7.
          </p>

          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 w-full">
             <div>
                <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <>
                  <input
                    {...field}
                    placeholder={t("connectBusinessForm.placeholders.name")}
                    className="w-full rounded-2xl bg-[#F6F7FA] px-5 py-4 outline-none focus:ring-2 focus:ring-[#1754F1]"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.name.message}
                    </p>
                  )}
                </>
              )}
            />

             </div>
            <div>
                <Controller
              name="company"
              control={control}
              render={({ field }) => (
                <>
                  <input
                    {...field}
                    placeholder={t("connectBusinessForm.placeholders.company")}
                    className="w-full rounded-2xl bg-[#F6F7FA] px-5 py-4 outline-none focus:ring-2 focus:ring-[#1754F1]"
                  />
                  {errors.company && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.company.message}
                    </p>
                  )}
                </>
              )}
            />
            </div>
            </div>
            <div >
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
                    className="w-full rounded-2xl bg-[#F6F7FA] px-5 py-4 outline-none focus:ring-2 focus:ring-[#1754F1]"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.phone.message}
                    </p>
                  )}
                </>
              )}
            />
            </div>

            <Controller
              name="comment"
              control={control}
              render={({ field }) => (
                <>
                  <textarea
                    {...field}
                    rows={4}
                    placeholder={t("connectBusinessForm.placeholders.comment")}
                    className="w-full rounded-2xl bg-[#F6F7FA] px-5 py-4 outline-none resize-y focus:ring-2 focus:ring-[#1754F1]"
                  />
                  {errors.comment && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.comment.message}
                    </p>
                  )}
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
                      className="mt-1 h-5 w-5 rounded border-[#D0D5DD] accent-[#1754F1]"
                    />
                    <span className="text-[#0B0B0BCC]">
                      {t("connectBusinessForm.agree.label_prefix")}{" "}
                      <a
                        href="/policy"
                        className="text-[#1754F1] underline underline-offset-2"
                      >
                        {t("connectBusinessForm.agree.policy_link")}
                      </a>
                    </span>
                  </label>
                  {errors.agree && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.agree.message}
                    </p>
                  )}
                </>
              )}
            />

            <Button
              type="submit"
              disabled={!isValid || isSubmitting}
              className="w-full rounded-2xl px-6 py-4 bg-[#1754F1] text-white text-lg disabled:opacity-50"
            >
              {t("connectBusinessForm.submit")}
            </Button>
          </form>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="flex max-[1060px]:flex-col max-[1060px]:justify-center max-[1060px]:items-center text-center gap-6 justify-between py-10 border-t-1 border-[#E6E6E6] mx-10 text-[#6A6A6A] text-lg leading-[130%]">
        <p>{t("bottom.rights")}</p>
        <Link
          to={"/policy"}
          className="font-vela_sans text-lg hover:text-[#1754F1] transition duration-600 ease-in-out"
        >
          {t("bottom.policy")}
        </Link>
        <p>designed by Ekaterina</p>
      </div>
    </div>
  );
};
