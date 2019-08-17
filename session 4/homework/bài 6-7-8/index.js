let district = ["ST", "BĐ", "BTL","CG","ĐĐ","HBT"]
let population = ["150.300","247.100","333.300","266.800","420.900","318.000"]
let max = 0;
for(let i= 0; i < population.length; i++){
    if(population[i] > max){
        max = population[i];
    }
}
console.log (max)
let min = population[0];
for(let i= 1; i < population.length; i++){
    if(population[i] < min){
        min = population[i];
    }
}
console.log (min)
console.log (`${district[population.indexOf(max)]}`)
console.log (`${district[population.indexOf(min)]}`)
