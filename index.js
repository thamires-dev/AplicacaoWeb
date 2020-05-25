function carregarClientes() { // uma função realiza um conjunto de ações
    var httpReq = new XMLHttpRequest(); // o "new" criou um novo objeto (XMLHttpRequest)
    var url = "https://demo2254299.mockable.io/clientes";
    httpReq.open("GET", url, false); // criado o método open - "GET" é o método HTTP, url é de onde vai ser consultado e false é uma requisição síncrona
    httpReq.send(null); // não vamos enviar nenhuma informação, então open vai ser null

    var resposta = JSON.parse(httpReq.responseText); // vai trazer a resposta do httpReq para o Javascript e vai armazená-la na variável resposta

    console.log(resposta); // vai exibir no console do navegador a variável resposta
    return resposta; // finaliza a função retonando a resposta
}

function carregarTabelaCliente() {

    var clientes = carregarClientes();

    //jQuery - Foreach
    $("#cliente").html(""); // chama a id cliente utilizada no HTML
    $.each(clientes, function (index, item) {
        var linha = "<tr>"; // tr são os títulos da coluna da tabela
        linha += "<td>" + item.nome + "</td>"; // td são as colunas
        linha += "<td>" + item.idade + "</td>";
        linha += "<td>" + item.rg + "</td>";
        linha += "<td>" + item.endereco + "</td>";
        linha += "</tr>"; // indica que acabaram as colunas
        $("#cliente").append(linha); // vai reiniciar o processo
    })
}