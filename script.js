let pessoas = ["Igor", "Jose", "Gabriel Markus", "Vitoria", "Joana", "João"]


var adicionar = document.querySelector('#adic');
var remover = document.querySelector('#remover');

adicionar.addEventListener("click", function(ad) {

    ad.preventDefault();

    var name1 = document.querySelector('#add');

    var value1 = add.value;

    pessoas.push(value1);

})



function sortear() {

    let np = pessoas.length;

    let ns = Math.floor(Math.random() * np);

    document.getElementById("d").innerHTML = pessoas[ns];
}



