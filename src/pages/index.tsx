import React from "react"
import { Inter } from "next/font/google"
import { CheckCard, CheckCardProps } from "../components/CheckCard/CheckCard"
import { Form, FormData } from "../components/Form/Form"
import { CardLabels } from "../components/CardLabels/CardLabels"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { Loader } from "../components/Loader/Loader"

const inter = Inter({ subsets: ["latin"] })

const cards = [
    { img: "/assets/mastercard.png", alt: "card mastercard" },
    { img: "/assets/dinnersclub.png", alt: "card dinnersclub" },
    { img: "/assets/americanexpress.png", alt: "card americanexpress" },
    { img: "/assets/visa.png", alt: "card visa" },
    { img: "/assets/elo.png", alt: "card elo" },
]

export default function Home() {
    const [plans, setPlans] = useState<CheckCardProps[]>([])
    const [selectedOption, setSelectedOption] = useState<string | number>(32)
    const [installments, setInstallments] = useState<
        Array<{ value: string | number; label: string | number }>
    >([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState("")
    const router = useRouter()

    const apiUrl = process.env.NEXT_PUBLIC_API_OFFER_URL || ""

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(apiUrl)
                const jsonData = await response.json()
                setPlans(jsonData)
                setIsLoading(false)
            } catch (error) {
                setError("Failed to fetch data. Please try again later.")
                setIsLoading(false)
            }
        }

        fetchData()
    }, [])

    useEffect(() => {
        const planInstallment = plans.find(
            (item) => item.id === selectedOption
        )?.installments

        setInstallments(
            new Array(planInstallment)
                .fill(null)
                .map((_, index) => ({ value: index + 1, label: index + 1 }))
        )
    }, [plans, selectedOption])

    const handleOptionChange = (optionValue: string) => {
        setSelectedOption(optionValue)
    }

    const handleSubmit = async (data: FormData) => {
        await fetch(
            "https://private-0ced4-pebmeddesafiofrontend.apiary-mock.com/subscription",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            }
        )
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to submit form")
                }
                router.push("/success")
            })
            .catch((error) => {
                console.error("Error submitting form:", error)
            })
    }

    if (isLoading) {
        return <Loader />
    }

    if (error) {
        return (
            <div className="flex justify-center items-center h-screen">
                <h2>{error}</h2>
            </div>
        )
    }

    return (
        <main
            className={`flex sm:flex-row flex-col-reverse justify-center sm:items-start items-center sm:p-24 p-5 sm:gap-[12.5rem] gap-[2rem] ${inter.className}`}
        >
            <section className="flex flex-col gap-[1.87rem] sm:p-0 p-10">
                <div className="sm:text-start text-center">
                    <h2>Estamos quase lá!</h2>
                    <p>Insira seus dados de pagamento abaixo:</p>
                </div>

                <CardLabels cards={cards} />

                <Form onSubmit={handleSubmit} installments={installments} />
            </section>

            <section className="flex flex-col gap-[1.87rem]">
                <div className="flex flex-col gap-[0.37rem] sm:items-start items-center">
                    <h2>Confira o seu plano:</h2>
                    <small className="border-[1px] border-[#F4F3F6] rounded-[12px] px-[12px] py-[4px] w-max">
                        fulano@cicrano.com.br
                    </small>
                </div>

                {plans.map((plan) => (
                    <CheckCard
                        key={plan.id}
                        id={plan.id}
                        value={plan.id}
                        title={plan.title}
                        description={plan.description}
                        fullPrice={plan.fullPrice}
                        discountPercentage={plan.discountPercentage}
                        discountAmmount={plan.discountAmmount}
                        installments={plan.installments}
                        periodLabel={plan.periodLabel}
                        onChange={handleOptionChange}
                        checked={plan.id === selectedOption}
                    />
                ))}

                <small className="flex gap-[0.79rem] justify-center items-center ">
                    Sobre a cobrança
                    <Link href="/">
                        <img src="/assets/questionmark.svg" />
                    </Link>
                </small>
            </section>
        </main>
    )
}
