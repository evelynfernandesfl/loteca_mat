var numSort =[] 
var numEsco =[]
function sorteio(){
    var cont= 0
    numSort=[]
    
    while(cont < 6){
        let num = Math.random() * 60
   num= Math.ceil(num)
   if(!numSort.includes(num)){
    numSort[cont]=num
    console.log(numSort)
    cont++
   }
  
    }
    document.getElementById("sorteados").innerHTML=numSort
   
}
 

function getValor(Valor,pos){
    Valor= Number(Valor)
    if(Valor<0|| Valor>60){
        alert("Numero invalido, Didite um  entre 1 e 60")
        document.getElementById(`num${pos+1}`).value=""

    }else if(numEsco.includes(Valor)){
       
        numEsco[pos] = Valor
        console.log(numEsco)
    

    }
}
function contAcertos(){
    numEsco.forEach(function(value,index){
     if (numEsco.includes(value)){
         contA= contA+1
     }

    })
    document.getElementById("acertos").innerHTML=contA

}