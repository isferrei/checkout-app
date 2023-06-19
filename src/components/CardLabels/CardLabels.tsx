import React from "react"

type CardLabelsProps = {
    cards: { img: string; alt: string }[]
}

export function CardLabels(props: CardLabelsProps) {
    return (
        <div className="w-full flex flex-col items-center justify-center gap-[0.87rem]">
            <div className="flex flex-row gap-[0.8rem]">
                {props.cards.map((card) => (
                    <img src={card.img} alt={card.alt} key={card.alt} />
                ))}
            </div>
            <div className="flex flex-row gap-[0.43rem]">
                <label className="text-[#DDDDDD] text-[0.62rem]">
                    Pagamentos por
                </label>
                <img src="/assets/iugu.png" alt="Iugu logo" />
            </div>
        </div>
    )
}
