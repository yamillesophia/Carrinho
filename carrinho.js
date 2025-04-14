// Atualiza os campos de preço e código com base no produto selecionado
function atualizarCampos() {
    // Pega o valor do produto
    var selectProduto = document.getElementById('produto');
    var produtoSelecionado = selectProduto.options[selectProduto.selectedIndex];
    
    // Pega o preço e o código do produto
    var preco = produtoSelecionado.getAttribute('data-preco');
    var codigo = produtoSelecionado.value;
    
    // Coloca o código e o preço nos campos
    document.getElementById('codigo').value = codigo;
    document.getElementById('preco').value = preco;
}

// Adiciona os itens no carrinho
function adicionarAoCarrinho() {
    // Valores dos campos
    var produtoSelecionado = document.getElementById('produto');
    var nomeProduto = produtoSelecionado.options[produtoSelecionado.selectedIndex].text;
    var codigo = document.getElementById('codigo').value;
    var quantidade = document.getElementById('quantidade').value;
    var precoUnitario = parseFloat(document.getElementById('preco').value);
    
    // Alerta se o campo estiver vazio/inválido
    if (codigo === "" || quantidade <= 0 || precoUnitario <= 0) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }
    
    // Calcula o valor total 
    var totalProduto = precoUnitario * quantidade;

    // Cria uma nova linha para a tabela do carrinho
    var novaLinha = document.createElement('tr');
    novaLinha.innerHTML = "<td>" + codigo + "</td><td>" + nomeProduto + "</td><td>" + quantidade + "</td><td>" + precoUnitario.toFixed(2) + "</td><td>" + totalProduto.toFixed(2) + "</td>";

    // Adiciona uma nova linha na tabela
    document.getElementById('lista-carrinho').appendChild(novaLinha);

    // Atualiza o total do carrinho
    atualizarTotalCarrinho();
}

function atualizarTotalCarrinho() {
    // Pega todas as linhas da tabela
    var linhasCarrinho = document.getElementById('lista-carrinho').getElementsByTagName('tr');
    var total = 0;

    // Soma os valores totais dos produtos
    for (var i = 0; i < linhasCarrinho.length; i++) {
        var totalProduto = parseFloat(linhasCarrinho[i].cells[4].innerText); // Pega o total da última coluna
        total += totalProduto; // Soma no total
    }

    // Atualiza o valor total 
    document.getElementById('total-carrinho').innerText = total.toFixed(2);
}

// Inicia os campos ao carregar a página
window.onload = function() {
    atualizarCampos(); // Inicia os campos de código e preço 
};

// mostra o modal de ofertas
function mostrarModal() {
    var modal = document.getElementById('modalOfertas');
    modal.style.display = 'flex'; // Exibe o modal
}

// fecha o modal
function fecharModal() {
    var modal = document.getElementById('modalOfertas');
    modal.style.display = 'none'; // Esconde o modal
}

// Detecta quando o usuário tenta sair da página
window.onbeforeunload = function() {
    mostrarModal(); // Exibe o modal 
    return "Tem certeza que deseja sair?"; 
};

// Função para iniciar a música quando o botão for clicado
function iniciarMusica() {
    var audio = document.getElementById('audio');
    audio.play(); // Toca a música
}
