import { box } from "../../lib/box"
import { inputMaker } from "./formtypes"
export const Form=()=>{
    return box({
        element:'form',
        attr:{class:'mt-6 flex flex-col gap-6 ',id:'regester'}
        ,children:[
            inputMaker({placeholder:'',label:'Name',inputattr:{class:'border-b-2 h-29 ',type:'text',id:'name'},lebelattr:{class:'text-slate-500 mt-7'}}),
            inputMaker({placeholder:'',label:'Email',inputattr:{class:'border-b-2 h-29',type:'text',id:'email'},lebelattr:{class:'text-slate-500 mt-7',}}),
            inputMaker({placeholder:'',label:'Password',inputattr:{class:'border-b-2 h-29',type:'text',id:'password'},lebelattr:{class:'text-slate-500 mt-7',}}),
            inputMaker({placeholder:'',label:'Repeat Password',inputattr:{class:'border-b-2 h-29',type:'text',id:'repeat-password'},lebelattr:{class:'text-slate-500 mt-7',}})
            
        ]
    })

}
//<div class:'' ></div>