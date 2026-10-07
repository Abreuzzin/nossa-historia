// =========================
// EFEITO DE APARECIMENTO
// =========================

const elementos = document.querySelectorAll(
    ".conteudo-carta, .texto-carta"
);

const observador = new IntersectionObserver(
    (entradas) => {

        entradas.forEach((entrada) => {

            if (entrada.isIntersecting) {

                entrada.target.classList.add("aparecer");

                observador.unobserve(entrada.target);
            }

        });

    },
    {
        threshold: 0.15
    }
);

elementos.forEach((elemento) => {
    observador.observe(elemento);
});


// =========================
// CORAÇÕES FLUTUANDO
// =========================

function criarCoracao() {

    const coracao = document.createElement("div");

    coracao.innerHTML = "❤️";

    coracao.classList.add("coracao-flutuante");

    coracao.style.left =
        Math.random() * 100 + "vw";

    coracao.style.fontSize =
        Math.random() * 15 + 12 + "px";

    coracao.style.animationDuration =
        Math.random() * 3 + 5 + "s";

    document.body.appendChild(coracao);

    setTimeout(() => {
        coracao.remove();
    }, 8000);
}


// Cria alguns corações
setInterval(criarCoracao, 1800);