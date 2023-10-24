import { box } from "../../lib/box";
import { register } from './../register/register';

export const mainpage = () => {
  return box({
    element: 'div',
    children: [
      box({
        element: 'h1',
        children: 'MAKE YOUR',
        attr: {
          class: 'text-slate-500 text-2xl justify-center font-semibold fontg mt-8'
        }
      }),
      box({
        element: 'h1',
        children: 'HOME BEAUTIFUL',
        attr: {
          class: 'my-8 text-slate-900 text-3xl justify-center font-semibold fontg'
        }
      }),
      box({
        element: 'p',
        children: 'The best simple place where you discover most wonderful furnitures and make your home beautiful',
        attr: {
          class: 'mx-5 text-xl text-slate-500'
        }
      }),
      box({
        element:'div'
        ,children:box({
          element: 'button',
          children: 'Get Started',
          attr: {
            class: 'h-20 w-3/4 rounded my-14 bg-slate-700 text-white fontg text-xl flex justify-center items-center',
            onclick:()=>{
              return (register())
            }
          }
        }),attr:{
          class:'flex justify-center text-center'
        }
      }),
    ],
    attr: {
      class: 'bg flex flex-col justify-center p-5'
    }
  });
};
//<div class='text-center justify-center items-center>