import React from "react";
import { DeleteIcon, EditIcon } from '../../assets/icons/index'

function renderTable(tasks) {
    console.log(tasks)
    return (
        tasks.map((task, index) => {
            return (

                <tr key={index} className={`${index % 2 == 0 ? 'bg-purple-400' : 'bg-purple-500'}`}>
                    <td>{task.name}</td>
                    <td>{task.description}</td>
                    <td>{task.deadline}</td>
                    <td>{task.concluded === false ? 'Não' : 'Sim'}</td>
                    <td className="flex justify-around ">
                        <button className="">
                            {DeleteIcon}
                        </button>
                        <button className="">
                            {EditIcon}
                        </button>
                    </td>
                </tr>
            )
        })
    )
}


export default (props) =>



    <table className={`
    bg-purple-600 m-3 text-center rounded-lg overflow-hidden 
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