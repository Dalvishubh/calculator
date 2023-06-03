var input= document.querySelector(".inputans");
var A = document.querySelector("#inequ");

var answer=[];
var equation=[];

function getval(num)
{
       if(input.value==0)
         input.value = num;
       else
         input.value+=num;  

}


function getop(op)
{
  input.value += op;
  
}

function getans()
{
  answer.push(eval(input.value));   
  equation.push(input.value+'=');
  A.value=input.value+'='
  input.value=eval(input.value)
}

function getclr(){
  A.value="";
  input.value=0
}

function gethist(){
  
  var history=document.querySelector('#hist');
  for(let i=0; i<answer.length; i++)
  {
    history.innerHTML+="<h1>"+equation[i]+"</h1><h3>"+answer[i]+"</h3>";
  }
  
}

function clrhist()
{
  var history=document.querySelector('#hist');
  history.innerHTML="";
  answer=[];
  equation=[];
}

// function gethist()
// {
//   var a=true
//    if(a == true)
//   {
//     document.querySelector("#hist"); 
//     a=false;  
//   }
//   else if(a == false)
//   {
//     document.querySelector("#A2")
//     a=true;
//     }


// }











