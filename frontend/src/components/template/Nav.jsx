import React from "react";
import { HomeIcon, UsersIcon } from "../../assets/icons/index"

export default props =>
    <aside className="nav bg-purple-600 text-white">
        <nav className="menu">

            <a href='/' className="flex p-3 hover:bg-gradient-to-r from-purple-600 to-purple-900">
                {HomeIcon(3)} Início
            </a>
            <a href='/users' className="flex p-3 hover:bg-gradient-to-r from-purple-600 to-purple-900">
                {UsersIcon(3)} Usuários
            </a>

        </nav>
    </aside>