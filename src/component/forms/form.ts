import { box } from "../../lib/box"
import { inputMaker } from "./formtypes"
export const Form=()=>{
    return box({
        element:'form',
        attr:{class:'mt-6 flex flex-col gap-6 '}
        ,children:[
            inputMaker({placeholder:'',label:'Name',for:'name',inputattr:{class:'border-b-2 h-29'},lebelattr:{class:'text-slate-500 mt-7',id:'name'}}),
            inputMaker({placeholder:'',label:'Email',for:'Email',inputattr:{class:'border-b-2 h-29'},lebelattr:{class:'text-slate-500 mt-7',id:'email'}}),
            inputMaker({placeholder:'',label:'Password',for:'Password',inputattr:{class:'border-b-2 h-29'},lebelattr:{class:'text-slate-500 mt-7',id:'password'}}),
            inputMaker({placeholder:'',label:'Repeat Password',for:'Repeatpassword',inputattr:{class:'border-b-2 h-29'},lebelattr:{class:'text-slate-500 mt-7',id:'repeat-password'}})
            
        ]
    })

}
//<div class:'' ></div>