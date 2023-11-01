
import { favoriterender, shoppingmainrender } from '../../Routing/routes';
import { box } from './../../lib/box';
import { favoritemaker } from './favoritelist';



export const favorite = () => {
  return box({
    element: 'div',
    attr: {
      class: 'flex justify-center items-first h-screen my-11',
    },
    children: [
      box({
        element: 'div',
        attr: {
          class: 'w-1/2 h-2/4 flex flex-col justify-between ',
        },
        children: [
          //up navigation
            box({element:'div',children:[

            box({element:'div',children:[
              box({element:'img',attr:{src:'public/pixar/search.jpg'}}),
              box({element:'h1',children:'Favorites',attr:{class:'fontm text-xl font-bold '}}),
              box({element:'img',attr:{src:'public/pixar/shoppingcart.jpg'}})
            ],attr:{class:'flex justify-between px-5 py-3'}}),
            box({element:'div',children:[favoritemaker()],attr:{class:'flex flex-col gap-3 h-full'}}),
        ]}),
          
        
          box({element:'div',children:[
            //footerbuton
              box({element:'button',children:'Add all to my cart',attr:{class:'w-full bg-black h-20 text-white text-2xl rounded-xl',style:'box-shadow: 0px 10px 20px 0px rgba(48, 48, 48, 0.25);'}}),
              //footer icons
              box({element:'div',children:[
                box({element:'img',attr:{src:'/pixar/house-footer.jpg',onclick:shoppingmainrender}}),
            box({element:'img',attr:{src:'/pixar/saves-footer.jpg',onclick:favoriterender}}),
                box({element:'img',attr:{src:'pixar/bell-footer.jpg'}}),
                box({element:'img',attr:{src:'pixar/person-footer.jpg'}})
              ],attr:{class:'flex justify-between mt-5'}})
          ],attr:{class:' flex flex-col  '}})
        ],
      }),
    ],
  });
};