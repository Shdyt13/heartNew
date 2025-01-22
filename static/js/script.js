function checkName() {
    const inputName = document.getElementById('nameInput').value;
    const correctName = 'Qurratu Aini Sukma';

    if (inputName === correctName) {
        // Jika nama benar, arahkan ke halaman love.html
        window.location.href = 'love.html';
    } else {
        // Jika nama salah, arahkan ke halaman wrong.html
        window.location.href = 'wrong.html';
    }
}
