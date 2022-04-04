let user=
    [
    {
        username: "mali",
        password: "123456",
        saldo: 200
    },
    {
        username: "mali1123",
        password: "123452136",
        saldo: 250

    },
    {
        username: "mali1232",
        password: "123451236",
        saldo: 200

    },
    {
        username: "mali1233",
        password: "123451236",
        saldo: 200

    }
];

let convertir = JSON.stringify(user);
let convertir2;
localStorage.setItem("usuarios1",convertir);
convertir= JSON.parse(localStorage.getItem("usuarios1"))
/*
localStorage.setItem("usuarios1",convertir);
convertir= JSON.parse(localStorage.getItem("usuarios1"))

function iniciar(){
    let usuario=document.getElementById("usuario").value;
    let contraseña=document.getElementById("password").value;
  

if(usuario=="admin" &&contraseña=="123456"){
    alert("exacto");
   window.location.href="cajero.html"
}else{
    alert("no");
}
}

function azul(){
    let body =document.getElementById("cuerpo");
    body.style.backgroundColor="blue";

}*/
let usuario;
let contraseña;
let sal;
function iniciar(){
    usuario=document.getElementById("usuario").value;
    contraseña=document.getElementById("password").value;
    sal=0;

    convertir= JSON.parse(localStorage.getItem("usuarios1"))

    for(i=0; i<convertir.length;i++){
        if(usuario==convertir[i].username && contraseña==convertir[i].password){
           let usuarioIngresado=[{username:convertir[i].username,
                                  contraseña:convertir[i].password,
                                   saldo:convertir[i].saldo}]
            let convertir2 = JSON.stringify(usuarioIngresado);            
            localStorage.setItem("usuariosI",convertir2);
            sal=(convertir[i].saldo);
            window.localStorage.setItem("informacion",convertir[i].saldo)
                
            window.location.href="cajero.html";
            break;
        }else{
            
        }

    }

}



function consultar(sal){

    
    convertir= JSON.parse(localStorage.getItem("usuarios1"))
    convertir2= JSON.parse(localStorage.getItem("usuariosI"))    
    for(i=0; i<10;i++){
        if(convertir2[0].username==convertir[i].username && convertir2[0].contraseña==convertir[i].password){

            sal=(convertir[i].saldo);

            let section= document.getElementById("section1");
            section.style.display='none';
            let consultar= document.getElementById("consultar1");
            consultar.style.display='block';
            let saldo = document.getElementById("saldoHtml");
            saldo.textContent=sal;
            saldo.backgroundColor="blue";
                

            break;
        }else{
            
        }

    }

    


}

function ingresarMonto(){
    
    let section= document.getElementById("section1");
    section.style.display='none';
   document.getElementById("ingresar").style.display="block";
   
  
}

function saldoActual(){
    sal=localStorage.getItem("informacion")
        
    convertir= JSON.parse(localStorage.getItem("usuarios1"))
    convertir2= JSON.parse(localStorage.getItem("usuariosI"))    
    for(i=0; i<convertir.length;i++){
        if(convertir2[0].username==convertir[i].username && convertir2[0].contraseña==convertir[i].password){

            sal=(convertir[i].saldo);
            let deposito = document.getElementById("ingresarMonto")
        
            if(parseFloat(sal)+parseFloat(deposito.value)<990){
                sal=parseFloat(sal)+parseFloat(deposito.value);
                convertir[i].saldo=sal
                convertir3=  JSON.stringify(convertir);
                localStorage.removeItem("usuarios1")
                localStorage.setItem("usuarios1",convertir3);
                alert(sal);
                window.localStorage.setItem("informacion",sal);
            }else{
                alert("no puedes tener mas de 990")
            }
           

            break;
        }else{
            
        }

    }

    


    }
    
   


function retirarview(){
    sal=localStorage.getItem("informacion")
    let section= document.getElementById("section1");
    section.style.display='none';
    let consultar= document.getElementById("consultar1");
    consultar.style.display='block';
    document.getElementById("retirar").style.display='block';
    let saldo = document.getElementById("saldoHtml");
    saldo.textContent=sal;
    saldo.backgroundColor="blue";
    
}
function retirar(){

    sal=localStorage.getItem("informacion")
    let retiro = document.getElementById("ingresarRetiro")

        
    convertir= JSON.parse(localStorage.getItem("usuarios1"))
    convertir2= JSON.parse(localStorage.getItem("usuariosI"))    
    for(i=0; i<convertir.length;i++){
        if(convertir2[0].username==convertir[i].username && convertir2[0].contraseña==convertir[i].password){

            sal=(convertir[i].saldo);
            let deposito = document.getElementById("ingresarMonto")
        
            if(parseFloat(sal)-parseFloat(retiro.value)>10){
                sal=parseFloat(sal)-parseFloat(retiro.value);
                convertir[i].saldo=sal
                convertir3=  JSON.stringify(convertir);
                localStorage.removeItem("usuarios1")
                localStorage.setItem("usuarios1",convertir3);
                alert(sal);
                window.localStorage.setItem("informacion",sal);
            }else{
                alert("no puedes tener mas de 990")
            }
           

            break;
        }else{
            
        }

    }

}    


    function nuevouser(){            
        convertir= JSON.parse(localStorage.getItem("usuarios1"));
        let nuevoUs=document.getElementById("usuarioR").value;
        let nuevoPas=document.getElementById("montoR").value;
        let nuevoMon =document.getElementById("passwordR").value;  
        let usuarioIngresado={username:nuevoUs,
            contraseña:nuevoPas,
             saldo:nuevoMon}

        
               
        
        for(i=0; i<convertir.length;i++){
            if(usuarioIngresado.username!=convertir[i].username){
                let añadir=convertir.push(usuarioIngresado);
                
                    convertir4=  JSON.stringify(añadir);
                    localStorage.removeItem("usuarios1");
                    localStorage.setItem("usuarios1",convertir4);

                    window.location.href="index.html";
                }
            }
        }

  
