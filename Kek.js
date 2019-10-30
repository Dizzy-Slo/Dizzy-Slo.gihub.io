var fl = 0;

function dinam(){
    fl = document.getElementById("Tovar").value;
    if(fl == 0){
        document.getElementById("RadioRaz").style.display = "none";
        document.getElementById("CheckUs").style.display = "none";
    }
    else {if(fl == 1){
        document.getElementById("RadioRaz").style.display = "none";
        document.getElementById("CheckUs").style.display = "none";
    }
    else {if (fl == 2){
            document.getElementById("RadioRaz").style.display = "block";
            document.getElementById("CheckUs").style.display = "none";
    }
          else {if (fl == 3){
                document.getElementById("RadioRaz").style.display = "block";
                document.getElementById("CheckUs").style.display = "block";
    }
}
}
}
    document.getElementById("sum").textContent="-";
}
function summa(){
    var price;
    var kol;
    var suma;
    if(fl == 0){
        price = 100;
        kol = document.getElementById("Kol").value;
        suma = kol*price;
        document.getElementById("sum").textContent = suma;
    }
    else if(fl == 1){
        price = 130;
        kol = document.getElementById("Kol").value;
        suma = kol*price;
        document.getElementById("sum").textContent = suma;
    }
    else if(fl == 2){
        price = 160;
        kol = document.getElementById("Kol").value;
        if(document.getElementById("Mal").checked)
            suma = kol*price*0.5;
        if(document.getElementById("Sr").checked)
            suma = kol*price;
        document.getElementById("sum").textContent = suma;
    }
    else if(fl == 3){
        price = 170;
        kol = document.getElementById("Kol").value;
        if(document.getElementById("Mal").checked)
            suma = kol*price*0.5;
        if(document.getElementById("Sr").checked)
            suma = kol*price;
        if(document.getElementById("Dost").checked)
            suma = suma + 50;
        document.getElementById("sum").textContent = suma;
    }
}
