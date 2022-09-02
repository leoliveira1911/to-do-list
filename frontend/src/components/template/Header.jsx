import React from "react";
import { HomeIcon } from '../../assets/icons/index'

export default props =>
    <header className="header hidden sm:flex flex-col justify-center px-2 bg-purple-600 text-white ">
        <h1 className="mt-3 flex items-center text-3xl">{props.icon}{props.title}</h1>
        <p className="mt-2 text-xl">{props.subtitle}</p>

    </header>