import { render } from './../../../renderer';
type registerformtype = {
    name: string;
    email: string;
    password: string;
    repeatpassword: string;
  };
  
  export const handelregesterform = () => {
    
  
    const nameInput = document.getElementById('name') as HTMLInputElement;
    const emailInput = document.getElementById('email') as HTMLInputElement;
    const passwordInput = document.getElementById('password') as HTMLInputElement;
    const repeatPasswordInput = document.getElementById('repeat-password') as HTMLInputElement;
  
    const name = nameInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;
    const repeatPassword = repeatPasswordInput.value;
  
    return  { name, email, password, repeatPassword };
  };