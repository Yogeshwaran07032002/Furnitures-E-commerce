document.addEventListener("DOMContentLoaded", function() {
    const lessonCells = document.querySelectorAll('.lessons');
    lessonCells.forEach(function(cell) {
        const completed = parseInt(cell.getAttribute('data-completed'));
        const total = parseInt(cell.getAttribute('data-total'));
        const percentage = Math.round((completed / total) * 100);
        cell.textContent = `${completed}/${total} (${percentage}%)`;
    });
});
