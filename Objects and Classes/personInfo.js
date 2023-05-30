function personInfo(firstName, secondName, age) {
    let personInfo = {
        firstName,
        secondName,
        age
    };

    for (const key in personInfo) {
        console.log(`${key}: ${personInfo[key]}`)
    }
}

personInfo("Peter",
    "Pan",
    "20"
);