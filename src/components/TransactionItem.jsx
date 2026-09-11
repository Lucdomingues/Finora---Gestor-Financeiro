function TransactionItem({ elements, handleDelete }) {
  return (
    <div>
      <div>
        <p>{elements.description}</p>
        <p>{elements.value}</p>
        <p>{elements.type}</p>
      </div>
      <div>
        <button type="button" onClick={() => handleDelete(elements.id)}>
          🗑️
        </button>
      </div>
    </div>
  );
}

export default TransactionItem;
