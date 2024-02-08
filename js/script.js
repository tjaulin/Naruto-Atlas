const baseurl = 'https://narutodb.xyz/api'

async function getAllCharacters() {
    const characters = await fetch(`${baseurl}/character?limit=10000`)
    const charactersJson = await characters.json();
    console.log('charactersJson :')
    console.log(charactersJson)
}

getAllCharacters();