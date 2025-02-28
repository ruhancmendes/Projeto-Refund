// Seleciona os elementos do formulário
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const expense = document.getElementById("expense")
const category = document.getElementById("category")

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
    } catch (error) {
        alert("Não foi possível atualizar a lista de despesas.")
        console.log(error)
    }
}