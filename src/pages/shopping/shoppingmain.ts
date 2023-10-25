import { box } from "../../lib/box";
import { iconmaker } from "./mainicons";
import { shopcartmaker } from "./mainshoppingcardmaker";



export const shoppingmain = () => {
  return box({
    element: 'div',
    attr: {
      class: 'flex justify-center items-center h-screen',
    },
    children: [
      box({
        element: 'div',
        attr: {
          class: 'w-1/2 h-1/2 flex flex-col',
        },
        children: [
          //top nav titles
          box({element:'div',children:[
            box({element:'img',attr:{src:"/public/pixar/search.jpg",class:'p-4'}}),
            box({element:'div',children:[
              box({element:'h1',children:'Make home',attr:{class:'font-normal fontg text-gray-400 text-xl',style:'text-align: center;line-height: 1.5625rem; /* 138.889% */'}}),
              box({element:'h1',children:'BEAUTIFUL',attr:{class:'font-bold fontg text-lg'}})
            ],attr:{class:'flex flex-col justify-center items-center gap-2'}})
            ,box({element:'img',attr:{src:'/public/pixar/shoppingcart.jpg',class:'p-4'}})
          

          
          
          
          
          
          ],attr:{class:'flex justify-between my-5'}}),
          ///icons of main page between navigation and shopping carts
          
          box({element:'div',children:[
          iconmaker({url:'/public/pixar/blackstar.jpg',disc:'Popular'}),
          iconmaker({url:'/public/pixar/chair.jpg',disc:'Chair'}),
          iconmaker({url:'/public/pixar/chair.jpg',disc:'Table'}),
          iconmaker({url:'/public/pixar/chair.jpg',disc:'Armchair'}),
          iconmaker({url:'/public/pixar/chair.jpg',disc:'Bed'}),

          ],attr:{class:'flex flex-row justify-between px-2'}})
          ,
          box({element:'div',children:[shopcartmaker({url:'/public/pixar/stand-card.jpg',title:'red',price:'red'})]})
          ,
          
          
        ],
      }),
    ],
  });
};