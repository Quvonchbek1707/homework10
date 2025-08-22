let countries = new Set([
    { Russian: 9 },
    { English: 91 },
    { French: 45 },
    { Spanish: 24 },
    { Portuguese: 9 },
    { Dutch: 8 },
    { German: 7 },
    { Arabic: 25 },
    { Chinese: 5 },
    { Swahili: 4 },
    { Serbian: 4 }
]);

function mostSpokenLanguages(set, val){
    const arr = Array.from(set);

    const result = arr.map(obj => {
        const country = Object.keys(obj)[0];
        const value = obj[country];
        return { [country]: value };
    });

    result.sort((a, b) => {
        const valA = Object.values(a)[0];
        const valB = Object.values(b)[0];
        return valB - valA;
    });
    
    return result.slice(0, val)
}



console.log(mostSpokenLanguages(countries, 3))