import MainLayout from "@/components/layout/MainLayout";
import { useTranslation } from "react-i18next";
import ThreeWrapper from "@/components/threejs/ThreeWrapper";
import { Cat } from "@/components/threejs/Cat"
import TextTyping from "@/components/TextTyping";
import { Player } from "@lottiefiles/react-lottie-player";
import Section from "@/components/homepage/Section";


export default function Home() {
  const {t} = useTranslation()

  return (
    <MainLayout title={"Home"} position={"start"} footer={false}>
      
      <div className="max-w-[960px] md:mx-w-[768px] sm:mx-w-[640px]">
        <Section
          title={
            <>
              <TextTyping text={t("welcome")} delay={125} />
              <span className="capitalize text-rose-500">
                {" " + t("mott")}
              </span>
            </>
          }
          titleClasses="text-5xl font-bold text-center"
          description={t("start_learning")}
          descriptionClasses="mt-4 text-2xl text-gray-300 text-center"
          threeJSModel={<Cat scale={1} position={[0, -1.5, 0]} />}
        />

        <Section
          rowReverse={true}
          title={t("fast_free_effective")}
          titleClasses="text-5xl text-rose-500 font-bold"
          description={t("fast_free_effective_desc")}
          animationLink="https://lottie.host/af874c2e-a13e-427a-874b-4621f46cd538/brWnegri1G.json"
        />

        <Section
          title={t("connect_with_world")}
          titleClasses="text-5xl text-rose-500 font-bold"
          description={t("connect_with_world_desc")}
          animationLink="https://lottie.host/6ca29bd2-f926-4f31-986d-db93a686f841/clMVFsyjJc.json"
        />

      </div>
    </MainLayout>
  );
}
