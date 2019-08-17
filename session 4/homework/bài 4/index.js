let day = ["3","4","5","6","7"]
let sochan = []
for (let i=0; i<day.length; i++){
    if(day[i] %2 == 0){
        sochan.push (day[i])
    }
}
console.log (sochan)