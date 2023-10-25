type shopsmakertype={
    url:string,
    title:string,
    price:string
}
import { box } from "../../lib/box"
export const shopcartmaker=(props:shopsmakertype)=>{
    return box({
        element:'div',children:[
            box({element:'img',attr:{src:props.url}}),
            box({element:'img',attr:{url:'/public/pixar/stand-card.jpg'}}),
            
            
        ],attr:{class:'flex flex-col gap-3'}
    })



}