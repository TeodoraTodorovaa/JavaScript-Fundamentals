function inventory(arr) {

    let heroes = [];
    for (const line of arr) {
        let [hero, level, items] = line.split(' / ');
        level = Number(level);
        //items = items.split(', ').sort((a, b) => a.localeCompare(b)).join(', ');


        let heroObj = {
            hero,
            level,
            items
        };

        heroes.push(heroObj);
    }
    heroes.sort((a, b) => a.level - b.level).forEach(hero => {
        console.log(`Hero: ${hero.hero}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    })
}

inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]
);