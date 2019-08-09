const i = prompt ("so can nhap")
if (i>0 && i<=100){
    if (i<30){
        console.log("rainy")
    }
    else if (i>=30 && i<60){
        console.log ("cloudy")
    }
    else {
        console.log ("sunny")
    }
}
else {
    console.log ("sai")
}