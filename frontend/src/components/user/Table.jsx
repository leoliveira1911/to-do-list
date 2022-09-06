import React, { useState, useEffect } from "react";
import { DeleteIcon, EditIcon } from '../../assets/icons/index'


export default function Table(props) {

    function renderTable(tasks) {
        console.log(tasks)
        return (
            tasks?.map((task, index) => {

                return (

                    <tr key={index} className={`${index % 2 == 0 ? 'bg-purple-500' : 'bg-purple-600'}`}>
                        <td className="py-2 ">{task.name}</td>
                        <td className="py-2 ">{task.description}</td>
                        <td className="py-2 ">{task.deadline}</td>
                        <td className="py-2 ">{task.concluded}</td>
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
                <tr className="rounded-lg"></tr>
            </tfoot>
        </table>
    )




}
