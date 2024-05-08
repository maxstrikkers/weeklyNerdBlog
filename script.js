document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;
    const indicatorsContainer = document.querySelector('.carousel-indicators');
    let currentIndex = 0;

    items[0].style.display = 'block'; // Toon het eerste item standaard
    for (let i = 0; i < totalItems; i++) {
        const span = document.createElement('span');
        span.addEventListener('click', function() {
            currentIndex = i;
            updateCarousel();
        });
        indicatorsContainer.appendChild(span);
    }

    document.querySelector('.next').addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % totalItems;
        updateCarousel();
    });

    document.querySelector('.prev').addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        updateCarousel();
    });

    function updateCarousel() {
        for (let i = 0; i < totalItems; i++) {
            items[i].style.display = 'none';
            indicatorsContainer.children[i].classList.remove('active');
        }
        items[currentIndex].style.display = 'block';
        indicatorsContainer.children[currentIndex].classList.add('active');
    }

    updateCarousel();
});
