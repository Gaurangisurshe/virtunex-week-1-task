document.getElementById('start-countdown').addEventListener('click', () => {
    const eventDate = new Date(document.getElementById('event-date').value);
    const display = document.getElementById('countdown-display');

    const interval = setInterval(() => {
        const now = new Date();
        const timeLeft = eventDate - now;

        if (timeLeft <= 0) {
            clearInterval(interval);
            display.textContent = 'The event has started!';
        } else {
            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
            const seconds = Math.floor((timeLeft / 1000) % 60);
            display.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        }
    }, 1000);
});
function factorialIterative(num) {
    let result = 1;
    for (let i = 1; i <= num; i++) result *= i;
    return result;
}

function factorialRecursive(num) {
    if (num === 0 || num === 1) return 1;
    return num * factorialRecursive(num - 1);
}

document.getElementById('calc-iterative').addEventListener('click', () => {
    const input = parseInt(document.getElementById('factorial-input').value, 10);
    if (isNaN(input) || input < 0) {
        alert('Please enter a valid positive integer.');
        return;
    }
    document.getElementById('factorial-result').textContent =
        `Iterative Result: ${factorialIterative(input)}`;
});

document.getElementById('calc-recursive').addEventListener('click', () => {
    const input = parseInt(document.getElementById('factorial-input').value, 10);
    if (isNaN(input) || input < 0) {
        alert('Please enter a valid positive integer.');
        return;
    }
    document.getElementById('factorial-result').textContent =
        `Recursive Result: ${factorialRecursive(input)}`;
});
