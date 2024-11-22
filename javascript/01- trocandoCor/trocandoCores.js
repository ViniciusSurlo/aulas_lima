// Criando uma função para alterar a cor
function aplicarCor() { 
    const cor = document.getElementById("selecaocor").value

    document.body.style.backgroundColor = cor
}

// Função para gerar uma cor aleatória
function gerarCorAleatoria() {
    document.getElementById("r").innerHTML = "R:"
    document.getElementById("g").innerHTML = "G: "
    document.getElementById("b").innerHTML = "B: "
    // Função para gerar um número aleatório entre 0 e 255
    // Função Math.random gera um numero aleatorio entre 0 e 0.999

    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)

    document.getElementById("r").innerHTML += r;
    document.getElementById("g").innerHTML += g;
    document.getElementById("b").innerHTML += b;

    const cor = `rgb(${r}, ${g}, ${b})`
    document.body.style.backgroundColor = cor

}
function dark(){
    const cor = `rgb(0, 0, 0)`
    const cor_fonte = `rgb(255, 255, 255)`
    document.body.style.backgroundColor = cor
    document.body.style.color = cor_fonte
}

function light(){
    const cor =  `rgb(255, 255, 255)`
    const cor_fonte = `rgb(0, 0, 0)`
    document.body.style.backgroundColor = cor
    document.body.style.color = cor_fonte
}

