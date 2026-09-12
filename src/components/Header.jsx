function Header() {
  return (
    <header className="bg-white w-full py-5 border-b border-gray-200">
      <div className="flex justify-center">
        <div className="max-w-7xl flex-1">
          <div className="flex items-center gap-3 select-none cursor-pointer">
            {/* Ícone SVG Finora */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 40 40"
              className="w-9 h-9"
              fill="none"
            >
              {/* Haste principal e curva superior do "F" */}
              <path
                d="M12 8C12 5.79086 13.7909 4 16 4H30C31.1046 4 32 4.89543 32 6C32 7.10457 31.1046 8 30 8H16V16H26C27.1046 16 28 16.8954 28 18C28 19.1046 27.1046 20 26 20H16V32C16 34.2091 14.2091 36 12 36C9.79086 36 8 34.2091 8 32V8H12Z"
                fill="#8B5CF6" /* roxo vibrante (purple-500) */
              />
              {/* Detalhe de sobreposição/sombra para dar um tom moderno */}
              <path
                d="M16 16H26C27.1046 16 28 16.8954 28 18C28 19.1046 27.1046 20 26 20H16V16Z"
                fill="#6D28D9" /* roxo escuro (purple-700) */
              />
            </svg>

            {/* Texto do Logo */}
            <span className="text-2xl font-extrabold tracking-tight text-slate-800">
              Finora
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
