import type { JSX } from "react";

interface HeadingProps {
    text: string;
    level: number;
    subtext?: string;
}
export const Heading: React.FC<HeadingProps> = ({ text, level, subtext }) => {

    let Tag: keyof JSX.IntrinsicElements;

    switch (level) {
        case 1: Tag = "h1"; break;
        case 2: Tag = "h2"; break;
        case 3: Tag = "h3"; break;
        case 4: Tag = "h4"; break;
        case 5: Tag = "h5"; break;
        case 6: Tag = "h6"; break;
        default: Tag = "h6";
    }

    return (
        <Tag className="text-[#1C1917] text-[clamp(32px,5vw,40px)] font-bold leading-[120%]">
            {text}
            <span className="text-[#1754F1]"> {subtext}</span>
        </Tag>
    );
}