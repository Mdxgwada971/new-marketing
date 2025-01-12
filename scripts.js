document.addEventListener('DOMContentLoaded', function() {
    // Script pour gérer le carrousel d'images
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    const carouselContainer = document.querySelector('.carousel-container');
    const slides = document.querySelectorAll('.carousel-slide');
    let index = 0;

    function showSlide(n) {
        if (n >= slides.length) { index = 0; }
        if (n < 0) { index = slides.length - 1; }
        carouselContainer.style.transform = 'translateX(' + (-index * 100) + '%)';
    }

    prevBtn.addEventListener('click', function() {
        index--;
        showSlide(index);
    });

    nextBtn.addEventListener('click', function() {
        index++;
        showSlide(index);
    });

    // Afficher la première diapositive
    showSlide(index);

    // Script pour gérer les soumissions de formulaire, animations, etc.
    const newsletter[_{{{CITATION{{{_1{](https://github.com/js202005082300/Aide-m-moires/tree/c85c562d508c68fa086972462338ed773a25c8ac/JavaScript%2Fcours%2F004_op%C3%A9rateurs%2Fnote.md)[_{{{CITATION{{{_2{](https://github.com/NathanVD/presences/tree/34d67dd7fb6348ee2b3e7087c9ba5d7450f8e2f7/resources%2Fviews%2Ftemplates%2Fhome%2Fnav.blade.php)[_{{{CITATION{{{_3{](https://github.com/NafisianCastle/WebTech-E/tree/e9f3c4a4c16f2e0c200b81ed04c5ee98ecbeb4cb/Lab%20Task-9%2Fadmin%2Fview%2FaddEditor.php)[_{{{CITATION{{{_4{](https://github.com/Fr3dyS/skola/tree/c8602e492d683be53e06e0791cd170e7452fecc2/htdocs%2FPololetniProjekt%2Flaptop-ui-master%2Fvozy.php)[_{{{CITATION{{{_5{](https://github.com/UuzumakiNaruto/CCIMS/tree/ebcfd7feb322a8a28081a1977f0afe5ad6c24034/CCIMS%2Fotp.php)