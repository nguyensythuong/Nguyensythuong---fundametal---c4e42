let score= [45, 67,56,78,90,81]
let temp 
score.push (Number(prompt ("Enter a number")))
for (let i=0; i<5; i++){
    for (let j=i; j <score.length; j++){
        if (score[i]<score[j]){
            temp = score [i]
            score[i] = score [j]
            score[j]= temp
        }
    }
    console.log (score[i]) 
}
