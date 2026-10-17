// Aguarda todo o HTML carregar antes de rodar o script
document.addEventListener('DOMContentLoaded', function() {
    
    const formulario = document.getElementById('inscricaoForm');
    const blocoMensagem = document.getElementById('mensagemSucesso');

    if (formulario) {
        formulario.addEventListener('submit', function(event) {
            // Trava o recarregamento da página e a subida para o topo
            event.preventDefault();

            // Captura os dados digitados
            const nomeUsuario = document.getElementById('nome').value.trim();
            const campoAtividade = document.getElementById('atividade');
            const atividadeSelecionada = campoAtividade.options[campoAtividade.selectedIndex].text;

            // Mostra o pop-up obrigatório do requisito básico
            alert(`Inscrição enviada com sucesso para o GeekVerse!`);

            // Injeta a mensagem visual na tela
            if (blocoMensagem) {
                blocoMensagem.innerHTML = `🎉 Parabéns, <strong>${nomeUsuario}</strong>! Sua vaga para <strong>${atividadeSelecionada}</strong> está confirmada.`;
                blocoMensagem.className = "sucesso-alerta";
            }

            // Limpa os campos do formulário
            formulario.reset();
        });
    }
});
