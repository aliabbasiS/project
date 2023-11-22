import { shoppingmainrender } from "../../Routing/routes";
import { registerformtype } from "../register/regstry";

const userString = localStorage.getItem('user');
const arr: registerformtype[] = userString ? JSON.parse(userString) : [];

function findMatchingMember(email: string, password: string): registerformtype | undefined {
  const matchingMember = arr.find((member: registerformtype) => member.email.toLowerCase() === email.toLowerCase() && member.password === password);
  console.log("Matching Member:", matchingMember);
  return matchingMember;
}

export const Loginhandler = () => {
  const emailInput = (document.getElementById('email') as HTMLInputElement)?.value;
  const passwordInput = (document.getElementById('password') as HTMLInputElement)?.value;
  console.log(`Email Input: ${emailInput}`);
  console.log(`Password Input: ${passwordInput}`);

  if (emailInput && passwordInput) {
    const matchingMember = findMatchingMember(emailInput, passwordInput);

    if (matchingMember) {
      alert("Login successful!");
      shoppingmainrender();
    } else {
      alert("Invalid credentials. Login failed.");
    }
  } else {
    alert("Email or password input is missing.");
  }
};