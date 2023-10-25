import { box } from "../../lib/box"
type iconmakertype={
    url:string,
    disc:string
}

export const iconmaker=(props:iconmakertype)=>{
    return box({
        element:'div',
        
        children:[box({element:'img',attr:{src : props.url , class:'w-full h-19	w-19 flex items-center'}})],
        
        attr:{class:'flex gap-3 flex-col flex items-center h-9 bg-slate-500'}
        

    }
    )
}