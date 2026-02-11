import type { ReactNode } from "react"
import { Button } from "../Button/Button"

interface BlockProps {
    heading: ReactNode,
    text: string,
    children?: ReactNode,
    imgURL: string;
    styleClass?: string;
    buttonText1: string,
    buttonGoTo1?: () => void,
    buttonGoTo2?: () => void,
    buttonText2: string,
}
export const BlockWindow: React.FC<BlockProps> = ({ heading, text, buttonText1, buttonText2, children, imgURL, styleClass ,buttonGoTo1, buttonGoTo2 }) => {
    return (
        <div className="relative overflow-hidden">
        <div
            className={`absolute inset-0 ${styleClass} `}
            style={{ backgroundImage:` url(${imgURL})` }}
        />
        <div className="absolute inset-0">
            <div className="absolute min-[1160px]:left-[-8%] h-full w-0 min-[1160px]:w-[65%] bg-white min-[1160px]:skew-x-[-12deg] origin-left" />
        </div>
        <div className="relative z-10 flex max-[1160px]:justify-center justify-between 
        py-[clamp(60px,_5vw,_140px)] px-4 sm:px-6 md:px-8 
        min-[1060px]:px-10 xl:px-15 2xl:px-25">

            <div className="max-[1160px]:flex max-[1160px]:justify-center max-[1160px]:text-center max-[1160px]:flex-col max-[1160px]:bg-white/80 rounded-2xl p-4 max-[1160px]:items-center">
                <h1 className="font-vela_sans font-semibold text-[64px] max-md:text-5xl max-sm:text-3xl leading-[110%] mb-6 max-w-180">
                {heading}
                </h1>

                <p className="font-vela_sans text-lg leading-[130%] mb-14 max-w-lg">
                {text}
                </p>

                <div className="flex max-[640px]:flex-col items-center max-[1160px]:justify-center w-full gap-6">
                <Button className='py-4 px-10 bg-[#1754F1] rounded-2xl font-vela_sans text-lg text-white cursor-pointer  max-[1160px]:w-full' children={buttonText1} onClick={buttonGoTo1} />
                <Button className='py-4 px-6 bg-[#ECF7FE] rounded-2xl font-vela_sans text-lg text-[#1754F1] cursor-pointer  max-[1160px]:w-full' children={buttonText2} onClick={buttonGoTo2} />
                </div>
            </div>

            <div className="relative max-[1160px]:hidden min-w-150 min-h-100">
                {children}
            </div>

        </div>
        </div>
        )
}
