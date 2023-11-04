
const price1=document.getElementById('pricediv')
const price:number=25
export const pricearr:number[]=[]
export const pricehandler = () => {
    
    if (price1) {
        let numberproduct=pricearr[-1]
        console.log(numberproduct)
        const currentValue = parseInt(price1.textContent || '0');
        price1.textContent = (currentValue*price).toString();
    }
  };