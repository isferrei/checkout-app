import Image from "next/image";
import { Inter } from "next/font/google";
import { Form } from "@/components/Form";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-row items-center p-24 ${inter.className}`}
    >
      <section className="flex flex-col">
        <h2>Estamos quase lá!</h2>
        <p>Insira seus dados de pagamento abaixo:</p>
        <Form />
      </section>
      <section className="flex flex-col">
        <h2>Confira o seu plano:</h2>
        <small>fulano@cicrano.com.br</small>
      </section>
    </main>
  );
}
