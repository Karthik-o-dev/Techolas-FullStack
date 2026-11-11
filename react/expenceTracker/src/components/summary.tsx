type SummaryProps = {
    totalIncome: number;
    totalExpense: number;
    balance: number;
}

export const Summary = ({ totalIncome, totalExpense, balance }: SummaryProps) => {
    return <div className="grid grid-cols-3 gap-4">
        <div className="bg-white p-5 rounded-xl shadow">
            <h2>Total Income</h2>
            <p className="text-green-600 text-2xl font-bold">
                ₹{totalIncome}
            </p>
        </div>

        <div className="bg-white p-5 rounded-xl shadow">
            <h2>Total Expense</h2>
            <p className="text-red-600 text-2xl font-bold">
                ₹{totalExpense}
            </p>
        </div>

        <div className="bg-white p-5 rounded-xl shadow">
            <h2>Balance</h2>
            <p className="text-blue-600 text-2xl font-bold">
                ₹{balance}
            </p>
        </div>
    </div>
}