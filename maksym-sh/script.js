import { InfoRavenclawAndCharactersHouse } from "../maksym-sh/api.js";

const studentsContainer = document.querySelector(".students-cards");

async function renderRavenclawStudents() {
    const students = await InfoRavenclawAndCharactersHouse();
    
    students.forEach(student => {
        const studentsCard = document.createElement("div");
        studentsCard.classList.add("students-card");
        studentsCard.innerHTML = `
            <img src="${student.image || 'https://via.placeholder.com/150'}" alt="${student.name}">
            <div class="students-text">
                <h3>${student.name}</h3>
            </div>
        `;
        studentsContainer.appendChild(studentsCard);
    });
}

renderRavenclawStudents();

