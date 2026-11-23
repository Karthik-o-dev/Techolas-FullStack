"use client"

type AlertProps = {
    item: {
        id: number;
        title: string
    }
}

export default function Alert({ item }: AlertProps) {
    return <div onClick={() => alert(item.title)}>
        {item.title}
    </div>
}