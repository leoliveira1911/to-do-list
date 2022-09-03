import React from "react";
import { HomeIcon, UsersIcon } from "../../assets/icons/index"
import { Link } from 'react-router-dom'

export default props =>
    <aside className="nav bg-purple-600 text-white">
        <nav className="menu">

            <Link to='/' className="flex p-3 hover:bg-gradient-to-r from-purple-600 to-purple-900">
                {HomeIcon(3)} Início
            </Link>
            <Link to='/users' className="flex p-3 hover:bg-gradient-to-r from-purple-600 to-purple-900">
                {UsersIcon(3)} Usuários
            </Link>

        </nav>
    </aside>