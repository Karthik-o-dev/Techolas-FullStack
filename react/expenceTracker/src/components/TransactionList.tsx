import type { Transaction } from "../types/transition"

type TransactionListProps = {
    transactions: Transaction[];
    deleteTransaction: (id: number) => void;
    editTransaction: (transaction: Transaction) => void;
}

export const TransactionList = ({ transactions, deleteTransaction, editTransaction }: TransactionListProps) => {

    const incomeTransactions = transactions.filter((item) => item.type === "income");

    const expenseTransactions = transactions.filter((item) => item.type === "expense")

    const handleEdit = (item: Transaction) => {
        const title = prompt("Enter new title", item.title);
        if (title === null || !title.trim()) return;

        const amount = prompt("Enter new amount", String(item.amount));
        if (amount === null) return;

        const newAmount = Number(amount);
        if (newAmount <= 0) {
            alert("Enter valid number")
            return;
        }

        editTransaction({ ...item, title: title.trim(), amount: newAmount });
    }

    return <div className="flex gap-6">
        <div className="w-1/2 bg-white p-5 rounded-xl shadow">
            <h2 className="text-xl font-bold text-green-600 mb-4">
                Income
            </h2>
            {incomeTransactions.map((item) => (
                <div key={item.id} className="border p-4 rounded-lg mb-3">
                    <h3 className="font-bold">{item.title}</h3>

                    <p className="text-green-600">${item.amount}</p>
                    <p>{item.category}</p>
                    <p>{item.date}</p>

                    <div className="flex gap-3 mt-3">
                        <button onClick={() => handleEdit(item)}>Edit</button>
                        <button onClick={() => deleteTransaction(item.id)}>Delete</button>
                    </div>
                </div>
            ))}

            {incomeTransactions.length === 0 && (
                <p>No income transactions yet.</p>
            )}
        </div>
        <div className="w-1/2 bg-white p-5 rounded-xl shadow">
            <h2 className="text-xl font-bold text-red-600 mb-4">
                Expenses
            </h2>

            {expenseTransactions.map((item) => (
                <div key={item.id} className="border p-4 rounded-lg mb-3">

                    <h3 className="font-bold">{item.title}</h3>

                    <p>${item.amount}</p>
                    <p>{item.category}</p>
                    <p>{item.date}</p>

                    <div className="flex gap-2 mt-3">
                        <button onClick={() => handleEdit(item)}>
                            Edit
                        </button>

                        <button onClick={() => deleteTransaction(item.id)}>
                            Delete
                        </button>
                    </div>

                </div>
            ))}
            {expenseTransactions.length === 0 && (
                <p>No expense transactions yet.</p>
            )}
        </div>
    </div>
}