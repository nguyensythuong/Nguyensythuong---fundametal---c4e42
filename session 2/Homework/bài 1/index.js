const i = prompt ("thang can nhap")
if (i>12 || i<1){
    console.log ("sai")
}
else {
    if (i<=3){
        console.log ("mua xuan")
    }
    else if (i<=6){
        console.log ("mua ha")
    }
    else if (i<=9){
        console.log ("mua thu")
    }
    else{
        console.log ("mua dong")
    }
}