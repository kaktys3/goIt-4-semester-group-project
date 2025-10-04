let BASE_URL = 'https://hp-api.onrender.com/api/characters'

let getInfoPeoples = async () => {
  try {
    let infoPeoples = await fetch(BASE_URL);
    let infoPeoplesArr = await infoPeoples.json();
    console.log(infoPeoplesArr);
  } catch (error) {
    console.error(error);
  }
};

getInfoPeoples();



let getInfoTeacher = async () => {
    try {
        let infoTeacher = await fetch(`${BASE_URL}/staff`)
        let infoTeacherArr = await infoTeacher.json()
        console.log(infoTeacherArr)
    } catch (error) {
        console.error(error)
    }
}

getInfoTeacher()

// 99370b33-d5a7-465b-91b1-55ef2a40182b

// fetch('https://hp-api.onrender.com/api/characters')
//     .then(res => res.json())
//     .then(characters => {
//         const found = characters.find(char => char.name === 'Nymphadora Tonks');
//         if (found) {
//             console.log('Знайдено:', found);
//         } else {
//             console.log('Megan Jones не знайдено');
//         }
//     })
//     .catch(err => console.error(err));


let getInfoAllStudents = async () => {
    try {
        let infoAllStudents = await fetch(`${BASE_URL}/students`)
        let infoAllStudentsArr = await infoAllStudents.json()
        console.log(infoAllStudentsArr)
    } catch (error) {
        console.error(error)
    }
}

getInfoAllStudents()


let InfoStudentsGrifendor = async () => {
    try {
        let infoApiStudentsGrifendor = await fetch(`${BASE_URL}/house/gryffindor`)
        let infoStudentsGrifendorArr = await infoApiStudentsGrifendor.json()
        console.log(infoStudentsGrifendorArr)
    } catch (error) {
        console.error(error)
    }
}

InfoStudentsGrifendor()



let InfoSlytherinAndCharactersHouse = async () => {
    try {
        let infoSlytherinAndCharacters = await fetch(`${BASE_URL}/house/slytherin`)
        let infoSlytherinAndCharactersArr = await infoSlytherinAndCharacters.json()
        console.log(infoSlytherinAndCharactersArr)
    } catch (error) {

    }
}

InfoSlytherinAndCharactersHouse()



let buttonFaculty = document.querySelector('.all-faculty')
let arrInformationHafflepuff = []

let focusButtonFuculty = () => {
    let allButtonFaculty = document.querySelectorAll('.all-faculty__button')

    allButtonFaculty.forEach((e) => {
        e.style.background = '#d9d9d9'
    })

    buttonFaculty.addEventListener('click', (e) => {
        if (e.target) {
            e.target.style.background = '#f9b50c'

        }
    })
}

buttonFaculty.addEventListener('click', () => {
    focusButtonFuculty()
})

let hufflepuffPerson = async() => {
    let response = await fetch(BASE_URL)
    let data = await response.json()

    arrInformationHafflepuff = data.filter(e => e.house === "Hufflepuff")

    return arrInformationHafflepuff
}

let fasePersone = async (fetch) => {
    let fasePersone = document.querySelectorAll('.information-for-pesons-hufflepuff')
    let timer = -1
    let arr = await fetch
    arr.forEach(person => {
        timer++
        if (person.image != "") {
            fasePersone[timer].style.backgroundImage = `url(${person.image})`
            fasePersone[timer].style.backgroundSize = 'cover'
        } else {
            fasePersone[timer].style.backgroundImage = `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDIZsl5FF9XT27r8KxLQkdbQkWaWgItPHYMA&s)`
            fasePersone[timer].style.backgroundSize = 'cover'
        }

    })
}

let alternateName = async (fetch) => {
    let alternateName = document.querySelectorAll('.information-for-pesons-hufflepuff__alternate-names')
    let timer = -1
    let arrInformation = await fetch
    arrInformation.forEach(name => {
        timer++
        if (name.alternate_names.length < 1) {
            alternateName[timer].textContent = 'Dont have alternative names'
        } else {
            alternateName[timer].textContent = name.alternate_names
        }
    })
}

let faculty = async (fetch) => {
    let allFaculty = document.querySelectorAll('.information-for-pesons-hufflepuff__faculty')
    let timer = -1
    let facultyInformation = await fetch
    facultyInformation.forEach(faculty => {
        timer++
        allFaculty[timer].textContent = faculty.house
    })
}

let birthday = async (fetch) => {
    let dateBirthday = document.querySelectorAll('.information-for-pesons-hufflepuff__birthday')
    let timer = -1
    let birthdayInformation = await fetch
    birthdayInformation.forEach(date => {
        timer++
        if (date.dateOfBirth) {
            dateBirthday[timer].textContent = date.dateOfBirth
        } else {
            dateBirthday[timer].textContent = '20th century AD'
        }
    })
}

let nameStudents = async (fetch) => {
    let name = document.querySelectorAll('.information-for-pesons-hufflepuff__name')
    let timer = -1
    let nameInformation = await fetch
    nameInformation.forEach(student => {
        timer++
        name[timer].textContent = student.actor
        if (student.actor === '') {
            name[timer].textContent = 'Cadwallader'
        }
    })
}

let request = hufflepuffPerson();

fasePersone(request)
alternateName(request)
faculty(request)
birthday(request)
nameStudents(request)