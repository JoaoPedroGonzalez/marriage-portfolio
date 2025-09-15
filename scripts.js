// Script para revelar os métodos de pagamento
document.getElementById('button-payments').addEventListener('click', function(event) {
    event.preventDefault();
    var hiddenSection = document.getElementById('section5-payments');
    
    const displayStyle = window.innerWidth < 768 ? 'flex' : 'grid';
    hiddenSection.style.display = displayStyle;
    
    setTimeout(() => {
        hiddenSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
});

// Adiciona o mesmo evento para o botão da nav
document.getElementById('nav-button-payments').addEventListener('click', function(event) {
    event.preventDefault();
    var hiddenSection = document.getElementById('section5-payments');
    
    const displayStyle = window.innerWidth < 768 ? 'flex' : 'grid';
    hiddenSection.style.display = displayStyle;
    
    setTimeout(() => {
        hiddenSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
});

// Script para escolher um dos métodos de pagamento
document.addEventListener('DOMContentLoaded', function() {
    // MBWay toggle - MOBILE ONLY!
    const mbwayContainer = document.getElementById('mbway-container');
    
    mbwayContainer.addEventListener('click', function(e) {
        if (window.innerWidth <= 767) {  // Only work on mobile!
            const divider = document.getElementById('mbway-divider');
            const text = document.getElementById('mbway-text');
            
            if (divider.style.display === 'block') {
                divider.style.display = 'none';  // Puff! 👻
                text.style.display = 'none';     
            } else {
                divider.style.display = 'block'; // Hey! 👋
                text.style.display = 'block';    
            }
        }
    });
    
    // Multibanco toggle - MOBILE ONLY!
    const multibancoContainer = document.getElementById('multibanco-container');
    
    multibancoContainer.addEventListener('click', function(e) {
        if (window.innerWidth <= 767) {  // Only work on mobile!
            const divider = document.getElementById('multibanco-divider');
            const text = document.getElementById('multibanco-text');
            
            if (divider.style.display === 'block') {
                divider.style.display = 'none';  // Puff! 👻
                text.style.display = 'none';     
            } else {
                divider.style.display = 'block'; // Hey! 👋
                text.style.display = 'block';    
            }
        }
    });
});

// Script para adicionar links de MBWay e para copiar o IBAN
document.addEventListener('DOMContentLoaded', function() {
    const ibanElement = document.querySelector('.copy-iban');
    if (ibanElement) {
        ibanElement.addEventListener('click', function() {
            const iban = "PT50002300004569918135894";
            navigator.clipboard.writeText(iban).then(function() {
                alert('IBAN copiado! 📋');
            }).catch(function() {
                alert('Não foi possível copiar o IBAN automaticamente.');
            });
        });
    }
});
