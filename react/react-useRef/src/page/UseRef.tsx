import { useRef } from "react"
import { useFetch } from "../hooks/useFetch";
import type { ApiResponse } from "../types/comments";

export const UseRef = () => {

    const inputRef = useRef<HTMLInputElement | null>(null);
    const [response] = useFetch<ApiResponse>("/comments")

    if (response.loading) {
        return <div>loading...</div>
    }

    if (response.error) {
        return <div>{JSON.stringify(response.error)}</div>
    }

    const handleFocus = () => {
        if (!inputRef.current) return;
        inputRef.current?.focus();
        inputRef.current.style.backgroundColor = "red";
    }

    return <div>
        <input type="text" ref={inputRef} />
        <button onClick={handleFocus}>Click</button>

        <div>{response.data?.comments[3].body}</div>
    </div>
}