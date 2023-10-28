import { box } from "../../lib/box"
type iconmakertype={
    url:string,
    disc:string
}

export const iconmaker=(props:iconmakertype)=>{
    return box({
        element:'div',
        
        children:[box({element:'img',attr:{src : props.url , class:'w-full  h-15 p-1 flex items-center'}}),box({element:'span',children:props.disc,attr:{class:'text-sm'}})],
        
        attr:{class:'flex gap-3 flex-col flex items-center  '}
        

    }
    )
}