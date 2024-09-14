import { ReactNode } from "react";

interface Props {
    title: ReactNode | string;
    titleClasses?: string;
    description: string;
    descriptionClasses?: string;
}

export const TextContent: React.FC<Props> = props => {

    const {title, titleClasses, description, descriptionClasses} = props

    return (
      <div className="md:w-[45%] md:text-start">
        <h1 className={titleClasses}>{title}</h1>
        <p className={descriptionClasses}>{description}</p>
      </div>
    );
};