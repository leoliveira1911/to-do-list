import React from "react";
import { HomeIcon, TasksIcon } from "../../assets/icons/index"
import { Link } from 'react-router-dom'

const Nav = () => {
    return (

        <aside className="nav bg-purple-600 text-white">
            <nav className="menu">

                <Link to='/' className="flex p-3 hover:bg-gradient-to-r from-purple-600 to-purple-900">
                    {HomeIcon(3)} Início
                </Link>
                <Link to='/users' className="flex p-3 hover:bg-gradient-to-r from-purple-600 to-purple-900">
                    {TasksIcon(3)} Tarefas
                </Link>

            </nav>
        </aside>
    )
}
export default Nav