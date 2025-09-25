const form = document.getElementById("humor-form");
const humorInput = document.getElementById("humor");
const humorRegistrado = document.getElementById("humor-registrado");
const mensagemBtn = document.getElementById("mensagem-btn");
const mensagemMotivacional = document.getElementById("mensagem-motivacional");
 
const imagemMotivacional = document.createElement("img");
imagemMotivacional.style.width = "200px";
imagemMotivacional.style.marginTop = "15px";
document.body.appendChild(imagemMotivacional);
 
const conteudoPorHumor = {
    feliz: {
        frases: [
            "Curta o momento bom – ele te fortalece.",
            "Sua alegria pode iluminar alguém hoje.",
            "Use a felicidade como impulso para seus sonhos."
        ],
        imagens: [
            "./img/OIP feliz.webp",
            "./img/OIP feliz 2.webp",
            "./img/felicidade 3.jpg"
        ]
    },
    triste:{
        frases: [
            "A dor passa. Continue.",
            "Mesmo nublado, você ainda brilha.",
            "Sofrer também é crescer."
        ],
        imagens: [
            "./img/triste.jpg",
            "./img/triste 2.jpg",
            "./img/triste 3.jpg"
        ]
    },
    ansioso: {
        frases: [
            "Calma. Você não precisa ter todas as respostas agora.",
            "A ansiedade mente. Confie em você.",
            "Foque no agora, o futuro se constrói aos poucos"
        ],
        imagens: [
            "./img/ansioso.jpg",
            "./img/ansioso 2.jpeg",
            "./img/ansioso 3.jpg"
        ]
    },
    motivado: {
        frases:[
            "Você chegou até aqui com esforço.",
            "Movimento é poder.",
            "Plante hoje, colha sempre."
        ],
        imagens: [
            "./img/motivado.webp",
            "./img/motivado 2.jpg",
            "./img/motivada 3.jpg"
        ]
    },
    neutro: {
        frases:[
            "Nem todo dia é intenso. E tudo bem.",
            "Algumas coisas simplesmente são como são.",
            "Você está fazendo o que pode, com o que tem agora."
        ],
        imagens: [
            "./img/neutro.jpg",
            "./img/neutro 2.webp",
            "./img/neutro 3.jpg"
        ]
    },
};
 
let humorAtual = "neutro";
 
form.addEventListener("submit", function(event) {
    event.preventDefault();
 
    const humor = humorInput.value.trim().toLowerCase();
    humorRegistrado.textContent = "Hoje você se sente: " + humor;
 
    if (conteudoPorHumor[humor]) {
        humorAtual = humor;
} else {
    humorAtual = "neutro";
}
 
localStorage.setItem("humor", humorAtual);
humorInput.value = "";
});
 
window.addEventListener("load", function() {
    const humorSalvo = this.localStorage.getItem("humor");
    if (humorSalvo) {
        humorAtual = humorSalvo;
        humorRegistrado.textContent = "Hoje você se sente: " + humorSalvo;
    }
});
 
mensagemBtn.addEventListener("click", function(){
    const conteudo = conteudoPorHumor[humorAtual];
 
    const indiceFrase = Math.floor(Math.random() * conteudo.frases.length);
    mensagemMotivacional.textContent = conteudo.frases[indiceFrase];
 
    const indiceImagem = Math.floor(Math.random() * conteudo.imagens.length);
    imagemMotivacional.src = conteudo.imagens[indiceImagem];
});
