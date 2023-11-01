import { shoppingmainrender } from "../../Routing/routes";
import { registerformtype } from "../register/regstry";

const userString = localStorage.getItem('user');
const arr: registerformtype[] = userString ? JSON.parse(userString) : [];

function findMatchingMember(email: string, password: string): registerformtype | undefined {
  return arr.find((member: registerformtype) => member.email === email && member.password === password);
}

export const Loginhandler = () => {
  const emailInput = (document.getElementById('email') as HTMLInputElement)?.value;
  const passwordInput = (document.getElementById('password') as HTMLInputElement)?.value;
  console.log(emailInput,passwordInput)

  if (emailInput && passwordInput) {
    const matchingMember = findMatchingMember(emailInput, passwordInput);

    if (matchingMember) {
      alert("Login successful!");
      shoppingmainrender()
    } else {
      console.log("Invalid credentials. Login failed.");
    }
  } else {
    console.log("Email or password input is missing.");
  }
};

