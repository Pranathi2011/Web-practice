let display = document.getElementById('display-text');
let res = " ";
let prev =0;
let buttons = document.querySelectorAll('button');
console.log(buttons);
buttons.forEach(button => {
  button.addEventListener('click',(function(e){
    if(e.target.innerHTML== '='){
      res = eval(res);
      display.value= res;
      prev = res;
    }
    else if(e.target.innerHTML==='M+'){
      res+=prev;
      display.value=res;
    }
    else if(e.target.innerHTML==='AC'){
      res = " ";
      display.value= res;
    }
    else{
      res+= e.target.innerHTML;
      display.value= res;
    }
  }));
});
