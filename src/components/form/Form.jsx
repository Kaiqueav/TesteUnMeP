import { useState } from "react";
import { Task } from "../task/Task";
export const Form = () => {
    
    const [todos, setTodos] = useState([]);
// função para envio de tarefas
  const handleSubmit = (event) => {
    event.preventDefault();

    const title = event.target.elements.title.value;
    const description = event.target.elements.description.value;
    const dueDate = event.target.elements.dueDate.value;
// criando objeto a ser renderizado
    setTodos([
      ...todos,
      {
        id: Date.now(),
        title,
        description,
        dueDate,
        completed: false,
      },
    ]);

    event.target.reset(); // Limpando os campos do formulário após o envio
  };

  const handleToggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  }
  return (
    <>
    <div className="p-4 text-center ">
        <h1 className="text-sky-700  font-bold text-3xl">Planeje Seu Dia</h1>
        <p className="mt-4 text-slate-500 font-semibold">Mantenha-se Organizado e Focado em suas tarefas</p>
        
    </div>
    <form className="p-6 b-2  flex flex-col w-[120px]
     md:bg-slate-200 md:h-[400px] md:w-[390px] md:p-6 md:ml-[25%] lg:ml-[36%] " 
      onSubmit={handleSubmit}   >
            <span className="font-bold ml-32 text-2xl text-slate-500  md:ml-30 ">Titulo</span>
            <input  className="m-6 w-[280px] rounded-md" type="text" name="title" placeholder="Digite O titulo"    />
            <span className="font-bold ml-28 text-2xl text-slate-500   md:ml-30  ">Descrição</span>
            <input  className="m-6 w-[280px] rounded-md" type="text" name="description" placeholder="Descrição da tarefa" />
            <span className="font-bold ml-32 text-2xl text-slate-500  md:ml-30  ">Data</span>
            <input  className="m-6 w-[280px] rounded-md" type="date" name="dueDate" placeholder="Data  que deve ser executada" />

            <button className="bg-sky-500 ml-[98px] font-semibold w-[120px] text-white rounded-md p-2 hover:bg-sky-700" type="submit">
            Criar Tarefa
            </button>
    </form>
    <ul className="mt-6 ">
        {todos.map((todo) => (
          <Task
            key={todo.id}
            todo={todo}
            onToggleComplete={handleToggleComplete}
            onDelete={handleDelete}
          />
        ))}
      </ul>
  </>
  )
}
