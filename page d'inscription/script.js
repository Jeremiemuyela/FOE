function validateForm() {
    var username = document.forms["signupForm"]["username"].value;
    var password = document.forms["signupForm"]["password"].value;
    var email = document.forms["signupForm"]["email"].value;
    var jobType = document.forms["signupForm"]["jobType"].value;

    if (username == "") {
        alert("Veuillez entrer un nom d'utilisateur.");
        return false;
    }

    if (password == "") {
        alert("Veuillez entrer un mot de passe.");
        return false;
    }

    if (email == "") {
        alert("Veuillez entrer une adresse e-mail.");
        return false;
    }

    if (jobType == "tous") {
        // Afficher toutes les offres d'emploi
    }

    if (jobType == "temps-plein") {
        // Afficher les offres d'emploi à temps plein uniquement
    }

    if (jobType == "temps-partiel") {
        // Afficher les offres d'emploi à temps partiel uniquement
    }

    if (jobType == "freelance") {
        // Afficher les offres d'emploi pour les travailleurs indépendants uniquement
    }
}
const container = document.getElementById('container');
const loginButton = document.getElementById('login');
const signUpButton = document.getElementById('signup');

signUpButton.addEventListener('click', () => {
    container.classList.add('panel-active');
})

loginButton.addEventListener('click', () => {
    container.classList.remove('panel-active');
})
const menu = document.querySelector('menu');
const navBar = document.querySelector('navbar');

signUpButton.addEventListener('click', () => {
    container.classList.toggle('mobile');
})