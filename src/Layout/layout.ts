
import { route } from "../Routing/Router.ts";
import { Login } from "../pages/Login/login.ts";
import { favorite } from "../pages/favotitepage/favorite.ts";
import { mainpage } from "../pages/mainpage/mainpage.ts";
import { lampshopcard } from "../pages/mainshopcart/lampmainshop.ts";
import { standshopcard } from "../pages/mainshopcart/standmainshop.ts";
import { register } from "../pages/register/register.ts";
import { shoppingmain } from "../pages/shopping/shoppingmain.ts";


export const layout = () => {
  return (lampshopcard())
};
// export const layout = (path) => {
//   return (route(path))
// };