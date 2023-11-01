import { box } from "../../lib/box";
import { favoritemakerarr } from "../favotitepage/favoritelist";
import { handlePlusClick,handleMinusClick } from "./clickhandler";
import { shoppingmainrender } from "../../Routing/routes";

export const lampshopcard = () => {
  return box({
    element: 'div',
    attr: {
      class: 'flex justify-center items-center h-screen',
    },
    children: [
      box({
        element: 'div',
        attr: {
          class: 'w-1/2  flex flex-col  ',
        },
        children: [
            //up right img
            box({element:'div',children:[
                box({element:'div',children:[

                    box({
                      element: 'img',
          
                      attr: {
                        src:'public/pixar/lamp-card.jpg',
                        class:'object-fill rounded-bl-[50px]'
                        
                      },   
                  }),
                ],attr:{class:'h-full flex w-full flex-col  '}}),



                //up left

                box({element:'div',children:[
                    box({element:'img',attr:{src:'public/pixar/backarrow.jpg'}}),box({element:'img',attr:{src:'public/pixar/colorpallet.jpg',class:'pb-7 ',onclick:shoppingmainrender}})
                ],attr:{class:' flex flex-col '}})
                
            ],attr:{class:'flex justify-end flex-row-reverse  justify-between'}}),
            //main topics
            box({element:'h1',children:'Black Simple Lamp',attr:{class:'text-2xl font-medium fontg mt-5 px-4 '}})
            ,//price and numbers
            box({element:'div',children:[
                box({element:'h1',children:'$ 12.00' ,attr:{class:'fontn text-3xl font-bold  '}})
                ,box({element:'div',children:[
                    box({element: 'button', children: '+', attr: {class: 'w-8 bg-slate-200 text-2xl rounded-xl flex items-center justify-center', id: 'plus', onclick: handlePlusClick}}),
                    box({element: 'span', children: '0', attr: {class: 'text-xl flex items-center', id: 'numberdiv'}}),
                    box({element: 'button', children: '-', attr: {class: 'w-8 bg-slate-200 text-2xl rounded-xl flex items-center justify-center', id: 'minus', onclick: handleMinusClick}})



                ],attr:{class:'flex gap-3'}}),

            ],attr:{class:'flex mt-5 px-4 justify-between'}}),
            //stars and rating
            box({element:'div',children:[
                box({element:'img',attr:{src:'public/pixar/star.jpg', class:'p-2'}}), 
                box({element:'span',children:'4.5',attr:{class:'flex justify-center items-center font-bold text-xl '}}),
                box({element:'spna',children:'(50 commnets)',attr:{class:'flex justify-center items-center text-gray-500'}})
            ],attr:{class:'flex gap-4 my-3'}})
            //article
            ,box({element:'p',children:'Minimal Stand is made of by natural wood. The design that is very simple and minimal. This is truly one of the best furnitures in any family for now. With 3 different colors, you can easily select the best match for your home. ',attr:{class:'fontn text-gray-500 px-3'}}),

            //footer button
            box({element:'div',children:[
                box({element:'button',children:'Add to cart',attr:{class:"w-4/5 h-20 bg-slate-900 text-white rounded-lg text-2xl"}})
                ,box({element:'button',children:[box({element:'img',attr:{src:'public/pixar/marker-2.svg',class:'bg-slate-200'}})],attr:{class:"flex justify-center items-center w-1/5 h-20 bg-slate-200 text-white rounded-lg",}}),
                box({element:'button',children:[box({element:'img',attr:{src:'public/pixar/shopping-bag-icon.jpg',class:'bg-slate-200'}})],attr:{class:"flex justify-center items-center w-1/5 h-20 bg-slate-200 text-white rounded-lg"}})  
                
            ],attr:{class:'flex gap-3 mt-5 flex-row-reverse px-3 '}})

        
        
        
            
        ],
      }),
    ],
  });
};