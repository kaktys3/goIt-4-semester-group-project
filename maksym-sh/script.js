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
        : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDIZsl5FF9XT27r8KxLQkdbQkWaWgItPHYMA&s';

        studentsCard.style.backgroundImage = imageUrl

    });
}



renderRavenclawStudents();

