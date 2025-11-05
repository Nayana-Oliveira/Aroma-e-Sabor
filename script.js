document.addEventListener("DOMContentLoaded", function() {
    
    if (document.getElementById("lista-pedido")) {
        carregarPedidoVazio(); 
    }

    var btnFinalizar = document.getElementById("btn-finalizar");
    if (btnFinalizar) {
        btnFinalizar.onclick = finalizarPedido;
    }
});

function adicionarProduto(nome, preco) {
    alert(nome + " foi adicionado ao seu pedido!");
}

function carregarPedidoVazio() {
    var listaPedido = document.getElementById("lista-pedido");
    var valorTotalEl = document.getElementById("valor-total");
    
    listaPedido.innerHTML = "";
    
    listaPedido.innerHTML = "<li class='carrinho-vazio'>Seu carrinho está vazio.</li>";
    
    valorTotalEl.innerText = "0,00";
}

function finalizarPedido() {
    alert("Pedido finalizado! Obrigado!");
    
    carregarPedidoVazio();
}