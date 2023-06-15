import Image from "next/image";
import { Inter } from "next/font/google";
import { Input } from "@/components/Input";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`flex flex-row items-center p-24 ${inter.className}`}>
      <section className="flex flex-col">
        <h2>Estamos quase lá!</h2>
        <p>Insira seus dados de pagamento abaixo:</p>
        <Input
          label="Número do cartão"
          mask="99/99/9999"
          placeholder="DD/MM/AAAA"
          onChange={() => {}}
        />
      </section>
      <section className="flex flex-col">
        <h2>Confira o seu plano:</h2>
        <small>fulano@cicrano.com.br</small>
      </section>
    </main>
  );
}
