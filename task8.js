const scores = new Set([
	["A", 100],
	["B", 14],
	["C", 9],
	["D", 28],
	["E", 145],
	["F", 12],
	["G", 3],
	["H", 10],
	["I", 200],
	["J", 100],
	["K", 114],
	["L", 100],
	["M", 25],
	["N", 450],
	["O", 80],
	["P", 2],
	["Q", 12],
	["R", 400],
	["S", 113],
	["T", 405],
	["U", 11],
	["V", 10],
	["W", 10],
	["X", 3],
	["Y", 210],
	["Z", 23],
])


function nameScore(str){
    let res = 0;
    str = str.toUpperCase()
    const getValueFromSet = char => Array.from(scores).find(([letter]) => letter === char)?.[1] || 0;

    for(let i = 0; i<str.length; i++){
        res+=getValueFromSet(str[i])
    }
    if(res<=60){
        console.log("NOT TOO GOOD")
    }else if(res>60 && res <=300){
        console.log("PRETTY GOOD")
    }else if(res>300 && res<600){
        console.log("VERY GOOD")
    }else{
        console.log("THE BEST")
    }
}

nameScore(prompt("ism kiriting"))