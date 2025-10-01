let BASE_URL = 'https://hp-api.onrender.com/api/characters'
let InfoRavenclawAndCharactersHouse = async () => {
    try {
        let infoRavenclawAndCharacters = await fetch(`${BASE_URL}/house/ravenclaw`)
        let infoRavenclawAndCharactersArr = await infoRavenclawAndCharacters.json()
        console.log(infoRavenclawAndCharactersArr)
    } catch (error) {
        console.error(error)
    }
}

InfoRavenclawAndCharactersHouse()