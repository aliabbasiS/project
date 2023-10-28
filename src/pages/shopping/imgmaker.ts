import './main.css'
type shopsmakertype={
    url:string,
    title:string,
    price:string
}
import { box } from "../../lib/box"
export const shopcartmaker=(props:shopsmakertype)=>{
    return box({
        element:'div',children:[box({element:'div',children:[

            box({element:'img',attr:{src:props.url ,class:' shopsimg'}})
        ],attr:{class:'shopsimg'}})
            ,box({element:'a',children:[

                box({element:'img',attr:{class:'w-7 over-hidden ',style:'position: relative;left: 13.5rem;top: -3rem;',src:'pixar/shopping-icon-card.jpg'}})
            ],attr:{href:'https://www.google.com'}
        })
            ,box({element:'h1',children:props.title,attr:{class:'text-xl text-slate-500'}}),
            box({element:'span',children:props.price,attr:{class:'text-lg font-bold'}})

            
            
        ],attr:{class:'flex flex-col  mt-10 w-1/2 justify-between '}
    })



}
