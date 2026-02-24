const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector('footer');
const copyright = document.createElement('p');
copyright.innerHTML = `&copy;Copyright ${thisYear} Buffy Summers. All rights reserved.`;
footer.appendChild(copyright);

let skills = ["Expert Vampire Slayer", "Hand to Hand Combat", "Martial Arts", "Research and Investigation", "Leadership", "Teamwork", "Works Well Under Pressure"];
let skillsSection = document.getElementById("Skills");
let skillsList = skillsSection.querySelector("ul");

for (let i = 0; i < skills.length; i++) {
    let skill = document.createElement("li");
    skill.textContent = skills[i];
    skillsList.appendChild(skill);
}



const messageForm = document.getElementsByName("leave_message");
messageForm[0].addEventListener("submit", (event) => {
    event.preventDefault();
    const name = event.target.usersName.value;
    const email = event.target.usersEmail.value;
    const message = event.target.usersMessage.value;
    console.log("Name: " + name);
    console.log("Email: " + email);
    console.log("Message: " + message);

    const messageSection = document.getElementById("messages");
    const messageList = messageSection.querySelector("ul");
    const newMessage = document.createElement("li");
    newMessage.innerHTML =`
        <a href="mailto:${email}">${name}</a>
        <span>${message}</span>
    `;

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.classList.add("myButton");
    removeButton.setAttribute("type", "button");
    removeButton.addEventListener("click", (event) => {
        const entry = event.target.parentNode;
        entry.remove();
        });

    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);

    event.target.reset();

});
