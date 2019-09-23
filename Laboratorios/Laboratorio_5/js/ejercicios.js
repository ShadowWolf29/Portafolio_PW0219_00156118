//ejercicio1
function ejercicio1 (arreglo)
{
    
    for (let i = 0; i < arreglo.length; i++) {
        console.log(typeof arreglo[i]);
        
    }
}
//ejercicio2
function ejercicio2 (arreglo)
{
    for (let i = 0; i < arreglo.length; i++) {
        total += arreglo[i]; 
    }
    console.log("el total de la suma es: "+total);
}
//ejercicio3
function ejercicio3 (numero, arreglo)
{
    let total = 0;
    for (let i = 0; i < arreglo.length; i++) {
        
        if(numero === arreglo[i])
        {
            total ++;
        }
    }
    console.log("el numero se repite "+total+" veces");
}
//ejercicio4
function ejercicio4 (numero)
{
    valores=[];
    var numeroaleatorio;

    for (let i = 0; i < 20; i++) {
        numeroaleatorio =(Math.floor(Math.random()*100)+1);
        valores.push(numeroaleatorio);
    }
    for (let j = 0; j < 20; j++) {
        if(numero === valores[j])
        {
            console.log("ganaste");
        }
        else{
            console.log("perdiste");
        }
        
    }
    return valores;
}
//ejercicio5
function ejercicio5(arreglo)
{
    let arre=arreglo.length;
    let reverse="";
    for (let i = arre-1; i > -1; i--) {
        reverse += arreglo[i];
        console.log(arreglo[i]);
        }

    if(arreglo===reverse)
    {
        console.log("la palabra es palíndroma");
    }
    else
    {
        console.log("la palabra NO es palíndroma");
        console.log(reverse);
    }
}