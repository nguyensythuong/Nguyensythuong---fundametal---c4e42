// ------------------------------------------------------------------------------------bai 3
let day = prompt("Enter a number")
let newday = day.split (" ")
let sum = 0
for(let i=0; i< newday.length; i++){
    sum += Number(newday[i])
}
console.log (sum)


