function convertToObject(inputJSON) {
    let info = JSON.parse(inputJSON);

    for (const key in info) {
        console.log(`${key}: ${info[key]}`)

    }
}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');