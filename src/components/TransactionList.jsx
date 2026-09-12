import TransactionItem from "./TransactionItem";

function TransactionList({ transactions, handleDelete }) {
  return (
    <div className="rounded-2xl shadow-md bg-white flex-1 border border-gray-100">
      <h2 className="text-xl font-bold mb-4 pl-4 pr-4 pt-4 ">
        Histórico de Transações
      </h2>
      <table className="table-fixed w-full">
        <thead>
          <tr className="bg-gray-50">
            <th className="text-lg font-bold mb-4 text-start px-4 py-3">
              Data
            </th>
            <th className="text-lg font-bold mb-4 text-start px-4 py-3">
              Descrição
            </th>
            <th className="text-lg font-bold mb-4 text-start px-4 py-3">
              Categoria
            </th>
            <th className="text-lg font-bold mb-4 text-start px-4 py-3">
              Amount
            </th>
            <th className="text-lg font-bold mb-4 text-start px-4 py-3"></th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((e) => (
            <tr
              key={e.id}
              className="border-gray-300 border-t even:bg-gray-100 odd:bg-white"
            >
              <TransactionItem elements={e} handleDelete={handleDelete} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionList;
