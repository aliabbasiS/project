import { box } from "../../lib/box";

export const ending = () => {
    return box({
      element: 'div',
      attr: {
        class: 'flex justify-center items-center h-screen',
      },
      children: [
        box({
          element: 'div',
          attr: {
            class: 'w-1/2 flex items-center ',
          },
          children: [
            box({
              element: 'div',
              children:[
                box({element:'div',children:[
                    box({element:'h1',children:'SUCCESS !'}),box({element:'h1',children:'YOUR SHOP IS READY TO SEND   '}),
                    box({element:'img',attr:{src:'pixar/ending.jpg'}})
                ],attr:{class:'flex flex-col justify-center'}})
              ],
  
              attr: {
                class: 'py-30 font-semibold text-slate-800  ',
              },
              
            }),
          ],
        }),
      ],
    });
  };