// Initialisation de Fancybox
Fancybox.bind('[data-fancybox="gallery"]', {
    Toolbar: {
        display: {
            left: ["infobar"],
            middle: [],
            right: ["slideshow", "fullscreen", "thumbs", "close"],
        },
    },
    Hash: false,
});

// Filtrage des projets
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.dataset.category;

        filterButtons.forEach(filterButton => filterButton.classList.remove('active'));
        button.classList.add('active');

        projectCards.forEach(card => {
            card.style.display = category === 'all' || card.classList.contains(category)
                ? 'block'
                : 'none';
        });
    });
});