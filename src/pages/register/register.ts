import { Form } from "../../component/forms/form";
import { box } from "../../lib/box";
import { handelregesterform } from "./regstry";


export const register = () => {
  return box({
    element: 'div',


    attr: {
      class: 'flex justify-center items-center h-screen bg-slate-',
    },

    
    children: [
      box({
        element: 'div',
        attr: {
          class: 'w-1/2 h-1/2  flex flex-col gap-3 rounded-5 px-5',
        },
        children: [
          //up side
          box({
            element: 'div',
            children:
            [
              box({element:'div',attr:{style:'width: 8.5625rem;height: 0.0625rem;border-radius: 0.125rem;border: 1px solid #000;background: var(--Gray-4, #BDBDBD);'}}),
              box({element:'img',attr:{src:'/public/images/group.svg'}})
              ,
              box({element:'div',attr:{style:'width: 8.5625rem;height: 0.0625rem;border-radius: 0.125rem;border: 1px solid #000;background: var(--Gray-4, #BDBDBD);'}}),
            ]
            ,
            
            attr: {
              class:'text-4xl flex justify-center items-center gap-6 py-30 font-semibold',
            },
            
          }),
          //hello there
          box({element:'h1',children:'Hello !',attr:{class:'text-4xl fontm',style:'color: var(--grey-2, #909090);font-size: 1.875rem;font-style: normal;font-weight: 400;line-height: 2.8125rem; /* 150% */'}})
          ,box({element:'h1',children:'WELLCOME ',attr:{style:'color: var(--Black-font, #303030);font-size: 1.5rem;font-style: normal;line-height: 2.8125rem;letter-spacing: 0.075rem;font-weight: 700;',class:'fontm'}})
          ,box({element:'div',children:Form(),attr:{class: 'mt-5'}}),
          box({element: 'button',children:'SIGN UP',attr: {class: 'fontm text-xl font-bold mt-10 w-70 p-4 bg-slate-900 rounded-xl text-white',style:'background: var(--Primary, #242424);box-shadow: 0px 10px 20px 0px rgba(48, 48, 48, 0.25);',onclick:handelregesterform}}),]
          //button
          
          
        }),
      ],
    });
  };
  //<div class:'te'></div>
