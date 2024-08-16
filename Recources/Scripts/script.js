const facebookIcon = document.querySelector('.fa-facebook');
const linkedinIcon = document.querySelector('.fa-linkedin');
const githubIcon = document.querySelector('.fa-github');

document.getElementsByClassName("facebook")[0].hidden = true;
document.getElementsByClassName("github")[0].hidden = true;
document.getElementsByClassName("linkedin")[0].hidden = true;

const hoverFacebookIcon = () => {
    document.getElementsByClassName("facebook")[0].hidden = false;
}

const outFacebookIcon = () => {
    document.getElementsByClassName("facebook")[0].hidden = true;
}

facebookIcon.addEventListener("mouseenter", hoverFacebookIcon);
facebookIcon.addEventListener("mouseout", outFacebookIcon);

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