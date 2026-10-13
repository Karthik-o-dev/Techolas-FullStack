import { useState } from "react"

export const TodoPage = () => {

    const [todo, setTodo] = useState<string>("")
    const [todoList, setTodoList] = useState<string[]>([])
    const [errorMessage, setErrorMessage] = useState<string>("")

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTodo(event.target.value.replaceAll(" ", "_"))
    }

    const handleAddTodo = () => {
        if (todo === "") return setErrorMessage("Task required")
        if (todo.length < 10) return setErrorMessage("min 10 character required");
        setTodoList([...todoList, todo]);
        setTodo("")
        setErrorMessage("")
    }

    const handleDelete = (index: number) => {
        const data = todoList.filter((_, idx) => {
            return index != idx
        });
        setTodoList(data);
    }

    return <div className="font-mono flex flex-col items-center">
        <h1 className="font-bold text-3xl mt-3 underline">Todo List</h1>
        <div className="mt-5 flex flex-col gap-3 w-full max-w-lg shadow shadow-black/30 rounded-md p-5">
            <input type="text" className="p-2 border-2 border-emerald-800 rounded-md " placeholder="Eg: Buy something..." name="todo_input" onChange={handleChange} value={todo} />
            {errorMessage && <span>{errorMessage}</span>}
            <button className="bg-emerald-800 cursor-pointer text-white p-2 rounded-md" onClick={handleAddTodo}>Add Todo</button>
        </div>
        <div className="w-full max-w-lg">
            {

                todoList.map((item, index) => {
                    return <div key={index}>{item} - <button className="bg-red-400 text-white p-2 px-3 rounded-4xl" onClick={() => { handleDelete(index) }}>Delete Todo</button></div>
                })
            }
        </div>
    </div>
}