

import { register } from './../pages/register/register';
import { Login } from './../pages/Login/login';
import { mainpage } from './../pages/mainpage/mainpage';
import { favorite } from './../pages/favotitepage/favorite';
import { shoppingmain } from './../pages/shopping/shoppingmain';
import { standshopcard } from '../pages/mainshopcart/standmainshop';
import { paying } from '../pages/shopping/paying/payingbox';
import { ending } from './../pages/ending/ending';
import { pays } from '../pages/ending/pays';

export const routes=()=>{
    [
        {path:'/',title:'homepage'},
        {path:'/regester',title:'regster'},
        {path:'/login',title:'login'},
        {path:'/landing',title:'landing'}
    ]
}
export const main = () => {
    const container = document.getElementById('app');
  
    if (container) {
      container.innerHTML = '';
      const form =mainpage();
      container.appendChild(form);
    }
  };
export const registerrender = () => {
    const container = document.getElementById('app');
  
    if (container) {
      container.innerHTML = '';
      const form =register();
      container.appendChild(form);
    }
  };
 
export const Loginrender = () => {
    const container = document.getElementById('app');
  
    if (container) {
      container.innerHTML = '';
      const form =Login();
      container.appendChild(form);
    }
  };
 
export const shoppingmainrender = () => {
    const container = document.getElementById('app');
  
    if (container) {
      container.innerHTML = '';
      const form =shoppingmain();
      container.appendChild(form);
    }
  };
 
export const favoriterender = () => {
    const container = document.getElementById('app');
  
    if (container) {
      container.innerHTML = '';
      const form =favorite();
      container.appendChild(form);
    }
  };
export const standshopcardrender=()=>{
  const container = document.getElementById('app');

  if (container) {
    container.innerHTML = '';
    const form =standshopcard();
    container.appendChild(form);
  }
  
};
export const payingrender = () => {
  const container = document.getElementById('app');

  if (container) {
    container.innerHTML = '';
    const form =paying();
    container.appendChild(form);
  }
};
export const endingrender = () => {
  const container = document.getElementById('app');

  if (container) {
    container.innerHTML = '';
    const form =ending();
    container.appendChild(form);
  }
};
export const checkoutrender = () => {
  const container = document.getElementById('app');

  if (container) {
    container.innerHTML = '';
    const form =pays();
    container.appendChild(form);
  }
};

