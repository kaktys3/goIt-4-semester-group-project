let BASE_URL = 'https://hp-api.onrender.com/api/characters'

let getInfoPeoples = async () => {
    try {
        let infoPeoples = await fetch(BASE_URL)
        let infoPeoplesArr = await infoPeoples.json()
        console.log(infoPeoplesArr)
    } catch (error) {
        console.error(error)
    }
}

getInfoPeoples()



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
        console.error(error)
    }
}

InfoSlytherinAndCharactersHouse()