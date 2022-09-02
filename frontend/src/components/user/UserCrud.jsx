import React, { Component } from 'react'
import Main from '../template/Main'
import { UsersIcon } from '../../assets/icons'

const headerProps = {
    icon: UsersIcon(8),
    title: "Usuários",
    subtitle: "Cadastro de Usuários: Incluir, Listar, Alterar e Excluir "

}

export default class UserCrud extends Component {
    render() {
        return (
            <Main {...headerProps}>
                CRUD Usuário
            </Main>
        )
    }
}