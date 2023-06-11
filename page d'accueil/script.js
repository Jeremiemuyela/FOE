// Récupération des éléments du DOM
const form = document.getElementById('filter-form');
const locationInput = document.getElementById('location');
const jobtypeInput = document.getElementById('job-type');
const categoryInput = document.getElementById('category');
const jobList = document.getElementById('job-list');

// Ajout de l'écouteur d'événement au formulaire
form.addEventListener('submit', filterJobs);

// Fonction de filtrage des offres d'emploi
function filterJobs(event) {
    event.preventDefault(); // Empêcher la soumission du formulaire

    const location = locationInput.value.toLowerCase().trim();
    const jobtype = jobtypeInput.value.toLowerCase().trim();
    const category = categoryInput.value.toLowerCase().trim();

    // Masquer toutes les offres d'emploi
    const jobs = jobList.querySelectorAll('.job');
    jobs.forEach(job => {
        job.style.display = 'none';
    });

    // Afficher uniquement les offres d'emploi correspondant aux critères de filtrage
    jobs.forEach(job => {
        const jobLocation = job.querySelector('.location').textContent.toLowerCase();
        const jobjobtype = job.querySelector('.jobtype').textContent.toLowerCase();
        const jobCategory = job.querySelector('.category').textContent.toLowerCase();

        if (jobLocation.includes(location) && jobjobtype.includes(jobtype) && (category === '' || jobCategory === category)) {
            job.style.display = 'block';
        }
    });
}