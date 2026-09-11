function TransactionForm({ funcAddTransact }) {
  return (
    <div>
      <form onSubmit={funcAddTransact}>
        <input type="text" placeholder="Descrição"></input>
        <input type="number" placeholder="Valor"></input>
        <select>
          <option disabled selected defaultValue="Qual o tipo da transação">
            Qual o tipo da transação
          </option>
          <option value="entrada">Entrada</option>
          <option value="saida">Saída</option>
        </select>
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}

export default TransactionForm;
