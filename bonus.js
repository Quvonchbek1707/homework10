let map1 = new Map([
	["round1", { me: 10, spouse: 5, }],
	["round2", { me: 5, spouse: 20, }],
	["round3", { me: 10, spouse: 10, }],

])

let map2 = new Map([
	["round1", { me: 40, spouse: 5, }],
	["round2", { me: 9, spouse: 10, }],
	["round3", { me: 9, spouse: 10, }],
])

function determineWinnerOfFight(map){
    let a = Object.entries(map.get("round1"))
    let b = Object.entries(map.get("round2"))
    let c = Object.entries(map.get("round3"))
    a = [a[0][1], a[1][1]]
    b = [b[0][1], b[1][1]]
    c = [c[0][1], c[1][1]]
    let me = 0;
    if(a[0]>a[1]){
        me+=2
    }else if(a[0]==a[1]){
        me++;
    }
    if(b[0]>b[1]){
        me+=2
    }else if(b[0]==b[1]){
        me++;
    }
        if(c[0]>c[1]){
        me+=2
    }else if(c[0]==c[1]){
        me++;
    }
    if(me===3){
        console.log("HECH KIM!")
    }else if(me>3){
        console.log("MEN")
    }else{
        console.log("TURMUSH O'RTOG'IM!")
    }
}
determineWinnerOfFight(map1) // ➞ "HECH KIM!"
determineWinnerOfFight(map2) // ➞ "TURMUSH O'RTOG'IM!"
