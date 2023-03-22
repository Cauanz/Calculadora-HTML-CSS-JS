const buttons = document.querySelectorAll(".buttons");
const visor = document.querySelector(".display");
let mem = 0;
visor.textContent = 0;
let lastButtonClicked = '';


buttons.forEach((button) => {
   button.addEventListener("click", () => {
   handleButton(button);
   });
});//Atribui para cada botão um evento de click, e puxa a função handleButton

handleButton = (button) => {
   
   let buttonValue = button.value;

   if (/\d|\./.test(buttonValue)){

      if( visor.textContent === '0' ){
         visor.textContent = buttonValue;
      } else {
      visor.textContent += buttonValue;
      }

   } else if (buttonValue === '+'){

      mem += parseFloat(visor.textContent);
      visor.textContent += buttonValue;
      lastButtonClicked = '+';

   } else if (buttonValue === '-'){

      mem -= parseFloat(visor.textContent);
      visor.textContent += buttonValue;
      lastButtonClicked = '-';

   } else if (buttonValue === '*'){

      mem *= parseFloat(visor.textContent);
      visor.textContent += buttonValue;
      lastButtonClicked = '*';

   } else if (buttonValue === '/'){

      if (visor.textContent === '0'){
         visor.textContent = 'Error, Divisão por 0';
      } else {
         mem /= parseFloat(visor.textContent);
         visor.textContent += buttonValue;
         lastButtonClicked = '/';
      }

   } else if (buttonValue === '='){

      if(lastButtonClicked === '+'){

         mem += parseFloat(visor.textContent);
         visor.textContent = mem;
         mem = 0;

      } else if(lastButtonClicked === '-'){

         mem -= parseFloat(visor.textContent);
         visor.textContent = mem;
         mem = 0;

      } else if(lastButtonClicked === '*'){

         mem *= parseFloat(visor.textContent);
         visor.textContent = mem;
         mem = 0;

      } else if(lastButtonClicked === '/'){
         
         if (visor.textContent === '0'){
            visor.textContent = 'Error, Divisão por 0';
         } else {

            mem /= parseFloat(visor.textContent);
            visor.textContent = mem;
            mem = 0;
         }

      }
   } else if (buttonValue === 'C'){

      visor.textContent = 0;
      mem = 0;

   } else if (buttonValue === 'Backspace') {
      visor.textContent = visor.textContent.slice(0, -1);
      };
   };

