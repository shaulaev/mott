import React from 'react'

interface props {
  children: string;
  type?: 'button' | 'submit',
  size?: "xs" | "sm" | "base" | "lg" | "xl";
  bgColor?: string;
  hoverColor?: string;
  click?: React.MouseEventHandler<HTMLButtonElement>;
  classes?: string;
}

const Button: React.FC<props> = ({
  children,
  type = 'button',
  size = "base",
  bgColor = "bg-rose-500",
  hoverColor = "hover:bg-rose-700",
  click,
  classes,
}) => {

  return (
    <button
      type={type}
      onClick={click}
      className={`${bgColor} ${hoverColor} ${classes} duration-200 text-white font-bold py-2 px-4 rounded-full flex items-center justify-center`}
    >
      <span className={`text-${size}`}>{children}</span>
    </button>
  );
};

export default Button