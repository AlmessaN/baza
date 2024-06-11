document.getElementById('loginButton').addEventListener('click', () => {
    document.getElementById('loginForm').classList.toggle('hidden');
});

document.getElementById('submitLogin').addEventListener('click', () => {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === 'admin123') {
        document.getElementById('loginButton').style.display = 'none'; // Сховати кнопку входу
        document.getElementById('loginForm').classList.add('hidden');
        document.getElementById('databaseStructure').classList.remove('hidden');
    } else {
        alert('Невірний логін або пароль');
    }
});
