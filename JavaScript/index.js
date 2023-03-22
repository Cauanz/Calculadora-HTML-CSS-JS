const buttons = document.querySelectorAll(".button");
const visor = document.querySelector(".display");
let mem = '';


buttons.forEach((button) => {
   button.addEventListener("click", () => {
   handleButton(button);
   });
});//Atribui para cada botão um evento de click, e puxa a função handleButton

handleButton = (button) => {
   
   let buttonValue = button.target.textContent;

   if (/\d|\./.test(buttonValue)){

      visor.textContent += buttonValue;

   } else if (buttonValue === '+'){

      mem += parseFloat(visor.textContent);
      visor.textContent = '';

   } else if (buttonValue === '-'){

      mem -= parseFloat(visor.textContent);
      visor.textContent = '';

   } else if (buttonValue === '*'){

      mem *= parseFloat(visor.textContent);
      visor.textContent = '';

   } else if (buttonValue === '/'){

      if (visor.textContent === '0'){
         visor.textContent = 'Error, Divisão por 0';
      } else {
         mem /= parseFloat(visor.textContent);
         visor.textContent = '';
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

      visor.textContent = '';
      mem = 0;

   } else if (buttonValue === 'backspace') {
      visor.textContent = display.textContent.slice(0, -1);
      };
   };

