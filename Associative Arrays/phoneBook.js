function phoneBook(arr) {
    let phonebook = {};

    for (const line of arr) {
        let tokens = line.split(' ');
        let name = tokens[0];
        let phone = tokens[1];
        //let [name,phone]=line.line.split(' ');
        phonebook[name] = phone;
    }

    for (const name in phonebook) {
        console.log(`${name} -> ${phonebook[name]}`);
    }
}

phoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']
)