import { useState } from "react";
function CategoryAddForm({ handleAddCategory, isCategoryTrue }) {
  const [addCategory, setAddCategory] = useState([]);
  return (
    <>
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
        <div className="w-fit">
          <form className="flex-1 p-4 rounded-2xl shadow-md bg-white border border-gray-100 w-fit">
            <button
              className="cursor-pointer w-full flex justify-end mb-4"
              onClick={isCategoryTrue}
            >
              <svg
                id="close-popup"
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-gray-500 transition-discrete"
                fill="#ff0000"
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
            <div className="flex  flex-col">
              <div className="flex gap-3">
                <input
                  type="text"
                  className="p-2 border border-gray-300 rounded-lg w-full"
                  name="category"
                  id="category"
                  placeholder="Categoria
            "
                  value={addCategory}
                  onChange={(e) => setAddCategory(e.target.value)}
                />
                <button
                  className="bg-purple-800 text-white p-1 rounded-lg w-full cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    handleAddCategory(addCategory);
                    setAddCategory([]);
                  }}
                >
                  Adicionar Categoria
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default CategoryAddForm;
