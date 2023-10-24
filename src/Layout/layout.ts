
import { mainpage } from "../pages/mainpage/mainpage.ts";
import { register } from "../pages/register/register.ts";

export const layout = () => {
  return (mainpage(),register())
};