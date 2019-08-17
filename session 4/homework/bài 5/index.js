let day = prompt ("Enter a number")
let newday = day.split (",")
let sochan = []
for (let i=0; i< newday.length; i++){
    if (newday[i] %2 == 0){
        sochan.push (newday[i])
    }
}
console.log (sochan)