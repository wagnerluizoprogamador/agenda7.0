document.addEventListener('DOMContentLoaded', () => {
    // Seleciona os elementos da página
    const timeSlotsContainer = document.getElementById('time-slots-container');
    const agendamentoModal = document.getElementById('agendamento-modal');
    const closeBtn = document.querySelector('.close-btn');
    const horarioInput = document.getElementById('horario');

    // Função para mostrar o modal
    const showModal = (event) => {
        // Pega o horário do slot clicado
        const horario = event.target.getAttribute('data-horario');
        horarioInput.value = horario;
        agendamentoModal.style.display = 'block';
    };

    // Função para fechar o modal
    const closeModal = () => {
        agendamentoModal.style.display = 'none';
    };

    // Adiciona o evento de clique para fechar o modal
    closeBtn.addEventListener('click', closeModal);

    // Fecha o modal se o usuário clicar fora dele
    window.addEventListener('click', (event) => {
        if (event.target == agendamentoModal) {
            closeModal();
        }
    });

    // Função para gerar os horários na agenda
    const generateTimeSlots = () => {
        // Limpa o conteúdo atual
        timeSlotsContainer.innerHTML = '';
        
        // Define os horários de 09:00h às 18:00h
        for (let i = 9; i <= 18; i++) {
            const time = `${i < 10 ? '0' : ''}${i}:00`;
            
            // Adiciona a label do horário
            const timeLabel = document.createElement('div');
            timeLabel.classList.add('time-label');
            timeLabel.textContent = time;
            timeSlotsContainer.appendChild(timeLabel);

            // Adiciona os slots clicáveis para 7 dias
            for (let j = 0; j < 7; j++) {
                const slot = document.createElement('div');
                slot.classList.add('slot');
                slot.setAttribute('data-horario', time);
                slot.addEventListener('click', showModal);
                timeSlotsContainer.appendChild(slot);
            }
        }
    };

    // Chama a função para gerar a agenda quando a página carrega
    generateTimeSlots();
});