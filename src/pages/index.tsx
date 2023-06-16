import { Inter } from "next/font/google";
import { CheckCard } from "../components/CheckCard/CheckCard";
import { Form } from "../components/Form/Form";
import { CardLabels } from "@/components/CardLabels/CardLabels";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

const cards = [
  { img: "/images/mastercard.png", alt: "card mastercard" },
  { img: "/images/dinnersclub.png", alt: "card dinnersclub" },
  { img: "/images/americanexpress.png", alt: "card americanexpress" },
  { img: "/images/visa.png", alt: "card visa" },
  { img: "/images/elo.png", alt: "card elo" },
];

export default function Home() {
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

        <Form onSubmit={() => {}} />
      </section>

      <section className="flex flex-col gap-[1.87rem]">
        <div>
          <h2>Confira o seu plano:</h2>
          <small>fulano@cicrano.com.br</small>
        </div>

        <CheckCard
          label="Anual  |  À Vista"
          description="10x de R$ 43,69/mês"
          price="De R$ 514,80  |  Por R$ 436,90"
          discount="-15%"
          value="-15%"
          onChange={() => {}}
          checked={false}
        />

        <small className="flex gap-[0.79rem] justify-center items-center ">
          Sobre a cobrança
          <Link href="/">
            <img src="/images/assets/questionmark.svg" />
          </Link>
        </small>
      </section>
    </main>
  );
}
