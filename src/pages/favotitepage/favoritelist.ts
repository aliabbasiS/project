export type favoritemakertype={
    imgsrc:string,
    title:string,
    price:string,
    
}
export const favoritemakerarr:favoritemakertype[]=[]
import { box } from "../../lib/box"


let price='30'


export const favoritemaker=()=>{
   return box({element:'div',children:[
       box(
           {element:'div',children:[box({element:'div',children:[
              
              box({element:'img',attr:{src:'pixar/favostand.jpg'}}),
              box({element:'div',children:[
                  box({element:'span',children:'coffee table',attr:{class:'text-gray-500 text-lg font-mormal'}}),
                  box({element:'h1',children:"$ "+price+'.00',attr:{class:'fontn font-bold'}})
              ]}),
              
           ],attr:{class:'flex gap-3 px-4'}}),
           
           
           box({element:'div',children:[
           box({element:'img',attr:{src:'pixar/remove.jpg',class:'cursor-pointer',onclick:()=>{
               const root=document.getElementById('favoritebox')?.classList.add('hidden')
           }}}),
           box({element:'img',attr:{src:'pixar/shopping-bag-icon.jpg'}})],attr:{class:'flex flex-col justify-between'}}),
           
           
           
           
           
           
           ],attr:{class:'flex  py-5 border-b-2 justify-between', id:'favoritebox'}}),//inja bayad box besazi
           
       
],attr:{class:'flex flex-col'}})}