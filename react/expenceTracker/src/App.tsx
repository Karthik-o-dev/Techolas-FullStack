import { useState } from "react"
import type { Transaction } from "./types/transition";
import { TransactionForm } from "./components/TransactionForm";
import { Summary } from "./components/summary";
import { TransactionList } from "./components/TransactionList";

export const App = () => {

  const [transaction, setTransaction] = useState<Transaction[]>([]);

  const addTransaction = (transaction: Transaction) => {
    setTransaction((prev) => [...prev, transaction]);
  }

  const deleteTransaction = (id: number) => {
    setTransaction((prev) => prev.filter((item) => item.id !== id));
  };

  const editTransaction = (updateTransaction: Transaction) => {
    setTransaction((prev) =>
      prev.map((item) => item.id === updateTransaction.id ? updateTransaction : item))
  }

  const totalIncome = transaction
    .filter((item) => item.type === "income")
    .reduce((total, item) => total + item.amount, 0);

  const totalExpense = transaction
    .filter((item) => item.type === "expense")
    .reduce((total, item) => total + item.amount, 0);

  const balance = totalIncome - totalExpense


  return <div className="min-h-screen bg-gray-100 p-6">
    <h1 className="text-3xl font-bold text-center mb-3">Expense Tracker</h1>

    <div className="flex flex-col gap-3">
      <TransactionForm addTransaction={addTransaction} />
      <Summary totalIncome={totalIncome} totalExpense={totalExpense} balance={balance} />
      <TransactionList transactions={transaction} editTransaction={editTransaction} deleteTransaction={deleteTransaction} />
    </div>
  </div>
}