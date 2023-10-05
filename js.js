function calcular() {
    const valor = document.getElementById("botavalor").value;
    const num = [0,1,2,3,4,5,6,7,8,9,10];
    let resultado = [];


for(let numero of num) {
    resultado.push(`${numero} X ${valor}: ` + valor*numero);

}

document.getElementById("result").innerHTML = resultado.join(" <br> ");
}

