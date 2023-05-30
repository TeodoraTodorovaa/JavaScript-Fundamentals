function storage(arr) {
    let storage = new Map();

    for (let line of arr) {
        let [product, quantity] = line.split(' ');
        quantity = Number(quantity);


        if (storage.has(product)) {
            let existing = storage.get(product);
            storage.set(product, existing + quantity);
        } else {
            storage.set(product, quantity);
        }
    }

    for (let [product, quantity] of storage) {
        console.log(`${product} -> ${quantity}`);

    }

}

storage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']
)