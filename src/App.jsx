import { useEffect, useState } from "react";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
import Dashboard from "./components/Dashboard";
import Grafic from "./components/Grafic";
import Header from "./components/Header";
import CategoryAddForm from "./components/CategoryAddForm";

function App() {
  const [categoryIsTrue, setCategoryIsTrue] = useState(false);
  const [category, setCategory] = useState(() => {
    const data = JSON.parse(localStorage.getItem("category"));
    // ------ ao carregar a página já inicia o estado global com os dados das categorias para persistência de dados e da renderização ------
    return data ? data : [];
  });
  const [transactions, setTransactins] = useState(() => {
    const data = JSON.parse(localStorage.getItem("transactions"));
    // ------ ao carregar a página já inicia o estado global com os dados de transações para persistência de dados e da renderização ------
    return data ? data : [];
  });

  // ------ observa transactions para inserção do storage ------
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  // ------ observa as categorias para inserção do storage ------
  useEffect(() => {
    localStorage.setItem("category", JSON.stringify(category));
  }, [category]);

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

  // ------ update transactions ------
  const handleUpdate = (upt) => {
    const updatedTransaction = transactions.map((e) =>
      e.id === upt.id ? upt : e,
    );

    setTransactins(updatedTransaction);
  };

  // ------ delete transactions ------
  const handleDelete = (id) => {
    const removedTransaction = transactions.filter((e) => e.id !== id);

    setTransactins(removedTransaction);
  };

  // ------ add category ------
  const handleAddCategory = (objC) => {
    const updateCategory = [...category];
    console.log(objC);

    if (objC.length === 0) {
      alert("Necessário preencher o campo");
      return;
    }
    if (updateCategory.includes(objC) === true) {
      alert("Categoria já existe");
      return;
    }

    updateCategory.push(objC);

    setCategory(updateCategory);
  };

  // ------ condição para abrir popup  ------
  const isCategoryTrue = (e) => {
    e.preventDefault();

    setCategoryIsTrue(!categoryIsTrue);
  };

  return (
    <div>
      <Header />
      <div className=" flex justify-center">
        <div className="max-w-7xl flex-1">
          <div className="">
            <Dashboard transactions={transactions} />
            <div className="flex gap-4 mb-4">
              <TransactionForm
                funcAddTransact={handleAddTransaction}
                category={category}
                isCategoryTrue={isCategoryTrue}
              />
              <Grafic />
            </div>
            <TransactionList
              transactions={transactions}
              handleDelete={handleDelete}
              handleUpdate={handleUpdate}
            />
            {categoryIsTrue ? (
              <CategoryAddForm
                handleAddCategory={handleAddCategory}
                isCategoryTrue={isCategoryTrue}
              />
            ) : (
              false
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
