var inputProduto = document.querySelector('#inserir-produto');
var inputValor = document.querySelector('#valor-produto');
var btnCadastrar = document.querySelector('#btn-cadastro');
var carrinho = document.querySelector('#itens-carrinho');
var divTotal = document.querySelector('#total');
var produtos = [];
var total = 0;

btnCadastrar.addEventListener('click', ()=>{
      
   produtos.push({
      produto: inputProduto.value,
      valor: inputValor.value
   })

   carrinho.innerHTML = '';
   total = 0;

   produtos.map(function(val){
      carrinho.innerHTML += `
      <div class="item-single">
      <h2 class="item">${val.produto}</h2>
      <h2 class="valor"><span>R$ ${val.valor}</span></h2>
      </div>
      `
      total += parseFloat(val.valor);
   });

   inputProduto.value = '';
   inputValor.value = '';
   total = total.toFixed(2);
   divTotal.innerHTML = `Total: R$${total}`;
})

function limpar(){
   produtos = [];
   carrinho.innerHTML = '';
   total = 0;
   divTotal.innerHTML = 'Total: R$0.00';
}