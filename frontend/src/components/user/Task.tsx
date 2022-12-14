import React from "react";
import Main from "../template/Main.tsx";
import Table from "./Table.tsx";
import { TasksIcon } from "../../assets/icons";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const headerProps = {
  icon: TasksIcon(8),
  title: "Tarefas",
  subtitle: "Cadastro de Tarefas: Incluir, Listar, Alterar e Excluir ",
};

export default function User() {
  const [tasks, setTasks] = useState([]);
  const [addTasks, setAddTasks] = useState(false);
  const [updateTasks, setUpdateTasks] = useState(false);

  async function getTasks() {
    console.log("GET TASKS NA ÁREA, BEATCHES");
    axios.get("http://localhost:3002/api/get").then((resp) => {
      setTasks(resp.data);
    });
  }

  const [state, setState] = useState({
    name: "",
    description: "",
    deadline: "",
    concluded: "",
    id: "",
  });

  function updateField(e) {
    const task = { ...state };
    task[e.target.name] = e.target.value;
    setState(task);
  }

  async function save() {
    if (
      state.name === "" &&
      state.description === "" &&
      state.deadline === ""
    ) {
      return;
    } else {
      await axios.post("http://localhost:3002/api/create", {
        name: state.name,
        description: state.description,
        deadline: state.deadline,
        concluded: "false",
      });
      getTasks();
    }
  }

  function cancel(e) {
    e.preventDefault();
    setState({
      name: "",
      description: "",
      deadline: "",
      concluded: "",
      id: "",
    });
    setAddTasks(false);
    setUpdateTasks(false);
  }

  async function del(e) {
    console.log(e);
    await axios.delete(`http://localhost:3002/api/delete/${e}`);
    getTasks();
  }

  async function update() {
    await axios.post("http://localhost:3002/api/update", {
      name: state.name,
      description: state.description,
      deadline: state.deadline,
      concluded: state.concluded,
      id: state.id,
    });
    getTasks();
  }

  function addTask() {
    addTasks === true ? setAddTasks(false) : setAddTasks(true);
    setUpdateTasks(false);
    setState({
      name: "",
      description: "",
      deadline: "",
      concluded: "",
      id: "",
    });
  }

  function updateTask(task) {
    updateTasks === true ? setUpdateTasks(false) : setUpdateTasks(true);
    setState({
      name: task.name,
      description: task.description,
      deadline: task.deadline,
      concluded: task.concluded,
      id: task.id,
    });
    setAddTasks(false);
  }
  async function checkTask(task) {
    console.log("CHECKBOX EM TASK");
    await axios.post("http://localhost:3002/api/update", {
      name: task.name,
      description: task.description,
      deadline: task.deadline,
      concluded: task.concluded === "true" ? "false" : "true",
      id: task.id,
    });
    getTasks();
  }
  useEffect(() => {
    getTasks();
  }, []);

  function renderFormAdd() {
    return (
      <div className="flex flex-col items-center">
        <h1 className="font-semibold text-lg text-center mt-3">
          Adicionar Tarefa
        </h1>
        <form>
          <div
            className={`
                            flex flex-col p-1 font-semibold 
                        `}
          >
            <label htmlFor="name"> Tarefa </label>
            <input
              placeholder="Tarefa"
              className={`text-black rounded-md px-2 py-1`}
              required
              value={state.name}
              onChange={(e) => updateField(e)}
              name="name"
            />
          </div>

          <div
            className={`
                            flex flex-col p-1 font-semibold
                        `}
          >
            <label htmlFor="description"> Descrição </label>
            <input
              placeholder="Descrição"
              className={`text-black rounded-md px-2 py-1`}
              value={state.description}
              onChange={(e) => updateField(e)}
              name="description"
            />
          </div>

          <div
            className={`
                            flex flex-col p-1 font-semibold
                        `}
          >
            <label htmlFor="deadline"> Prazo </label>
            <input
              placeholder="Prazo"
              className={`text-black rounded-md px-2 py-1`}
              value={state.deadline}
              onChange={(e) => updateField(e)}
              name="deadline"
            />
          </div>

          {/*  <div className={`
                            flex flex-col p-1 font-semibold
                        `}>
                        <label htmlFor='concluded'> Concluído </label>
                        <input placeholder="Concluído" className={`text-black rounded-md px-2 py-1`} value={state.concluded} onChange={e => updateField(e)} name="concluded" />
                    </div> */}
          <div></div>
        </form>
        <div>
          <button
            onClick={(e) => {
              save();
              cancel(e);
              getTasks();
            }}
          >
            Salvar
          </button>
          <button onClick={(e) => cancel(e)}>Cancelar</button>
        </div>
      </div>
    );
  }
  function renderFormUpdate() {
    return (
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-semibold text-lg text-center mt-3">
          Editar Tarefa
        </h1>
        <form>
          <div
            className={`
                            flex flex-col p-1 font-semibold 
                        `}
          >
            <label htmlFor="name"> Despesa </label>
            <input
              placeholder="Despesa"
              className={`text-black rounded-md px-2 py-1`}
              required
              value={state.name}
              onChange={(e) => updateField(e)}
              name="name"
            />
          </div>

          <div
            className={`
                            flex flex-col p-1 font-semibold
                        `}
          >
            <label htmlFor="description"> Descrição </label>
            <input
              placeholder="Descrição"
              className={`text-black rounded-md px-2 py-1`}
              value={state.description}
              onChange={(e) => updateField(e)}
              name="description"
            />
          </div>

          <div
            className={`
                            flex flex-col p-1 font-semibold
                        `}
          >
            <label htmlFor="deadline"> Prazo </label>
            <input
              placeholder="deadline"
              className={`text-black rounded-md px-2 py-1`}
              value={state.deadline}
              onChange={(e) => updateField(e)}
              name="deadline"
            />
          </div>

          {/*   <div className={`
                            flex flex-col p-1 font-semibold
                        `}>
                        <label htmlFor='concluded'> Concluído </label>
                        <input placeholder="Concluído" className={`text-black rounded-md px-2 py-1`} value={state.concluded} onChange={e => updateField(e)} name="concluded" />
                    </div> */}
          <div></div>
        </form>
        <div>
          <button
            onClick={(e) => {
              update();
              cancel(e);
              getTasks();
            }}
          >
            Salvar
          </button>
          <button onClick={(e) => cancel(e)}>Cancelar</button>
        </div>
      </div>
    );
  }
  return (
    <Main {...headerProps}>
      <div
        className={`
            flex flex-col items-center justify-center
            `}
      >
        <Table
          tasks={tasks}
          update={(task) => updateTask(task)}
          del={(e) => {
            del(e);
            getTasks();
          }}
          check={(e) => {
            checkTask(e);
            getTasks();
          }}
        />

        {addTasks === true ? renderFormAdd() : null}
        {updateTasks === true ? renderFormUpdate() : null}
        {updateTasks === false && addTasks === false ? (
          <button onClick={() => addTask()}>Adicionar Tarefa</button>
        ) : null}
      </div>
    </Main>
  );
}
