let acreage = ["117.43","9.224","43.35","12.04","9.96","10.09"]
let matdo = []
for (i=0 ; i<population.length; i++){
    matdo.push(population[i]/acreage [i])
}
console.log (matdo)
let matdoTB = []
let sum = 0
for(i=0; i<population.length; i++){
    sum += matdo[i]
}

matdoTB.push (sum/(district.length))
console.log(matdoTB)
