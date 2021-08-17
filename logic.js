const screen = document.getElementById('screen');
const buttons = document.querySelectorAll('button');
let screenValue = '';
for(const item of buttons){
      item.addEventListener('click',function(e){
         let buttonText = e.target.innerText;
          if( buttonText == "X"){
              buttonText ="*";
              screenValue += buttonText;
              screen.value = screenValue;
          }
          else if (buttonText == 'C'){
            screenValue = '';
            screen.value = screenValue;
          }
          else if (buttonText == '='){
            screen.value = eval(screenValue);
          }
          else{
            screenValue += buttonText;
            screen.value = screenValue;
          }
      })
}