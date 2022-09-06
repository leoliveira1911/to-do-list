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

const tasksList = [
    {
        name: "asdasdasd",
        description: "asdasdasd",
        deadline: "asdasdasd",
        concluded: false
    },
    {
        name: "dasdasdasadsdas",
        description: "adsddadsdas",
        deadline: "assaddsadsasdasda",
        concluded: false
    },
    {
        name: "asdasdasdasdsaad",
        description: "adssdadsadsdsa",
        deadline: "sasdasdsdasads",
        concluded: false
    },
]

export default class TaskCrud extends Component {
    state = { ...initialState }

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


    renderForm() {
        return (
            <form>
                <div className={`
                        flex flex-col p-1 font-semibold 
                    `}>
                    <label htmlFor='name'> Despesa </label>
                    <input placeholder="Despesa" className={`text-black rounded-md px-2 py-1`} required value={this.state.task.name} onChange={e => this.updateField(e)} name="name" />
                </div>

                <div className={`
                        flex flex-col p-1 font-semibold
                    `}>
                    <label htmlFor='description'> Descrição </label>
                    <input placeholder="Descrição" className={`text-black rounded-md px-2 py-1`} value={this.state.task.description} onChange={e => this.updateField(e)} name="description" />
                </div>

                <div className={`
                        flex flex-col p-1 font-semibold
                    `}>
                    <label htmlFor='deadline'> Prazo </label>
                    <input placeholder="deadline" className={`text-black rounded-md px-2 py-1`} value={this.state.task.deadline} onChange={e => this.updateField(e)} name="deadline" />
                </div>

                <div className={`
                        flex flex-col p-1 font-semibold
                    `}>
                    <label htmlFor='concluded'> Concluído </label>
                    <input placeholder="Concluído" className={`text-black rounded-md px-2 py-1`} value={this.state.task.concluded} onChange={e => this.updateField(e)} name="concluded" />
                </div>
                <div>
                    <button type='submit' onClick={(e) => this.save(e)}>Salvar</button>
                    <button onClick={(e) => this.cancel(e)} >Cancelar</button>
                    <button onClick={() => this.getTasks()} > Teste </button>
                </div>
            </form>
        )
    }

    render() {
        return (
            <Main {...headerProps}>
                <Table tasks={this.state.list} />
                {this.renderForm()}
            </Main>
        )
    }
}