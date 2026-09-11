import { useEffect, useState } from "react";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
import Dashboard from "./components/Dashboard";

function App() {
  const [transactions, setTransactins] = useState(() => {
    const data = JSON.parse(localStorage.getItem("transactions"));

    return data ? data : [];
  });

  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  const handleAddTransaction = (objT) => {
    objT.preventDefault();
    let elementT = objT.target;

    const updateTransaction = [...transactions];

    updateTransaction.push({
      id: crypto.randomUUID(),
      description: elementT[0].value,
      value: elementT[1].value,
      type: elementT[2].value,
    });

    setTransactins(updateTransaction);
  };

  const handleDelete = (id) => {
    const removedTransaction = transactions.filter((e) => e.id !== id);

    setTransactins(removedTransaction);
  };
  return (
    <div>
      <TransactionForm funcAddTransact={handleAddTransaction} />
      <Dashboard transactions={}/>
      <TransactionList
        transactions={transactions}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default App;
