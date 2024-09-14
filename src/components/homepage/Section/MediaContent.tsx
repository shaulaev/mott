import { ReactNode } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import ThreeWrapper from "@/components/threejs/ThreeWrapper";

interface Props {
    threeJSModel?: ReactNode;
    animationLink?: string;
}

export const MediaContent: React.FC<Props> = props => {

    const {threeJSModel, animationLink} = props

    return (
      <>
        {threeJSModel ? (
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
        ) : (
          <div className="my-8 md:mx-0 mx-auto w-1/2 md:w-1/3">
            <Player
              // @ts-ignore
              src={animationLink}
              className="h-[300px] max-w-[300px]"
              autoplay
              loop
            ></Player>
          </div>
        )}
      </>
    );
};