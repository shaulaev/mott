import MainLayout from "@/components/layout/MainLayout";
import { useTranslation } from "react-i18next";
import { Canvas } from "@react-three/fiber";
import Floor from "@/components/threejs/Floor";
import LightBulb from "@/components/threejs/LightBulb";
import Box from "@/components/threejs/Box";

export default function Home() {
  const {t} = useTranslation()

  return (
    <MainLayout position={"center"} header={false} footer={false}>
      <div className="container flex justify-center items-center text-center mx-auto p-4">
        <div>
          <h1 className="text-5xl font-bold">
            {t("welcome") + " "}
            <span className="capitalize text-rose-500">{t("mott")}</span>
          </h1>
          <p className="mt-4 text-2xl text-gray-300">{t("start_learning")}</p>
        </div>
        <div className="my-8 w-100 h-[300px]">
          {/* <img
            className="relative mx-auto h-full object-cover"
            src="/images/choose.svg"
            alt="Choose your language!"
          /> */}
          <Canvas
            shadows
            className={"bg-transparent"}
            camera={{
              position: [-6, 7, 7],
            }}
          >
            <ambientLight color={"white"} intensity={0.2} />
            <LightBulb position={[0, 3, 0]} />
            <Box rotateX={3} rotateY={0.2} />
            <Floor position={[0, -1, 0]} />
          </Canvas>
        </div>
      </div>
    </MainLayout>
  );
}
