import type { ReactNode } from "react"
import { Button } from "../Button/Button"
import { FaCheck } from "react-icons/fa6";


type TextAlign = "left" | "center";
type AccentText = {
  text: string
  accent?: boolean
}
type BlockItem =
  | { type: "subtitle"; value: ReactNode }
  | { type: "text"; value: ReactNode }
  | { type: "accent"; parts: AccentText[] }
  | { type: "list"; variant?: "check" | "dot"; items: ReactNode[] }

type Action = {
    text: string;
    onClick?: () => void;
    variant?: "primary" | "secondary";
};

interface BlockProps {
    heading: ReactNode;         
    content?: BlockItem[];       
    actions?: Action[];          
    children?: ReactNode;       
    imgURL: string;
    styleClass?: string;
    align?: TextAlign;          
};

export const BlockWindow: React.FC<BlockProps> = ({
    heading,
    content = [],
    actions = [],
    children,
    imgURL,
    styleClass,
    align = "left",
    }) => {
    const isCenter = align === "center";

    return (
        <div className="relative overflow-hidden">
        <div
            className={`absolute inset-0 ${styleClass ?? ""}`}
            style={{ backgroundImage: `url(${imgURL})` }}
        />
        <div className="absolute inset-0">
            <div className="absolute min-[1160px]:left-[-8%] h-full w-0 min-[1160px]:w-[65%] bg-white min-[1160px]:skew-x-[-12deg] origin-left" />
        </div>

        <div
            className="
            relative z-10 flex max-[1160px]:justify-center justify-between
            py-[clamp(20px,_2vw,_80px)] px-4 sm:px-6 md:px-8
            min-[1060px]:px-10 xl:px-15 2xl:px-25
            "
        >
            <div
            className={`
                max-[1160px]:flex max-[1160px]:justify-center max-[1160px]:flex-col
                rounded-2xl p-4 max-[1160px]:items-center max-[1160px]:bg-white/80
                ${isCenter ? "text-center" : "text-left"}
            `}
            >
            <h1 className="font-vela_sans font-semibold text-[64px] max-md:text-5xl max-sm:text-3xl leading-[110%] mb-6 max-w-180">
                {heading}
            </h1>

            {content.map((block, idx) => {
                if (block.type === "subtitle") {
                return (
                    <div
                    key={idx}
                    className="font-vela_sans text-[22px] max-sm:text-[18px] leading-[130%] mb-4 max-w-[70ch]"
                    >
                    {block.value}
                    </div>
                );
                }

                if (block.type === "text") {
                return (
                    <p key={idx} className="font-vela_sans text-lg leading-[130%] mb-6 max-w-lg">
                    {block.value}
                    </p>
                );
                }

                if (block.type === "list") {
                return (
                    <List
                    key={idx}
                    variant={block.variant ?? "dot"}
                    items={block.items}
                    align={isCenter ? "center" : "left"}
                    />
                );
                }
                if (block.type === "accent") {
                    return (
                        <p key={idx} className="font-vela_sans font-semibold text-xl leading-[130%] mb-6 max-w-lg">
                        {block.parts.map((p, i) => (
                            <span key={i} className={p.accent ? "text-[#1754F1] font-medium" : ""}>
                            {p.text}
                            </span>
                        ))}
                        </p>
                    );
                    }
                return null;
            })}

            {actions.length > 0 && (
                <div className="flex max-[640px]:flex-col items-center max-[1160px]:justify-center w-full gap-6">
                {actions.map((a, i) => (
                    <Button
                    key={i}
                    className={
                        a.variant === "secondary"
                        ? "py-4 px-6 bg-[#ECF7FE] rounded-2xl font-vela_sans text-lg text-[#1754F1] cursor-pointer max-[1160px]:w-full"
                        : "py-4 px-10 bg-[#1754F1] rounded-2xl font-vela_sans text-lg text-white cursor-pointer max-[1160px]:w-full"
                    }
                    onClick={a.onClick}
                    >
                    {a.text}
                    </Button>
                ))}
                </div>
            )}
            </div>

            <div className="relative max-[1160px]:hidden min-w-150 min-h-100">
            {children}
            </div>
        </div>
        </div>
    );
    };


const List = ({
    variant = "dot",
    items,
    align = "left",
    }: {
    variant?: "check" | "dot";
    items: ReactNode[];
    align?: TextAlign;
    }) => {
    if (variant === "check") {
        return (
        <ul className="mb-14 space-y-4">
            {items.map((item, i) => (
            <li
                key={i}
                className={`
                flex items-start gap-3 font-vela_sans text-lg leading-[130%] max-w-lg
                ${align === "center" ? "justify-center text-center" : ""}
                `}
            >
                <span className="text-[#1754F1] text-xl leading-none"><FaCheck/></span>
                <span>{item}</span>
            </li>
            ))}
        </ul>
        );
    }

    return (
        <ul className={`list-disc list-inside mb-14 ${align === "center" ? "text-center" : ""}`}>
        {items.map((item, i) => (
            <li key={i} className="font-vela_sans text-lg leading-[130%] mb-4 max-w-lg">
            {item}
            </li>
        ))}
        </ul>
    );
    };