import MainLayout from "@/components/layout/MainLayout";
import { useTranslation } from "react-i18next";
import { Cat } from "@/components/threejs/Cat";
import TextTyping from "@/components/TextTyping";
import Section from "@/components/homepage/Section/Section";
import { languages } from "../../public/locales/languages";
import { language } from "@/types/languages";
import Link from "next/link";

export default function Home() {
  const { t } = useTranslation();

  return (
    <MainLayout title={"Home"} position={"start"}>
      <div className="max-w-[960px] md:mx-w-[768px] sm:mx-w-[640px] pt-10">
        <Section
          text={{
            title: (
              <>
                <TextTyping text={t("welcome")} delay={125} />
                <span className="capitalize text-rose-500">
                  {" " + t("mott")}
                </span>
              </>
            ),
            titleClasses: "text-5xl font-bold text-center",
            description: t("start_learning"),
            descriptionClasses: "mt-4 text-2xl text-gray-300 text-center",
          }}
          media={{
            threeJSModel: <Cat scale={1} position={[0, -1.5, 0]} />,
            animationLink: "",
          }}
        />

        <section className="choose_language pt-[50px] pb-[50px] h-[300px] w-[100%]">
          <h1 className="text-4xl mb-[40px] text-center">
            {t("choose_lang_for_ed")}
          </h1>

          <div className="languages flex justify-center items-center">
            {languages.map((l: language) => {
              return (
                <Link
                  href={`/lessons/${l.code}`}
                  className="cursor-pointer"
                  key={l.code}
                >
                  <img
                    className="hover:scale-125 transition duration-[.3s] w-[200px] h-[100px]"
                    src={l.icon}
                    alt=""
                  />
                  <p className="text-center">{t(l.code)}</p>
                </Link>
              );
            })}
          </div>
        </section>

        <Section
          rowReverse={true}
          text={{
            title: t("fast_free_effective"),
            titleClasses: "text-5xl text-rose-500 font-bold",
            description: t("fast_free_effective_desc"),
          }}
          media={{
            threeJSModel: "",
            animationLink:
              "https://lottie.host/af874c2e-a13e-427a-874b-4621f46cd538/brWnegri1G.json",
          }}
        />

        <Section
          text={{
            title: t("connect_with_world"),
            titleClasses: "text-5xl text-rose-500 font-bold",
            description: t("connect_with_world_desc"),
          }}
          media={{
            threeJSModel: "",
            animationLink:
              "https://lottie.host/6ca29bd2-f926-4f31-986d-db93a686f841/clMVFsyjJc.json",
          }}
        />
      </div>
    </MainLayout>
  );
}
