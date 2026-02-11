interface CardProps {
    title?: React.ReactNode;
    description?: React.ReactNode;
    buttonText?: string;
    icon?: React.ReactNode;
    image?: string;
    CardClass?: string;
}

export const PercentsCards: React.FC<CardProps> = ({ title, description, buttonText, image, CardClass, icon }) => {
    return (
        <div className={CardClass}>
            <div className="flex-0.2">
                {icon}
            </div>
            <div className="flex  flex-col flex-1 justify-between gap-3">
                <div className="flex flex-col gap-2">
                    <h2 className="text-lg font-vela_sans leading-[130%] text-[#6A6A6A]">{title}</h2>
                    {description}
                </div>
                {image && (
                    <img
                        src={image}
                        alt="card visual"
                        className="w-full max-h-100 object-contain"
                    />
                )}
                {buttonText && (
                    <button className="mt-auto bg-[#0088E7] text-white text-[16px] leading-[120%] font-medium py-3 px-8 rounded-full w-fit">
                        {buttonText}
                    </button>
                )}
            </div>
        </div>
    );
};
