import { InfoStudentsGrifendor } from "../andrii/andrii";
const studentsContainer = document.querySelector(".students-gryffindor")
async function renderGryffindorStudents() {
const students= await InfoStudentsGrifendor()
students.forEach(student=> {
   const studentsCard = document.createElement("div")
   studentsCard.classList.add("students-card")
   studentsCard.innerHTML = `
   <img src="${student.image || 'https://via.placeholder.com/150'}" alt="${student.name}"> 
   `
}) 
}
renderGryffindorStudents()