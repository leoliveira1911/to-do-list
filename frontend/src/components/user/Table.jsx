import React from "react";

function renderTable(tasks) {
    console.log(tasks)
    return (
        tasks.map((task, index) => {
            return (

                <tr key={index} className={`${index % 2 == 0 ? 'bg-purple-400' : 'bg-purple-500'}`}>
                    <td>{task.name}</td>
                    <td>{task.description}</td>
                    <td>{task.deadline}</td>
                    <td>{task.concluded}</td>
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
            </tr>
        </thead>
        <tbody>
            {renderTable(props.tasks)}
        </tbody>
        <tfoot >
            <tr className="rounded-lg"></tr>
        </tfoot>
    </table>