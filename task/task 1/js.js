document.addEventListener('DOMContentLoaded', function () {
    const amounts = document.querySelectorAll('.amt, .amt1, .amt11');

    amounts.forEach(amount => {
        const value = parseFloat(amount.querySelector('div').textContent.replace(/[^0-9.-]+/g,""));
        
        if (value > 0) {
            amount.querySelector('div').classList.add('green');
        } else if (value < 0) {
            amount.querySelector('div').classList.add('red');
        }
    });
});
