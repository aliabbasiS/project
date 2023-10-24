import { box } from "./src/lib/box";



export const layout = () => {
  return box({
    element: 'div',
    attr: {
      class: 'flex justify-center items-center h-screen',
    },
    children: [
      box({
        element: 'div',
        attr: {
          class: 'w-1/2 h-1/2',
        },
        children: [
          box({
            element: 'div',

            attr: {
              class: ' text-4xl justify-center py-30 font-semibold text-slate-800  ',
            },
            
          }),
        ],
      }),
    ],
  });
};