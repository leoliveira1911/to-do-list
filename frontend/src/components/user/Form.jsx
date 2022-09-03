import React, { Component } from 'react'
import { useState } from 'react';


const [name, setName] = useState('')
const [description, setDescription] = useState('')
const [deadline, setDeadline] = useState('')
const [concluded, setConcluded] = useState('')

export default class Form extends Component {

    render() {
        <form>
            <div className={`
                        flex flex-col p-1 font-semibold
                    `}>
                <label htmlFor='name'> Despesa </label>
                <input placeholder="Despesa" className={`text-black rounded-md px-2 py-1`} required value={name} onChange={e => { props.setName(e.target.value); setName(e.target.value) }} type="text" name="name" id="name" />
            </div>

            <div className={`
                        flex flex-col p-1 font-semibold
                    `}>
                <label htmlFor='description'> Descrição </label>
                <input placeholder="Descrição" className={`text-black rounded-md px-2 py-1`} value={description} onChange={e => { props.setDescription(e.target.value); setDescription(e.target.value) }} type="text" name="description" id="description" />
            </div>

            <div className={`
                        flex flex-col p-1 font-semibold
                    `}>
                <label htmlFor='deadline'> Prazo </label>
                <input placeholder="deadline" className={`text-black rounded-md px-2 py-1`} value={deadline} onChange={e => { props.setDeadline(e.target.value); setDeadline(e.target.value) }} type="text" name="deadline" id="deadline" />
            </div>

            <div className={`
                        flex flex-col p-1 font-semibold
                    `}>
                <label htmlFor='concluded'> Concluído </label>
                <input placeholder="Concluído" className={`text-black rounded-md px-2 py-1`} value={concluded} onChange={e => { props.setConcluded(e.target.value); setConcluded(e.target.value) }} type="text" name="concluded" id="concluded" />
            </div>
        </form>
    }
}


