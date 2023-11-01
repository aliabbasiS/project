import { box } from "../../lib/box"
import { inputMaker } from "./formtypes"
export const FormLogin=()=>{
    return box({
        element:'form',
        attr:{class:'mt-6 flex flex-col gap-6 '}
        ,children:[

            inputMaker({placeholder:'',label:'Email',for:'Email',inputattr:{class:'border-b-2 h-29',type:'text',id:'email'},lebelattr:{class:'text-slate-500 mt-7',}}),
            inputMaker({placeholder:'',label:'Password',for:'Password',inputattr:{class:'border-b-2 h-29',type:'text',id:'password'},lebelattr:{class:'text-slate-500 mt-7',}}),
            
            
        ]
    })

}