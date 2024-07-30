import MainLayout from "@/components/layout/MainLayout";
import { useTranslation } from "react-i18next";
import DinosaurWrapper from "@/components/threejs/DinosaurWrapper";

export default function Home() {
  const {t} = useTranslation()

  return (
    <MainLayout position={"center"} footer={false}>
      <div className="container md:flex justify-center items-center text-center mx-auto p-4">
        <div className="my-8 md:w-1/3 h-[200px] sm:h-[350px]">
          <DinosaurWrapper />
        </div>
        <div>
          <h1 className="text-5xl font-bold">
            {t("welcome") + " "}
            <span className="capitalize text-rose-500 ">{t("mott")}</span>
          </h1>
          <p className="mt-4 text-2xl text-gray-300">{t("start_learning")}</p>
        </div>
      </div>
    </MainLayout>
  );
}
