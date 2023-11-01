
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
      console.log(numberproduct)
      const currentValue = parseInt(numberDiv.textContent || '0');
      numberDiv.textContent = (currentValue - 1).toString();
    }
  };

 