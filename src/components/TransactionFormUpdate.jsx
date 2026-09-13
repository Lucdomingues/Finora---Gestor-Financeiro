import { useState } from "react";

function TransactionFormUpdate({ elements, updatedForm }) {
  const [updateTransaction, setUpdateTransaction] = useState({
    id: elements.id,
    description: elements.description,
    value: elements.value,
    type: elements.type,
    date: elements.date,
    classification: elements.classification,
  });

  return (
    <>
      <td className="px-4">
        <input
          defaultValue={updateTransaction.date}
          onChange={(e) =>
            setUpdateTransaction((prev) => ({
              ...prev,
              data: e.target.value,
            }))
          }
          className="p-2 border border-gray-300 rounded-lg  w-full"
          type="date"
          name="date"
          id="date"
        />
      </td>
      <td className="px-4">
        <input
          className="p-2 border border-gray-300 rounded-lg w-full"
          type="text"
          placeholder="Descrição"
          defaultValue={updateTransaction.description}
          onChange={(e) => {
            setUpdateTransaction((prev) => ({
              ...prev,
              description: e.target.value,
            }));
          }}
        ></input>
      </td>
      <td className="px-4">
        <select
          className="p-2 border border-gray-300 rounded-lg w-full"
          name="classification"
          id="classification"
          defaultValue={updateTransaction.classification}
          onChange={(e) => {
            setUpdateTransaction((prev) => ({
              ...prev,
              classification: e.target.value,
            }));
          }}
        >
          <option disabled>Escolha a categoria</option>
          <option value="alimentação">Alimentação</option>
          <option value="salario">Salário</option>
          <option value="lazer">Lazer</option>
          <option value="contas">Contas</option>
        </select>
      </td>
      <td className="px-4">
        <input
          className="p-2 border border-gray-300 rounded-lg w-full"
          type="number"
          placeholder="Valor"
          defaultValue={updateTransaction.value}
          onChange={(e) => {
            setUpdateTransaction((prev) => ({
              ...prev,
              value: e.target.value,
            }));
          }}
        ></input>
      </td>

      <td className="px-4">
        <select
          defaultValue={updateTransaction.type}
          onChange={(e) => {
            setUpdateTransaction((prev) => ({
              ...prev,
              type: e.target.value,
            }));
          }}
          className="p-2 border border-gray-300 rounded-lg w-full"
        >
          <option disabled="Qual o tipo da transação">
            Qual o tipo da transação
          </option>
          <option value="entrada">Entrada</option>
          <option value="saida">Saída</option>
        </select>
      </td>

      <td className="flex justify-end px-4 py-3 gap-2">
        <button
          type="button"
          className="flex items-center justify-center w-10 h-10 bg-green-100 rounded-full transition-colors hover:bg-green-200 cursor-pointer"
          onClick={() => updatedForm(updateTransaction)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </button>
        <button
          className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full transition-colors hover:bg-gray-200 cursor-pointer"
          onClick={() => updatedForm()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </td>
    </>
  );
}

export default TransactionFormUpdate;
