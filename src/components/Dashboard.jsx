function Dashboard({ transactions }) {
  const resultado = transactions.reduce(
    (acc, current) => {
      if (current.type === "saida") {
        acc.saida += Number(current.value);
      }
      if (current.type === "entrada") {
        acc.entrada += Number(current.value);
      }

      acc.saldo = acc.entrada - acc.saida;
      return acc;
    },
    {
      entrada: 0,
      saida: 0,
      saldo: 0,
    },
  );
  return (
    <div>
      <h3>Dashboard</h3>
      <div>
        <div>
          <p>{resultado.entrada}</p>
        </div>
        <span>-</span>
        <div>
          <p>{resultado.saida}</p>
        </div>
        <span>=</span>
        <div>
          <p>{resultado.saldo}</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
