import { useState } from "react"
import type { Transaction } from "../types/transition"

type TransactionFormProps = {
    addTransaction: (transaction: Transaction) => void
}

export const TransactionForm = ({ addTransaction }: TransactionFormProps) => {

    const [formData, setFormData] = useState({
        title: "",
        amount: "",
        type: "expense" as "income" | "expense",
        category: "Food",
        date: ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!formData.title.trim() || !formData.amount || !formData.date) {
            return alert("Please fill all fields");
        }

        if (Number(formData.amount) <= 0) {
            return alert("Amount must be greater than zero");
        }

        const newTransaction: Transaction = {
            id: Date.now(),
            title: formData.title,
            amount: Number(formData.amount),
            type: formData.type,
            category: formData.category,
            date: formData.date
        }

        addTransaction(newTransaction)
        setFormData({
            title: "",
            amount: "",
            type: "expense",
            category: "Food",
            date: ""
        });
    }



    return <div className="w-full max-w-3xl mx-auto bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100">
        <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-800">
                Add Transaction
            </h2>
            <p className="text-sm text-gray-500 mt-1">
                Record your income and expenses
            </p>
        </div>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">

            <div className="flex flex-col gap-2">
                <label htmlFor="title" className="text-sm font-semibold text-gray-700">Title</label>
                <input type="text" name="title" placeholder="Enter your expense..." value={formData.title} onChange={handleChange} className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition" />
            </div>

            <div className="flex flex-col item-center gap-3">
                <label htmlFor="amount" className="text-sm font-semibold text-gray-700">Amount</label>
                <input type="number" name="amount" placeholder="Enter your expense amount..." value={formData.amount} onChange={handleChange} className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition" />
            </div>

            <div className="flex flex-col item-center gap-3">
                <label htmlFor="type" className="text-sm font-semibold text-gray-700">Type</label>
                <select name="type" value={formData.type} onChange={handleChange} className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition">
                    <option value="income">Income</option>
                    <option value="expense">Expense</option>
                </select>
            </div>

            <div className="flex flex-col item-center gap-3">
                <label htmlFor="category" className="text-sm font-semibold text-gray-700">Category</label>
                <select name="category" value={formData.category} onChange={handleChange} className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition">
                    <option value="Food">Food</option>
                    <option value="Travel">Travel</option>
                    <option value="Movie">Movie</option>
                    <option value="Salary">Salary</option>
                </select>
            </div>

            <div className="flex flex-col item-center gap-3">
                <label htmlFor="date" className="text-sm font-semibold text-gray-700">Date</label>
                <input type="date" name="date" value={formData.date} onChange={handleChange} className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition" />
            </div>

            <div className="col-span-2">
                <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-xl transition duration-200 shadow-md">Submit Expense</button>

            </div>

        </form>
    </div>
}