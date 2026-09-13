function TransactionForm({ funcAddTransact, category, isCategoryTrue }) {
  return (
    <div className="flex-1 p-4 rounded-2xl shadow-md bg-white border border-gray-100">
      <form onSubmit={funcAddTransact}>
        <h2 className="text-xl font-bold mb-2">Nova Transação</h2>
        <div className="mb-5 grid grid-cols-2 gap-4">
          <input
            className="p-2 border border-gray-300 rounded-lg"
            type="text"
            placeholder="Descrição"
          ></input>
          <input
            className="p-2 border border-gray-300 rounded-lg"
            type="number"
            placeholder="Valor"
          ></input>
          <select className="p-2 border border-gray-300 rounded-lg">
            <option disabled defaultValue="Qual o tipo da transação">
              Qual o tipo da transação
            </option>
            <option value="entrada">Entrada</option>
            <option value="saida">Saída</option>
          </select>
          <input
            className="p-2 border border-gray-300 rounded-lg"
            type="date"
            name="date"
            id="date"
          />
          <div>
            <select
              className="p-2 border border-gray-300 rounded-lg w-full"
              name="classification"
              id="classification"
            >
              <option defaultValue="Classificação" disabled>
                Escolha a categoria
              </option>
              {category.map((e) => {
                return (
                  <option key={crypto.randomUUID()} value={e}>
                    {e}
                  </option>
                );
              })}
            </select>
            <button
              onClick={isCategoryTrue}
              className="cursor-pointer ml-1 text-xs underline"
            >
              Adicionar Categorias +
            </button>
          </div>
        </div>
        <button
          type="submit"
          className="bg-purple-800 text-white p-1 rounded-lg w-full cursor-pointer
"
        >
          Adicionar Transação
        </button>
      </form>
    </div>
  );
}

export default TransactionForm;
