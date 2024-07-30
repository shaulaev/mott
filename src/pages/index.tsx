import MainLayout from "@/components/layout/MainLayout";
import { useTranslation } from "react-i18next";
import DinosaurWrapper from "@/components/threejs/DinosaurWrapper";

export default function Home() {
  const {t} = useTranslation()

  return (
    <MainLayout position={"center"} header={false} footer={false}>
      <div className="container flex justify-center items-center text-center mx-auto p-4 select-none">
        <div>
          <h1 className="text-5xl font-bold">
            {t("welcome") + " "}
            <span className="capitalize text-rose-500">{t("mott")}</span>
          </h1>
          <p className="mt-4 text-2xl text-gray-300">{t("start_learning")}</p>
        </div>
        <div className="my-8 w-100 h-[350px]">
          <DinosaurWrapper />
        </div>
      </div>
    </MainLayout>
  );
}
