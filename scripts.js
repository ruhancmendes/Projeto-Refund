// Seleciona os elementos do formulário
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const expense = document.getElementById("expense")
const category = document.getElementById("category")

// Seleciona os elementos da lista
const expenseList = document.querySelector("ul")

// Captura o evento de input para formatar o valor.
amount.oninput = () => {
    // Obtém o valor do input, replace substitui caracteres que não são numéricos.
    let value = amount.value.replace(/\D/g, "")

    // Transforma o valor em centavos (ex. 150/100 = 1.5 que é equivalente a R$1,50)
    value = Number(value) / 100

    //retorna o value apenas com números
    amount.value = formatCurrencyBRL(value)
}

function formatCurrencyBRL(value) {
    // Formata o valor no padrão BRL (Real Brasileiro)
    value = value.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    })
    //Retorna o valor formatado.
    return value
}

// Captur o evento de submit ddo formulário para obter os valores.
form.onsubmit = (event) => {
    //impede a página de recarregar ao fazer submit.
    event.preventDefault()

    // Cria um objeto com os detalhes da nova despesa.
    const newExpense = {
        id: new Date().getTime(),
        expense: expense.value,
        category_id: category.value,
        category_name: category.options[category.selectedIndex].text,
        amount: amount.value,
        created_at: new Date(),
    }

    // Chama a função que irá adicionar o item a lista
    expenseAdd(newExpense)
}

function expenseAdd(newExpense) {
    try {
        // Cria o elemento para adicionar o item (li) na lista (ul).
        const expenseItem = document.createElement("li")
        expenseItem.classList.add("expense")

        // Cria o ícone da categoria.
        const expenseIcon = document.createElement("span")
        expenseIcon.setAttribute("src", `img/${newExpense.category_id}.svg`)
        expenseIcon.setAttribute("alt", newExpense.category_name)

        // Adiciona as informações no item
        expenseItem.append(expenseIcon)

        // Adiciona o item na lista
        expenseList.append(expenseItem)

    } catch (error) {
        alert("Não foi possível atualizar a lista de despesas.")
        console.log(error)
    }
}