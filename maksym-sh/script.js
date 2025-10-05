import { InfoRavenclawAndCharactersHouse } from "./api.js";

const studentsContainer = document.querySelector(".students-cards");

async function renderRavenclawStudents() {
    const students = await InfoRavenclawAndCharactersHouse();
    
    students.forEach(student => {
        const studentsCard = document.createElement("div");
        studentsCard.classList.add("students-card");
        studentsCard.innerHTML = `
            <div class="students-text">
                <h3 class="students-name">${student.name}</h3>
                <p class="students-alternate">${student.alternate_names}</p>
                <p class="students-house">${student.house}</p>
                <p class="students-birth">${student.dateOfBirth}</p>
                <a class="more-info">Більше інформації</a>
            </div>
            `;
        studentsCard.style.backgroundImage = `url(${student.image})`
        studentsContainer.appendChild(studentsCard);

        const imageUrl = student.image && student.image.trim() !== ''
        ? student.image
        : 'https://placehold.co/600x400/png';

        studentsCard.style.backgroundImage = imageUrl
    });
}

// async function faceStudent() {
//     const card = document.querySelectorAll(".student-card");
//     let timer = -1
//     let fetchStudentImage = await InfoRavenclawAndCharactersHouse()
//     console.log(fetchStudentImage)
// }
// faceStudent()

renderRavenclawStudents();

