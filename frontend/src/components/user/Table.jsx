import React, { useState, useEffect, setState } from "react";
import { DeleteIcon, EditIcon } from '../../assets/icons/index'


export default function Table(props) {


    function renderTable(tasks) {


        return (
            tasks?.map((task, index) => {
                const check = task.concluded === 'true' ? true : false
                return (

                    <tr key={index} className={`${index % 2 == 0 ? 'bg-purple-500' : 'bg-purple-600'}`}>
                        <td className={`${task.concluded === 'true' ? 'line-through' : ''}`} >{task.name}</td>
                        <td className={`${task.concluded === 'true' ? 'line-through' : ''}`}>{task.description}</td>
                        <td className={`${task.concluded === 'true' ? 'line-through' : ''}`}>{task.deadline}</td>
                        {/* {task.concluded === 'true' ? ( */}
                        <td className="py-2 "><input type={'checkbox'} checked={check} onChange={() => { props.check(task); console.log('CHEKBOX EM TABLE') }} /></td>
                        {/* ) : <td className="py-2 "><input type={'checkbox'} onChange={() => { props.check(task) }} /></td>} */}
                        <td className="table-cell">
                            <button className="" onClick={() => props.del(task.id)}>
                                {DeleteIcon}
                            </button>
                            <button className="" onClick={() => props.update(task)}>
                                {EditIcon}
                            </button>
                        </td>
                    </tr>
                )
            })
        )
    }
    function counter() {
        let done = 0
        let total = 0

        props.tasks?.map((task) => {
            if (task.concluded === 'true') {
                done = done + 1
                total = total + 1
            } else {
                total = total + 1
            }
        })

        return { total, done }
    }


    return (

        <table className={`
    bg-purple-700 m-3 text-center rounded-lg overflow-hidden w-5/6
    `}>
            <thead >
                <tr >
                    <td className="p-3">Tarefa</td>
                    <td className="p-3">Descrição</td>
                    <td className="p-3">Prazo</td>
                    <td className="p-3">Concluída</td>
                    <td className="p-3">Ação</td>
                </tr>
            </thead>
            <tbody>
                {renderTable(props.tasks)}
            </tbody>
            <tfoot >
                <tr className="rounded-lg">
                    Progresso: {counter().done} /  {counter().total}
                </tr>
            </tfoot>
        </table>
    )




}
