import { useEffect, useState } from "react";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
import Dashboard from "./components/Dashboard";
import Grafic from "./components/Grafic";
import Header from "./components/Header";

function App() {
  const [transactions, setTransactins] = useState(() => {
    const data = JSON.parse(localStorage.getItem("transactions"));
    // ------ ao carregar a página já inicia o estado global com os dados de transações para persistência de dados e da renderização ------
    return data ? data : [];
  });

  // ------ observa transactions para inserção do storage ------
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  // ------ add transactions ------
  const handleAddTransaction = (objT) => {
    objT.preventDefault();
    let elementT = objT.target;

    const updateTransaction = [...transactions];

    updateTransaction.push({
      id: crypto.randomUUID(),
      description: elementT[0].value,
      value: elementT[1].value,
      type: elementT[2].value,
      date: elementT[3].value,
      classification: elementT[4].value,
    });

    setTransactins(updateTransaction);
  };

  // ------ delete transactions ------
  const handleDelete = (id) => {
    const removedTransaction = transactions.filter((e) => e.id !== id);

    setTransactins(removedTransaction);
  };
  return (
    <div>
      <Header />
      <div className=" flex justify-center">
        <div className="max-w-7xl flex-1">
          <div className="">
            <Dashboard transactions={transactions} />
            <div className="flex gap-4 mb-4">
              <TransactionForm funcAddTransact={handleAddTransaction} />
              <Grafic />
            </div>
            <TransactionList
              transactions={transactions}
              handleDelete={handleDelete}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
