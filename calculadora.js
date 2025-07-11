function sumar(a,b){
    return a + b;
}
function restar(a,b){
    return a - b;
}
function multiplicar(a,b){
    return a * b;
}
function dividir(a,b){
    return a / b;
}
function porciento(a){
    return a / 100;
}
function cambiarSigno(a){
    return -a
}


var valorAnterior = 0;
var operacion = "";
var operaciones = ["+", "-", "×", "÷"];

const botones = document.querySelectorAll("button");
botones.forEach(boton =>{
    boton.addEventListener("click", (event)=>{
        const valor = event.target.innerText;
        let texto = document.querySelector("#pantalla").value;

        switch (valor) {
            case "AC":
                document.querySelector("#pantalla").value = " ";
            break;
            case "+/-":
                document.querySelector("#pantalla").value = cambiarSigno(texto);
            break;
            case "%":
                document.querySelector("#pantalla").value = porciento(texto);
            break;
            case ".":
                if(texto.indexOf(valor) == -1){
                    texto = texto + valor;
                    document.querySelector("#pantalla").value = texto;
                }
            break;
            case "=":
                switch (operacion) {
                    case "+":
                        document.querySelector("#pantalla").value = sumar(valorAnterior,parseFloat(texto))
                    break;
                    case "-":
                        document.querySelector("#pantalla").value = restar(valorAnterior,parseFloat(texto))
                    break;
                    case "×":
                        document.querySelector("#pantalla").value = multiplicar(valorAnterior,parseFloat(texto))
                    break;
                    case "÷":
                        document.querySelector("#pantalla").value = dividir(valorAnterior,parseFloat(texto))
                    break;
                
                    
                }
            break;
            
            
        
            default:
                if(operaciones.find((e)=> e == valor)){
                    valorAnterior = parseFloat(texto)
                    operacion = valor
                    document.querySelector("#pantalla").value = " ";
                }else{
                    if(texto != "0"){
                        texto = texto + valor;
                    }else{
                        texto = valor;
                    }
                    document.querySelector("#pantalla").value = texto;
                }
                
                break;
        }
    })
})