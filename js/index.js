const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector('footer');
const copyright = document.createElement('p');
copyright.innerHTML = `&copy;Copyright ${thisYear} Buffy Summers. All rights reserved.`;
footer.appendChild(copyright);

var skills = ["Expert Vampire Slayer", "Hand to Hand Combat", "Martial Arts", "Research and Investigation", "Leadership", "Teamwork", "Works Well Under Pressure"];
var skillsSection = document.getElementById("Skills");
var skillsList = skillsSection.querySelector("ul");

for (var i = 0; i < skills.length; i++) {
    var skill = document.createElement("li");
    skill.textContent = skills[i];
    skillsList.appendChild(skill);
}

