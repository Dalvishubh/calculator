var input=document.querySelector("#A3");
var B=document.querySelector("#B1");

 var C=document.querySelector("#hist-div");
var D=[];
var E=[];


function getval(num)
{
   if(input.value==0)
   input.value=num;

   else
   input.value+=num;

}

function getop(op)
{
  input.value+=op;
}

function getans()
{
    D.push(input.value+'=')
    E.push(eval(input.value))

    B.value=input.value+'='
    input.value=eval(input.value)
}

function getclr()
{
    input.value=0;
    B.value='';
   
  
}

function getHist()
{
  for(let i=0; i<E.length; i++)
  {
    C.innerHTML+="<br><h1>"+D[i]+"</h1><h2>"+E[i]+"</h2>"
  
  }
  
  
}


function clrhist()
{
  C.innerHTML='';
   D=[];
   E=[];
  
}




