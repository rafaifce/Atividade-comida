var carrinho = 0;


function mostrarCombos(){
var CombosContainer =    document.querySelector(".CombosContainer");
CombosContainer.innerHTML = "";

for (i=0; i<combos.length; i++){
    //console.log("Descricão", combos[i].descricao);
    //console.log("Preco", combos[i].preco);
    var combo = document.createElement("div");
    combo.classList.add("Combo");

    combo.innerHTML = `
    <img src="${combos[i].url}">
    <p>${combos[i].descricao}</p>
    <h2>${combos[i].preco}</h2>
    `;

    var btn = document.createElement("button");
    btn.innerHTML = "Comprar";
    btn.addEventListener("click", efetuarCompra);
    
    combo.appendChild(btn)


    CombosContainer.appendChild(combo);
}

function efetuarCompra(event){
    var pai = event.target.parentElement;
    var valor= Number(pai.children[2].innerHTML);
    carrinho = carrinho+valor;
    alert("valor Total:" + carrinho.toFixed(2))
}

}
mostrarCombos();