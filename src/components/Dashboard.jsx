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
    <div className="flex gap-4 justify-center w-full mt-10 mb-4">
      <div className="flex justify-between p-4 rounded-2xl shadow-md bg-white flex-1 border border-gray-100">
        <div>
          <span>Saldo Atual</span>
          <p className="text-3xl font-bold">R$ {resultado.saldo.toFixed(2)}</p>
        </div>
        <div>
          <p
            className={`px-2 py-1 rounded-lg ${resultado.saldo > 0 ? "text-green-600 bg-green-100" : "text-red-600 bg-red-100"}`}
          >
            {`${resultado.saldo > 0 ? "Positivo" : "Negativo"}`}
          </p>
        </div>
      </div>
      <div className="flex gap-20 p-4 rounded-2xl shadow-md bg-white flex-1 border border-gray-100">
        <div className="flex gap-2 items-center justify-center">
          <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-green-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 19V5m0 0l-7 7m7-7l7 7"
              />
            </svg>
          </div>
          <div>
            <span>Entradas</span>
            <p className="text-xl font-bold">
              R$ {resultado.entrada.toFixed(2)}
            </p>
          </div>
        </div>
        <div className="flex gap-2 items-center justify-center">
          <div className="flex items-center justify-center w-12 h-12 bg-red-100 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-red-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 5v14m0 0l-7-7m7 7l7-7"
              />
            </svg>
          </div>
          <div>
            <span>Saídas</span>
            <p className="text-xl font-bold">R$ {resultado.saida.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
