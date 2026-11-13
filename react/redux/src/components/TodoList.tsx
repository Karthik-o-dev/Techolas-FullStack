import { useState } from "react";
import type { Todo } from "../types/todo"
import { useAppDispatch } from "../hooks/useRedux";
import { removeTodo, updateTodo } from "../Redux/slice/TodoSlice";

type Props = {
    item: Todo;
}

export const TodoList = ({ item }: Props) => {

    const [editItem, setEditItem] = useState<Todo | null>(null);
    const [editInput, setEditInput] = useState<string | undefined>(editItem?.title);
    const dispatch = useAppDispatch();

    const handleRemove = (id: string) => {
        dispatch(removeTodo({ id }));
    }

    const handleMarkAsCompleted = (id: string) => {
        dispatch(updateTodo({ id, is_completed: true }))
    }

    const handleEdit = (item: Todo) => {
        setEditItem(item);
    }

    const handleEditSubmit = (id: string, title: string | undefined) => {
        dispatch(updateTodo({ id, title }))
        setEditItem(null);
    }

    return <div className="p-3 rounded-md flex flex-col shadow gap-2 shadow-black/30">
        <span>{item.id === editItem?.id ? <>
            <input type="text" className="p-2 outline-0 rounded-md border-2 w-full border-emerald-600" placeholder="Eg: sjdgfk" value={editInput} onChange={(e) => setEditInput(e.target.value)} />
        </> : item.title}</span>
        <span>Status: {item.is_completed ? "Completed" : "Pending"}</span>
        <span>Created At: {item.created_at}</span>
        <span>Updated At: {item.updated_at}</span>
        <div className="flex gap-1 flex-col">
            <div className="flex gap-1">
                {
                    !item.is_completed && (editItem?.id === item.id ? <button className="bg-purple-600 w-full p-2 px-4 rounded-sm text-white cursor-pointer" onClick={() => handleEditSubmit(item.id, editInput)}>Update</button> : <button onClick={() => {
                        handleEdit(item)
                        setEditInput(item.title);
                    }} className="bg-blue-600 w-full p-2 px-4 rounded-sm text-white cursor-pointer">Edit Todo</button>)
                }
                <button onClick={() => handleRemove(item.id)} className="bg-red-600 w-full p-2 px-4 rounded-sm text-white cursor-pointer">Delete Todo</button>
            </div>
            {
                !item.is_completed && <div>
                    <button onClick={() => handleMarkAsCompleted(item.id)} className="bg-emerald-600 w-full p-2 px-4 rounded-sm text-white cursor-pointer">Mark as Completed</button>
                </div>
            }
        </div>
    </div>
}