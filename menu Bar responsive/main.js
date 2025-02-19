// Mettre à jour l'année dans le footer
const yearElement = document.getElementById('year');
const currentYear = new Date().getFullYear();
yearElement.textContent = currentYear;
