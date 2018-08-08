function reloj()
{
    var clock = document.getElementById("Clock");

    var fecha = new Date();
    var hora = fecha.getHours();
    var minuto = fecha.getMinutes();
    var segundo = fecha.getSeconds();
    if(segundo < 10 && minuto < 10 && hora < 10){
        var time = "0" + hora + ":0" + minuto + ":0" + segundo;
    }
    else if(segundo < 10 && minuto < 10){
        var time = hora + ":0" + minuto + ":0" + segundo;
    }
    else if(segundo < 10 && hora < 10){
        var time = "0" + hora + ":" + minuto + ":0" + segundo;
    }
    
    else if(segundo < 10){
        var time = hora + ":" + minuto + ":0" + segundo;
    }

    else if(minuto < 10){
        var time = hora + ":0" + minuto + ":" + segundo;
    }

    else if(hora < 10){
        var time ="0" + hora + ":" + minuto + ":" + segundo;
    }
    clock.innerHTML = time;
}
reloj();
setInterval(reloj,1000);
