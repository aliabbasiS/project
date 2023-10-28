import { box } from "../../lib/box";
import { iconmaker } from "./iconmaker";
import { shopcartmaker } from "./imgmaker";



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
            box({element:'img',attr:{src:"/pixar/search.jpg",class:'p-4'}}),
            box({element:'div',children:[
              box({element:'h1',children:'Make home',attr:{class:'font-normal fontg text-gray-400 text-xl',style:'text-align: center;line-height: 1.5625rem; /* 138.889% */'}}),
              box({element:'h1',children:'BEAUTIFUL',attr:{class:'font-bold fontg text-lg'}})
            ],attr:{class:'flex flex-col justify-center items-center gap-2'}})
            ,box({element:'img',attr:{src:'/pixar/shoppingcart.jpg',class:'p-4'}})
          

          
          
          
          
          
          ],attr:{class:'flex justify-between '}}),
          ///icons of main page between navigation and shopping carts
          
          box({element:'div',children:[
          iconmaker({url:'/pixar/blackstar.jpg',disc:'Popular'}),
          iconmaker({url:'/pixar/chair.jpg',disc:'Chair'}),
          iconmaker({url:'/pixar/table.jpg',disc:'Table'}),
          iconmaker({url:'/pixar/sofa.jpg',disc:'Armchair'}),
          iconmaker({url:'/pixar/bed.jpg',disc:'Bed'}),

          ],attr:{class:'flex  justify-between px-2 mt-5'}})
          ,
          
          
          
          //cartlist 
          box({element:'div',children:[
            
          
          box({element:'div',children:[shopcartmaker({url:'/pixar/lamp-card.jpg',title:'Black Simple Lamp',price:'$ 12.00'})],}),
          
          box({element:'div',children:[shopcartmaker({url:'/pixar/stand-card.jpg',title:'Minimal Stand',price:'$ 25.00'})],})
          ],attr:{class:'flex h-full   justify-between gap-5'}})
          ,box({element:'div',children:[
            
          
            box({element:'div',children:[shopcartmaker({url:'/pixar/chair-card.jpg',title:'Coffee Chair',price:'$ 20.00'})],}),
  
            box({element:'div',children:[shopcartmaker({url:'/pixar/table-card.jpg',title:'Simple Desk',price:'$ 12.00'})],})
            ],attr:{class:'flex h-full justify-between  gap-5'}})
            
          //box({element:'div',children:[shopcartmaker({url:'/pixar/stand-card.jpg',title:'Black Simple Lamp',price:'$ 12.00'})],attr:{}})
          
          ,box({element:'div',children:[
            box({element:'img',attr:{src:'/pixar/house-footer.jpg'}}),
            box({element:'img',attr:{src:'/pixar/saves-footer.jpg'}}),
            box({element:'img',attr:{src:'/pixar/bell-footer.jpg'}}),
            box({element:'img',attr:{src:'/pixar/person-footer.jpg'}}),
          ],attr:{class:'flex justify-between gap-5 px-6 my-10'}})
          ,box({element:'div',children:'.' ,attr:{class:'h-5'}})
        ],
      }),
    ],
  });
};