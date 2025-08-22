function afterNYears(obj, year) {
    const map = new Map(Object.entries(obj));
    const newMap = new Map(
        Array.from(map, ([key, value]) => [key, value + year])
    );
    return Object.fromEntries(newMap);
}


console.log(afterNYears({
  "Joel" : 32,
  "Fred" : 44,
  "Reginald" : 65,
  "Susan" : 33,
  "Julian" : 13
}, 1));
// Natija: { "Joel" : 33, "Fred" : 45, "Reginald" : 66, "Susan" : 34, "Julian" : 14 }

console.log(afterNYears({
  "Baby" : 2,
  "Child" : 8,
  "Teenager" : 15,
  "Adult" : 25,
  "Elderly" : 71
}, 19));
// Natija: { "Baby" : 21, "Child" : 27, "Teenager" : 34, "Adult" : 44, "Elderly" : 90 }

console.log(afterNYears({
  "Genie" : 1000,
  "Joe" : 40
}, 5));
// Natija: { "Genie" : 1005, "Joe" : 45 }