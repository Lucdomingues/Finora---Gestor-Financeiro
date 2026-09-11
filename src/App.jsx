import { useEffect, useState } from "react";
import TransactionForm from "./components/TransactionForm";

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
      description: elementT[0].value,
      value: elementT[1].value,
      type: elementT[2].value,
    });

    setTransactins(updateTransaction);
  };
  return (
    <div>
      <TransactionForm funcAddTransact={handleAddTransaction} />
    </div>
  );
}

export default App;
