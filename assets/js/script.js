//document.getElementById("display").value=0; #necesitare un initialize???

var amount="";
var accumulated=0;
var firstOperation=true;
var add=false;
var sustract=false;
var divide=false;
var multiply=false;

function display_numbers(number){
  document.getElementById("display").value=amount+number;
  amount=document.getElementById("display").value;
}

function addition(){
    if(sustract){
      accumulated=accumulated-parseInt(amount);
      document.getElementById("display").value=accumulated;
    }else{
      accumulated=accumulated+parseInt(amount);
      document.getElementById("display").value=accumulated;
    }
  amount="";
  sustract=false;
  add=true;
  firstOperation=false;
}

function substraction(){
  if(!firstOperation){
    if(add){
      accumulated=accumulated+parseInt(amount);
      document.getElementById("display").value=accumulated;
    }else{
      accumulated=accumulated-parseInt(amount);
      document.getElementById("display").value=accumulated;
    }
  }else{
    accumulated=parseInt(amount);
    firstOperation=false;
  }  
  amount="";
  add=false;
  sustract=true;
}

function multiplication(){
  accumulated=accumulated*parseInt(amount);
  document.getElementById("display").value=accumulated;
  amount="";
  multiply=true;
}

function division(){
  accumulated=accumulated/parseInt(amount);
  document.getElementById("display").value=accumulated;
  amount="";
  divide=true;
}

function result(){
  if(add){
    document.getElementById("display").value=accumulated+parseInt(amount);
  }else if(sustract){
    document.getElementById("display").value=accumulated-parseInt(amount);
  }
  else if(multiply){
    document.getElementById("display").value=accumulated*parseInt(amount);
  }
  else if(divide){
    document.getElementById("display").value=accumulated/parseInt(amount);
  }
  accumulated=parseInt(document.getElementById("display").value);
  amount=0;
}