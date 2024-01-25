export const Task = ({ todo, onToggleComplete, onDelete }) => {
    const { title, description, dueDate, completed } = todo;

  return (
    <div className="p-2 w-full text-white bg-blue-950 border-border-blue-900 ">
      <div className="p-2 border-2 arredondado border-slate-500 flex flex-col" >
        <h1 className="font-bold text-xl"> {title} </h1>
        <p className="font-semibold text-md text-slate-500" > {description} </p>
        <span className="font-semibold text-md text-slate-500"> {dueDate} </span>
        <select  className="text-slate-500 w-[230px]" name="" id="">
          <option value="">pendete</option>
          <option value="">executando</option>
          <option value="">feita</option>
        </select>
      </div>
      <div className="p-2 font-bold mt-2 justify-center items-center flex flex-row">
        <button className="bg-sky-500 p-2 rounded-md hover:bg-sky-700" onClick={() => onToggleComplete(todo.id)}>
          {completed ? 'Desmarcar' : 'Marcar como Concluída'}
        </button>
        <button className=" bg-sky-500 p-2 rounded-md w- ml-4 hover:bg-sky-700   " onClick={() => onDelete(todo.id)}>
          Apagar
        </button>
      </div>
    </div>
  );

}