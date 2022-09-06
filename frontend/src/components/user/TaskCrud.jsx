import React, { Component, useEffect } from 'react'
import Main from '../template/Main'
import { UsersIcon } from '../../assets/icons'
import Table from './Table'
import axios from 'axios'


const headerProps = {
    icon: UsersIcon(8),
    title: "Usuários",
    subtitle: "Cadastro de Usuários: Incluir, Listar, Alterar e Excluir "
}

const initialState = {
    task: {
        name: "",
        description: "",
        deadline: "",
        concluded: false
    },
    list: []

}

export default class TaskCrud extends Component {


    constructor(name, description, deadline, concluded, id) {
        super()
        this.name = name
        this.description = description
        this.deadline = deadline
        this.concluded = concluded
        this.id = id
    }

    get name() {
        return this.name
    }
    get description() {
        return this.description
    }
    get deadline() {
        return this.deadline
    }
    get concluded() {
        return this.concluded
    }
    get id() {
        return this.id
    }
    set name(name) {
        this.name = name
    }
    set description(description) {
        this.description = description
    }
    set deadline(deadline) {
        this.deadline = deadline
    }
    set concluded(concluded) {
        this.concluded = concluded
    }
    set id(id) {
        this.id = id
    }


    updateField(e) {
        const task = { ...this.state.task }
        task[e.target.name] = e.target.value
        this.setState({ task })
    }

    save(e) {
        e.preventDefault()

        console.log(this.state.task)
        this.cancel(e)
    }

    cancel(e) {
        e.preventDefault()

        this.setState({ task: initialState.task })
    }




}