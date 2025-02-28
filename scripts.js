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

//impede a página de recarregar ao fazer submit.
form.onsubmit = (event) => {
    event.preventDefault()
}