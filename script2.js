// Funzione per calcolare la forza della password
function checkPasswordStrength() {
    const password = document.getElementById('password-input').value;
    const strengthBar = document.getElementById('strength-bar');
    const strengthText = document.getElementById('password-strength');
    
    let strength = 0;
    
    // Verifica la lunghezza della password
    if (password.length > 8) {
        strength += 1;
    }
    if (password.match(/[A-Z]/)) {
        strength += 1;
    }
    if (password.match(/[a-z]/)) {
        strength += 1;
    }
    if (password.match(/[0-9]/)) {
        strength += 1;
    }
    if (password.match(/[^A-Za-z0-9]/)) {
        strength += 1;
    }
    
    // Aggiorna la barra di forza e il testo
    if (strength <= 2) {
        strengthBar.style.width = '33%';
        strengthBar.style.backgroundColor = '#ff3b3b'; // Rosso per password debole
        strengthText.innerHTML = 'Debole';
    } else if (strength <= 4) {
        strengthBar.style.width = '66%';
        strengthBar.style.backgroundColor = '#ff9f00'; // Arancione per password moderata
        strengthText.innerHTML = 'Moderata';
    } else {
        strengthBar.style.width = '100%';
        strengthBar.style.backgroundColor = '#27ae60'; // Verde per password forte
        strengthText.innerHTML = 'Forte';
    }
}

// Funzione per generare una password sicura
function generateSecurePassword() {
    const length = 12; // Lunghezza della password
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+[]{}|;:,.<>?";
    let password = '';
    
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    document.getElementById('generated-password').value = password;
}

// Funzione per copiare la password
function copyPassword() {
    const passwordField = document.getElementById('generated-password');
    passwordField.select();
    passwordField.setSelectionRange(0, 99999); // Per dispositivi mobili
    document.execCommand('copy');
}
