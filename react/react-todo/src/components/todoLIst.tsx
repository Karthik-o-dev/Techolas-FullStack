import type { TodoObj } from "../types/todo";

type Props = {
    item: TodoObj;
    todoList: TodoObj[];
    setTodoList: React.Dispatch<React.SetStateAction<TodoObj[]>>
}

export const TodoList = ({ item, todoList, setTodoList }: Props) => {
    return <div className="p-3 rounded-md flex flex-col shadow gap-2 shadow-black/30">
        <span>{item.title}</span>
        <span>{item.is_completed ? "Completed" : "pending"}</span>
        <span>{item.created_at}</span>
        <span>{item.updated_at}</span>
        <div className="flex flex-col gap-1">
            <div className="flex gap-1">
                <button className="bg-blue-400 cursor-pointer text-white p-2 px-4 rounded-md w-full">Edit Todo</button>
                <button className="bg-red-400 cursor-pointer text-white p-2 px-4 rounded-md w-full" onClick={() => { handleDelete(index) }}>Delete Todo</button>
            </div>
            <div>
                <button className="bg-emerald-400 cursor-pointer text-white p-2 px-4 rounded-md w-full">Completed</button>
            </div>
        </div>
    </div>
} 