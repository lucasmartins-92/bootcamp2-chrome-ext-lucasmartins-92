(() => {
    const oiButton = document.getElementById("oiButton");
    const resetButton = document.getElementById("resetButton");
    const titulo = document.getElementById("titulo");

    const mensagemOriginal = titulo?.textContent || "Oie, pessoas!";
    let alternado = false;

    function alternarMensagem() {
        if (!titulo) return;
        alternado = !alternado;
        titulo.textContent = alternado ? "Oie pra você também!" : mensagemOriginal;
    }

    function resetarMensagem() {
        if (!titulo) return;
        alternado = false;
        titulo.textContent = mensagemOriginal;
    }

    oiButton?.addEventListener("click", alternarMensagem);
    resetButton?.addEventListener("click", resetarMensagem);
})();