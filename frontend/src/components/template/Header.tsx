import React from "react";

interface HeaderProps {
  subtitle: string;
  icon: () => void;
  title: string;
}

const Header = (props: HeaderProps) => {
  return (
    <header className="header hidden sm:flex flex-col justify-center px-2 bg-purple-600 text-white ">
      <h1 className="mt-3 flex items-center text-3xl">
        {props.icon}
        {props.title}
      </h1>
      <p className="mt-2 text-xl">{props.subtitle}</p>
    </header>
  );
};

export default Header;
