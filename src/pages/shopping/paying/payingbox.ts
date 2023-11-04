import { endingrender, standshopcardrender } from "../../../Routing/routes";
import { box } from "../../../lib/box"
import { handleMinusClick, handlePlusClick } from "../../mainshopcart/clickhandler";

export const paying = () => {
    
    return box({
      element: 'div',
      attr: {
        class: 'flex justify-center my-20 h-screen',
      },
      children: [
        box({
          element: 'div',
          attr: {
            class: 'w-1/2 m-6 flex-col flex justify-between',
          },
          children: [
            box({element:'div',children:[
              box({
                //navigation
                element: 'div',
                children:[
                  box({element:'img',attr:{src:'public/pixar/backarrow2.jpg',onclick:standshopcardrender}})
                  ,box({element:'h1',children:'My cart',attr:{class:' fontm font-bold text-xl flex items-center'}}),
                  box({element:'div',children:'. '}),
                ],
                attr: {class: 'flex justify-between mb-5 ',},
                }),
                //shop cart
              box({element:'div',children:[
                box({element:'div',children:[
                  box({element:'img',attr:{src:'pixar/stand-card.jpg',class:'my-6'}}),
                  box({element:'div',children:[
                    //title
                    box({element:'h1',children:'Minimal Stand',attr:{class:' text-gray-500 fontn text-lg'}}),
                    //price
                    box({element:'span',children:'$ 25.00 ',attr:{class:'font-bold text-xl',id:'pricedivsection'}})
                    ,//click
                    box({element:'div',children:[
                      box({element: 'button', children: '+', attr: {class: 'w-8 bg-slate-200 text-2xl rounded-xl flex items-center justify-center', id: 'plus', onclick: handlePlusClick}}),
                      box({element: 'span', children: '1', attr: {class: 'text-xl flex items-center', id: 'numberdiv'}}),
                      box({element: 'button', children: '-', attr: {class: 'w-8 bg-slate-200 text-2xl rounded-xl flex items-center justify-center', id: 'minus', onclick: handleMinusClick}})
    
    
    
                  ],attr:{class:'flex gap-3'}})
                  ],attr:{class:'flex flex-col my-6 gap-6'}}),
  
                ],attr:{class:'flex gap-5'}}),
                //img
                box({element:'div',children:[
  
                  box({element:'img',attr:{src:'pixar/remove.jpg',class:''}})
                ],attr:{class:"flex flex-col my-6",onclick:()=>{const root=document.getElementById('remove2')?.classList.add('hidden')}}}),
                  
              ],attr:{class:'flex gap-6 justify-between border-b-2',id:'remove2'}})

            ]})
            ///footer
            ,box({element:'div',children:[
              //redeem code
              box({element:'div',children:[
                box({element:'input',attr:{style:'box-shadow: 0px 2px 20px 0px rgba(138, 149, 158, 0.12);',class:'w-full  h-17 flex text-xl rounded-2xl px-3 py-2 ',placeholder:'Enter your promo code'}}),
                box({element:'img',attr:{src:'pixar/redeem.jpg'}})
              ],attr:{class:'flex '}}),
              //price section
              box({element:'div',children:[
                box({element:'h1',children:'Total:',attr:{class:'text-xl font-semibold text-gray-500'}}),
                box({element:'span',children:'$ 25.00',attr:{class:'text-xl font-semibold text-solid-500',id:'pricediv'}})
              ],attr:{class:'flex justify-between'}})
              ,box({element:'button',children:'Check out ',attr:{class:'w-full h-20 bg-slate-900 text-white text-2xl rounded-xl',style:'box-shadow: 0px 10px 20px 0px rgba(48, 48, 48, 0.25);',onclick:endingrender}})
            

            ],attr:{class:'flex flex-col gap-5'}})
          
          
          
          
          
          ]
        }),
        
      ],
    });
}