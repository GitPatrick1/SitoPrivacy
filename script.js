window.onload = function() {
    // Controlla se i cookie sono già stati accettati
    if (!localStorage.getItem('cookiesAccepted')) {
        document.getElementById('cookie-banner').style.display = 'flex'; // Mostra il banner
    }

    // Funzione per accettare i cookie
    document.getElementById('accept-cookies').addEventListener('click', function() {
        localStorage.setItem('cookiesAccepted', 'true'); // Memorizza l'accettazione
        document.getElementById('cookie-banner').style.display = 'none'; // Nascondi il banner
    });
};
