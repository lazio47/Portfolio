const facebookIcon = document.querySelector('.fa-facebook');
const linkedinIcon = document.querySelector('.fa-linkedin');
const githubIcon = document.querySelector('.fa-github');

document.getElementsByClassName("github")[0].hidden = true;
document.getElementsByClassName("linkedin")[0].hidden = true;

const hoverFacebookIcon = () => {
    document.getElementsByClassName("facebook")[0].hidden = false;
}

const hoverGithubIcon = () => {
    document.getElementsByClassName("github")[0].hidden = false;
}

const outGithubIcon = () => {
    document.getElementsByClassName("github")[0].hidden = true;
}

githubIcon.addEventListener("mouseover", hoverGithubIcon);
githubIcon.addEventListener("mouseout", outGithubIcon);


const hoverLinkedinIcon = () => {
    document.getElementsByClassName("linkedin")[0].hidden = false;
}

const outLinkedinIcon = () => {
    document.getElementsByClassName("linkedin")[0].hidden = true;
}

linkedinIcon.addEventListener("mouseover", hoverLinkedinIcon);
linkedinIcon.addEventListener("mouseout", outLinkedinIcon);