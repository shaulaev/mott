import React, { ReactNode } from "react";
import { MediaContent } from "./MediaContent";
import { TextContent } from "./TextContent";

interface IText {
  title: ReactNode | string;
  titleClasses?: string;
  description: string;
  descriptionClasses?: string;
};

interface IMedia {
  threeJSModel?: ReactNode;
  animationLink?: string;
};

interface props {
  sectionClasses?: string;
  sectionExtraClasses?: string;
  colReverse?: boolean;
  rowReverse?: boolean;
  text: IText;
  media: IMedia;
}

const Section: React.FC<props> = ({
  colReverse = false,
  rowReverse = false,
  sectionClasses = `container ${colReverse ? "flex-col-reverse" : "flex-col"} ${
    rowReverse ? "md:flex-row-reverse" : "md:flex-row"
  } flex justify-between items-center text-center mx-auto p-4`,
  sectionExtraClasses = "",
  media,
  text
}) => {
  return (
    <section className={sectionClasses + " " + sectionExtraClasses}>
      <MediaContent {...media}  />
      <TextContent {...text}  />
    </section>
  );
};

export default Section;
