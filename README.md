# 💜 Finora

Aplicação de controle financeiro pessoal feita com **React + Vite** e estilizada com **Tailwind CSS**. Permite registrar entradas e saídas, organizar transações por categoria e acompanhar o saldo em tempo real.

O projeto foi desenvolvido com foco no estudo de **props** no React: todo o estado da aplicação vive em um único componente (`App`), e os demais componentes recebem dados e funções exclusivamente via props.

## ✨ Funcionalidades

- **Dashboard** com saldo atual, total de entradas e total de saídas, calculados automaticamente a partir das transações
- **Cadastro de transações** com descrição, valor, tipo (entrada/saída), data e categoria
- **Edição inline** de transações diretamente na tabela do histórico
- **Exclusão** de transações
- **Categorias personalizadas**, criadas pelo próprio usuário em um popup, com validação de campo vazio e de duplicidade
- **Persistência com `localStorage`**: transações e categorias continuam salvas ao recarregar a página

## 🛠️ Tecnologias

- [React](https://react.dev/)
- [Vite](https://vite.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/)

## 🚀 Como rodar o projeto

Pré-requisito: [Node.js](https://nodejs.org/) instalado.

```bash
# Clone o repositório
git clone https://github.com/SEU-USUARIO/finora.git

# Entre na pasta
cd finora

# Instale as dependências
npm install

# Rode em modo de desenvolvimento
npm run dev
```

A aplicação ficará disponível em `http://localhost:5173`.

## 📁 Estrutura

```
src/
├── components/
│   ├── CategoryAddForm.jsx       # Popup para criar novas categorias
│   ├── Dashboard.jsx             # Cards de saldo, entradas e saídas
│   ├── Header.jsx                # Cabeçalho com o logo
│   ├── TransactionForm.jsx       # Formulário de nova transação
│   ├── TransactionFormUpdate.jsx # Linha editável da tabela
│   ├── TransactionItem.jsx       # Linha da tabela (visualização/edição)
│   └── TransactionList.jsx       # Tabela do histórico de transações
├── App.jsx                       # Estado global e funções de manipulação
├── index.css                     # Import do Tailwind
└── main.jsx                      # Ponto de entrada
```

## 🔄 Fluxo de dados com props

O `App` guarda os estados `transactions`, `category` e o controle do popup de categorias. Os dados descem para os filhos via props, e as ações sobem de volta por meio de funções de callback.

```
App  (estado: transactions, category)
├── Header
├── Dashboard ← transactions
├── TransactionForm ← category, funcAddTransact, isCategoryTrue
├── TransactionList ← transactions, handleDelete, handleUpdate
│   └── TransactionItem ← elements, handleDelete, handleUpdate
│       └── TransactionFormUpdate ← elements, updatedForm
└── CategoryAddForm ← handleAddCategory, isCategoryTrue
```

Algumas decisões do projeto:

- O `Dashboard` não guarda estado próprio. Os totais são derivados de `transactions` a cada render, evitando dados duplicados.
- O modo de edição de cada linha é um estado local do `TransactionItem`, já que só aquela linha precisa dessa informação.
- O `TransactionFormUpdate` usa as props como valor inicial de um rascunho, que só é enviado ao `App` quando o usuário confirma a edição.

## 📄 Licença

Este projeto foi desenvolvido para fins de estudo.
