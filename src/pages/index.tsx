import { Inter } from "next/font/google";
import { CheckCard, CheckCardProps } from "../components/CheckCard/CheckCard";
import { Form } from "../components/Form/Form";
import { CardLabels } from "@/components/CardLabels/CardLabels";
import Link from "next/link";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

const cards = [
  { img: "/assets/mastercard.png", alt: "card mastercard" },
  { img: "/assets/dinnersclub.png", alt: "card dinnersclub" },
  { img: "/assets/americanexpress.png", alt: "card americanexpress" },
  { img: "/assets/visa.png", alt: "card visa" },
  { img: "/assets/elo.png", alt: "card elo" },
];

export default function Home() {
  const [plans, setPlans] = useState<CheckCardProps[]>([]);
  const [selectedOption, setSelectedOption] = useState<string | number>(32);
  const [installments, setInstallments] = useState<
    Array<{ value: string | number; label: string | number }>
  >([]);

  const apiUrl = process.env.NEXT_PUBLIC_API_ENDPOINT_URL || "";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        const jsonData = await response.json();
        setPlans(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const planInstallment = plans.find(
      (item) => item.id === selectedOption
    )?.installments;

    setInstallments(
      new Array(planInstallment)
        .fill(null)
        .map((_, index) => ({ value: index + 1, label: index + 1 }))
    );
  }, [plans, selectedOption]);

  const handleOptionChange = (optionValue: string) => {
    setSelectedOption(optionValue);
  };

  const handleSubmit = (data: FormData) => {
    console.log("Form data:", data);
  };

  return (
    <main
      className={`flex flex-row justify-center p-24 gap-[12.5rem] ${inter.className}`}
    >
      <section className="flex flex-col gap-[1.87rem]">
        <div>
          <h2>Estamos quase lá!</h2>
          <p>Insira seus dados de pagamento abaixo:</p>
        </div>

        <CardLabels cards={cards} />

        <Form onSubmit={() => {}} installments={installments} />
      </section>

      <section className="flex flex-col gap-[1.87rem]">
        <div>
          <h2>Confira o seu plano:</h2>
          <small>fulano@cicrano.com.br</small>
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
  );
}
