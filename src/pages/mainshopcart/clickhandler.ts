import { pricearr } from "../shopping/paying/payingboxhandler";

let numberproduct=0
export const handlePlusClick = () => {
    const numberDiv = document.getElementById('numberdiv');
    if (numberDiv) {
      numberproduct+=1
      console.log(numberproduct)
      const currentValue = parseInt(numberDiv.textContent || '0');
      numberDiv.textContent = (currentValue + 1).toString();
    }
  };
  
 
export const handleMinusClick = () => {
    const numberDiv = document.getElementById('numberdiv');
    if (numberDiv) {

      numberproduct-=1
      pricearr.push(numberproduct)
      console.log(numberproduct)
      const currentValue = parseInt(numberDiv.textContent || '0');
      numberDiv.textContent = (currentValue - 1).toString();
    }
  };

export const  buttonhandler=()=>{
  console.log('fuck')
  //salam alan ma to stand shop stand boro paying shopo besaz ba nemone amade bad biya butoon handler besaz bad 
  //kari kon ke bere to local storage ono bekhone
  


}