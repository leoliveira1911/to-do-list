import React, { Component } from 'react'
import Main from '../template/Main'
import { UsersIcon } from '../../assets/icons'
import Table from './Table'
import Form from './Form'

const headerProps = {
    icon: UsersIcon(8),
    title: "Usuários",
    subtitle: "Cadastro de Usuários: Incluir, Listar, Alterar e Excluir "

}

const tasks = [
    {
        name: "Realizar CRUD",
        description: "Desenvolver uma ToDoList em React",
        deadline: "10/12",
        concluded: 'x'

    },

    {
        name: "Procurar igreja",
        description: "Pesquisar igrejas pequenas e com datas disponíveis",
        deadline: "10/12",
        concluded: 'x'

    },

]

export default class UserCrud extends Component {
    render() {
        return (
            <Main {...headerProps}>
                <Table tasks={tasks} />
                <Form />
            </Main>
        )
    }
}