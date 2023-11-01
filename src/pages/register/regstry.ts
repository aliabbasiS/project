import { Loginrender } from "../../Routing/routes";

const localStoragearr: registerformtype[] = [];

export type registerformtype = {
  name: string;
  email: string;
  password: string;
  repeatPassword: string;
};

function verifyList(props: registerformtype): void {
  if (props.password === props.repeatPassword) {
    if (validateEmail(props.email)) {
      saveToLocalStorage(props)
      
       ;
    } else {
      alert("Your email is not a valid email address: " + props.email);
    }
  } else {
    alert("Your password and repeat password are not the same");
  }
}

function validateEmail(email: string): boolean {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

const saveToLocalStorage = (props: registerformtype): void => {
  localStoragearr.push(props);
  localStorage.setItem("user", JSON.stringify(localStoragearr));
  Loginrender()
};







export const handleRegisterForm = (): void => {
 
  const nameInput = document.getElementById("name") as HTMLInputElement;
  const emailInput = document.getElementById("email") as HTMLInputElement;
  const passwordInput = document.getElementById("password") as HTMLInputElement;
  const repeatPasswordInput = document.getElementById("repeat-password") as HTMLInputElement;
  
  const name = nameInput.value;
  
  const email = emailInput.value;
  const password = passwordInput.value;
  const repeatPassword = repeatPasswordInput.value;

  const formData: registerformtype = {
    name: name,
    email: email,
    password: password,
    repeatPassword: repeatPassword,
  };
  console.log(formData)
  verifyList(formData)
  
};
