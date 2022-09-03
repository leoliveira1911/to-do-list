import React from "react";
import { HomeIcon } from "../../assets/icons";
import Main from "../template/Main";

export default props =>
    <Main icon={HomeIcon(8)} title='Início' subtitle='CRUD MySQL'>
        <div className="text-2xl">Bem vindo</div>
        <hr />
        <p className="mb-0"> Sistema CRUD em React com MySQL</p>
    </Main>