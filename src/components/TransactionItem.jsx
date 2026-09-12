function TransactionItem({ elements, handleDelete }) {
  return (
    <>
      <td className="px-4 py-3">{elements.date}</td>
      <td className="px-4 py-3"> {elements.description}</td>
      <td className="px-4 py-3">{elements.classification}</td>
      <td className="px-4 py-3">
        <span
          className={`p-1 rounded-lg ${elements.type === "entrada" ? "text-green-600 bg-green-100" : "text-red-600 bg-red-100"}`}
        >
          R$ {Number(elements.value).toFixed(2)}
        </span>
      </td>
      <td className="flex justify-end px-4 py-3 gap-2">
        <button
          type="button"
          className="cursor-pointer"
          onClick={() => handleDelete(elements.id)}
        >
          <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-blue-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
              />
            </svg>
          </div>
        </button>
        <button
          type="button"
          className="cursor-pointer"
          onClick={() => handleDelete(elements.id)}
        >
          <div className="flex items-center justify-center w-10 h-10 bg-red-100 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-red-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </div>
        </button>
      </td>
    </>
  );
}

export default TransactionItem;
