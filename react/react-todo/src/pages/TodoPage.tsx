import { useState } from "react"
import { TodoList } from "../components/todoLIst";
import type { TodoObj } from "../types/todo";

export const TodoPage = () => {

    const [todo, setTodo] = useState<string>("")
    const [todoList, setTodoList] = useState<TodoObj[]>([])
    const [errorMessage, setErrorMessage] = useState<string>("")

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTodo(event.target.value)
    }

    const currentTime = new Date().toLocaleString("en-IN");

    const handleAddTodo = () => {
        if (todo.trim() === "") return setErrorMessage("Task required")
        if (todo.trim().length < 10) return setErrorMessage("min 10 character required");
        const todoObj: TodoObj = {
            id: crypto.randomUUID,
            title: todo,
            is_completed: false,
            created_at: currentTime,
            updated_at: currentTime
        }
        setTodoList([...todoList, todoObj]);
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
        {
            todoList.length === 0 ? <div className="mt-5 text-center w-full max-w-lg">List is empty</div> : <>
                <h2 className=" text-start w-full max-w-lg mt-4">Total Todos: {todoList.length}</h2>
                <div className="mt-5 flex flex-col gap-3 w-full max-w-lg rounded-md p-5">
                    {

                        todoList.map((item) => {
                            return <TodoList item={item} key={item.id} todoList={todoList} setTodoList={setTodoList} />
                        })
                    }
                </div>
            </>
        }
    </div >
}