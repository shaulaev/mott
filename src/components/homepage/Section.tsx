import React, { ReactNode } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import ThreeWrapper from "@/components/threejs/ThreeWrapper";

interface props {
  sectionClasses?: string;
  sectionExtraClasses?: string;
  colReverse?: boolean;
  rowReverse?: boolean;
  title: ReactNode | string;
  titleClasses?: string;
  description: string;
  descriptionClasses?: string;
  threeJSModel?: ReactNode;
  animationLink?: string;
}

const Section: React.FC<props> = ({
  colReverse = false,
  rowReverse = false,
  sectionClasses = `container ${colReverse ? "flex-col-reverse" : "flex-col"} ${
    rowReverse ? "md:flex-row-reverse" : "md:flex-row"
  } flex justify-between items-center text-center mx-auto p-4`,
  sectionExtraClasses = "",
  threeJSModel,
  animationLink = "",
  title,
  titleClasses = "text-5xl text-rose-500 font-bold",
  description,
  descriptionClasses = "mt-4 text-gray-300 text-base",
}) => {
  return (
    <section className={sectionClasses + " " + sectionExtraClasses}>
      {threeJSModel && (
        <div className="my-8 md:mx-0 mx-auto w-1/2 md:w-1/3 h-[200px] sm:h-[350px]">
          <ThreeWrapper
            orbit={{
              autoRotate: true,
              autoRotateSpeed: 1.2,
              minPolarAngle: 1.2,
              maxPolarAngle: 1.2,
              enableZoom: false,
            }}
          >
            {threeJSModel}
          </ThreeWrapper>
        </div>
      )}
      {animationLink && (
        <div className="my-8 md:mx-0 mx-auto w-1/2 md:w-1/3">
          <Player
            src={animationLink}
            className="h-[300px] max-w-[300px]"
            autoplay
            loop
          ></Player>
        </div>
      )}
      <div className="md:w-[45%] md:text-start">
        <h1 className={titleClasses}>{title}</h1>
        <p className={descriptionClasses}>{description}</p>
      </div>
    </section>
  );
};

export default Section;
