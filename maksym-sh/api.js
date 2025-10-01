const BASE_URL = 'https://hp-api.onrender.com/api/characters'

export let InfoRavenclawAndCharactersHouse = async () => {
    try {
        let infoRavenclawAndCharacters = await fetch(`${BASE_URL}/house/ravenclaw`)
        let infoRavenclawAndCharactersArr = await infoRavenclawAndCharacters.json()
        console.log(infoRavenclawAndCharactersArr) // ← виправлена назва змінної
        return infoRavenclawAndCharactersArr // ← додано return
    } catch (error) {
        console.error(error)
        return [] // ← повертаємо пустий масив у випадку помилки
    }
}