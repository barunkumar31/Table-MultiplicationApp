



function multiplication(){
    var input=Number(document.getElementById("input-table").value);
    var result=document.getElementById("result");
  

    result.innerHTML='';
   if(isNaN(input)){
    result.innerHTML="please Enter a Number";
   }else{
    for(let i=1;i<=10;i++){
    document.getElementById("result").innerHTML+= input + "x" + i + "=" + input*i + "<br>";
   
    }
}

 
   

}
