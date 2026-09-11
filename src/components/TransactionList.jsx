import TransactionItem from "./TransactionItem";

function TransactionList({ transactions, handleDelete }) {
  return (
    <div>
      <h2>Histórico de Transações</h2>
      <ul>
        {transactions.map((e) => (
          <li key={e.id}>
            <TransactionItem elements={e} handleDelete={handleDelete} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionList;
