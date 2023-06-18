import { Inter } from "next/font/google";

import { useEffect, useState } from "react";
import { Box } from "../../components/Box/Box";
import { Button } from "../../components/Button/Button";
import { Loader } from "@/components/Loader/Loader";

const inter = Inter({ subsets: ["latin"] });

type UserProps = {
  couponCode: string | null;
  creditCardCPF: string;
  creditCardCVV: string;
  creditCardExpirationDate: string;
  creditCardHolder: string;
  creditCardNumber: string;
  gateway: string;
  id: number;
  installments: number;
  offerId: number;
  userId: number;
};

export default function Success() {
  const [user, setUser] = useState<UserProps>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const apiUrl = process.env.NEXT_PUBLIC_API_SUBSCRIPTION_URL || "";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const jsonData = await response.json();

        setUser(jsonData);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to fetch data. Please try again later.");
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h2>{error}</h2>
      </div>
    );
  }

  return (
    <main
      className={`flex flex-col justify-center items-center p-24 gap-[4.48rem] ${inter.className}`}
    >
      <section className="flex flex-col items-center gap-[0.68rem] ">
        <img
          src="/assets/icon-success.png"
          width="60px"
          alt="Confirmation mark"
        />

        <h2 className="mt-[0.43rem]">Parabéns!</h2>

        <p className=" text-lightGray w-[12.5rem] text-center leading-[20px]">
          Sua assinatura foi realizada com sucesso.
        </p>
      </section>

      <Box variation="shadow" className="flex flex-col p-[0.938rem]">
        <Box
          variation="default"
          bg="#F4F3F6"
          width={19.37}
          className="flex items-center justify-between p-[20px]"
        >
          <img src="/assets/star-icon.svg" alt="Star icon" />

          <div className="flex flex-col items-end">
            <p>Anual | Parcelado</p>
            <p className="text-[0.87rem]">R$ 479,90 | 10x R$ 47,99</p>
          </div>
        </Box>

        <section className="flex flex-col w-[17.5rem] gap-[1.62rem] pt-[1.12rem] mb-[0.62rem]">
          <div className="flex justify-between">
            <p className="text-lightGray">E-mail</p>
            <p>fulano@cicrano.com.br</p>
          </div>

          <div className="flex justify-between">
            <p className="text-lightGray">CPF</p>
            <p>
              {user?.creditCardCPF.replace(
                /^(\d{3})(\d{3})(\d{3})(\d{2})$/,
                "$1.$2.$3-$4"
              ) ?? ""}
            </p>
          </div>
        </section>
      </Box>

      <section className="flex flex-col w-[19.37rem] gap-[0.62rem]">
        <Button variation="secondary" weight={700}>
          <small>Gerenciar assinatura</small>
        </Button>

        <Button variation="primary" weight={700}>
          <small>IR PARA A HOME</small>
        </Button>
      </section>
    </main>
  );
}
