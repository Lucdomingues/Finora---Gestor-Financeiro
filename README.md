## 1. Funcionalidades Principais

- **Adicionar Transação:** Um formulário para inserir uma nova movimentação, contendo:
  - Descrição (ex: "Salário", "Mercado").
  - Valor numérico.
  - Tipo (Entrada ou Saída).
- **Painel de Resumo (Dashboard):** Exibição em tempo real do Total de Entradas, Total de Saídas e o Saldo Atual.
- **Listagem de Transações:** Uma tabela ou lista mostrando todas as movimentações cadastradas.
- **Exclusão:** Um botão ao lado de cada transação para removê-la da lista.
- **Persistência de Dados:** As transações não devem sumir ao recarregar a página (usaremos o `localStorage` do navegador para isso).

## 2. Requisitos Técnicos

**JavaScript (Manipulação de Arrays):**

- Use `.reduce()` para calcular os totais (Entradas, Saídas e Saldo) a partir do array principal.
- Use `.map()` para renderizar a lista de transações na tela.
- Use `.filter()` para a funcionalidade de excluir uma transação específica pelo seu ID.

**Gerenciamento de Estado (`useState`):**

- Crie um estado para armazenar o array de transações.
- Crie estados separados para controlar os inputs do formulário (descrição, valor e tipo) antes de enviá-los.

**Efeitos Colaterais (`useEffect`):**

- Use um `useEffect` para carregar os dados do `localStorage` assim que o aplicativo abrir.
- Use outro `useEffect` para salvar o array de transações no `localStorage` sempre que ele for modificado (adicionado ou removido).

**Comunicação entre Componentes (Props e Prop Drilling):**

- Você sentirá na prática como o estado principal no topo da aplicação precisa ser passado para baixo.

---

## 3. Arquitetura de Componentes Sugerida

Para treinar a passagem de Props, divida sua interface da seguinte forma:

- **`<App/>`**: O componente pai. Ele vai guardar o estado principal `const [transactions, setTransactions] = useState([])` e as funções de adicionar e deletar.
- **`<Dashboard/>`**: Recebe as transações via props, calcula os totais com `.reduce()` e exibe os cards de resumo.
- **`<TransactionForm/>`**: Recebe a função `handleAddTransaction` via props. Contém os inputs locais e, ao clicar em "Salvar", chama essa função passando os dados novos.
- **`<TransactionList/>`**: Recebe as transações via props e mapeia cada uma delas.
- **`<TransactionItem/>`**: Recebe os dados de uma única transação e a função `handleDelete` via props.
