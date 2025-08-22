function shorten(arr){
    let arr1 = arr.split(" ").map((element) => {
        if(element.length>2){
            return element = `${element[0]}${element.length-2}${element[element.length-1]}`
        }else{
            return element
        }
    });
    return arr1.join(" ")
}
const input = "Toshkent";
const result = shorten(input);
console.log(result)