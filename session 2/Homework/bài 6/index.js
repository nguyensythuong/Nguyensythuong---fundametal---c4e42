let a = Number (prompt("số a cần nhập"))
let b = Number (prompt("số b cần nhập"))
let c = Number (prompt("số c cần nhập"))
if  (a == 0) {
    if (b == 0 && c == 0 ){
        console.log ("phương trình vô nghiệm")
    }
    else if( b != 0 && c != 0){
        let x = -b/c 
        console.log (x=-b/c)
    }
    else {
        console.log ("phương trình vô nghiệm")
    }

}
else {
    let i = b**2 - 4*a*c
    if (i<0){
        console.log ("Phương trình vô nghiệm")
    }
    else if (i==0){
        let x = -b/2*a 
        console.log (x)
    }
    else {
        let x1 = (( -b + Math.sqrt(i))/2*a)
        let x2 = (( -b - Math.sqrt(i))/2*a)
        console.log (x1)
        console.log (x2)
    }
}