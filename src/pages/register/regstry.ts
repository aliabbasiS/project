


const localStoragearr:registerformtype[]=[]
type registerformtype = {
  name: string;
  email: string;
  password: string;
  repeatPassword: string;
};
function varifylist (props:registerformtype): any{
  if (props.password===props.repeatPassword) {
    if (validateEmail(props.email)){
      localstorage(props)

    }
    else{
      alert("your email isn't a valid email address" +'    '+props.email)
      
    }
    
  }
  else{
    alert('your password and repeat password isnt the same')
  }
  


    
  }
function validateEmail(email:string) {
    
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
    
    return regex.test(email);
  }
  

const localstorage=(props:registerformtype)=>{
  localStoragearr.push(props)

  localStorage.setItem('user',JSON.stringify(localStoragearr))
}


export const handelregesterform = (e:Event) => {
  e.preventDefault()
    const nameInput = document.getElementById('name') ;
    const emailInput = document.getElementById('email') ;
    const passwordInput = document.getElementById('password') ;
    const repeatPasswordInput = document.getElementById('repeat-password') ;
    




    const name = nameInput!.value;
    const email = emailInput!.value;
    const password = passwordInput!.value;
    const repeatPassword = repeatPasswordInput!.value;

    const formData = {
      namei:name,
      emaili:email,
      passwordi:password,
      repeatPasswordi:repeatPassword,
    };
    if(varifylist(formData)){
      console.log(localStoragearr.push(formData));

    }


  };
