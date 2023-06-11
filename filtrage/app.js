// Récupération des éléments du DOM
const form = document.getElementById('filter-form');
const titleInput = document.getElementById('title');
const locationInput = document.getElementById('location');
const categoryInput = document.getElementById('category');
const jobList = document.getElementById('job-list');

// Ajout de l'écouteur d'événement au formulaire
form.addEventListener('submit', filterJobs);

// Fonction de filtrage des offres d'emploi
function filterJobs(event) {
    event.preventDefault(); // Empêcher la soumission du formulaire

    const title = titleInput.value.toLowerCase().trim();
    const location = locationInput.value.toLowerCase().trim();
    const category = categoryInput.value.toLowerCase().trim();

    // Masquer toutes les offres d'emploi
    const jobs = jobList.querySelectorAll('.job');
    jobs.forEach(job => {
        job.style.display = 'none';
    });

    // Afficher uniquement les offres d'emploi correspondant aux critères de filtrage
    jobs.forEach(job => {
        const jobTitle = job.querySelector('.title').textContent.toLowerCase();
        const jobLocation = job.querySelector('.location').textContent.toLowerCase();
        const jobCategory = job.querySelector('.category').textContent.toLowerCase();

        if (jobTitle.includes(title) && jobLocation.includes(location) && (category === '' || jobCategory === category)) {
            job.style.display = 'block';
        }
    });
}
let searchbtn = document.querySelector('.searchbtn');
        let closebtn = document.querySelector('.closebtn');
        let searchbox = document.querySelector('.searchbox');
        let navigation = document.querySelector('.navigation');
        let menutoggle = document.querySelector('.menutoggle');
        let header = document.querySelector('header');
        searchbtn.onclick = function () {
            searchbox.classList.add('active');
            closebtn.classList.add('active');
            searchbtn.classList.add('active');
            menutoggle.classList.add('hide');
            header.classList.remove('open');
        }
        closebtn.onclick = function () {
            searchbox.classList.remove('active');
            closebtn.classList.remove('active');
            searchbtn.classList.remove('active');
            menutoggle.classList.remove('hide');
        }
        menutoggle.onclick = function () {
            header.classList.toggle('open');
            closebtn.classList.remove('active');
            searchbtn.classList.remove('active');
            menutoggle.classList.remove('hide');
        }