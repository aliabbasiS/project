
import { checkoutrender, endingrender } from '../../Routing/routes';
import { box } from './../../lib/box';



export const pays = () => {
  return box({
    element: 'div',
    attr: {
      class: 'flex justify-center  h-screen bg-gray-50 mx-3',
    },
    children: [
      box({
        element: 'div',
        attr: {
          class: 'w-1/2 my-5 px-4 ',
        },
        children: [
          box({
            //nav
            element: 'div',children:[
                box({element:'img',attr:{src:'pixar/backarrow2.jpg' ,class:'p-'}}),
                box({element:'h1',children:'Check Out',attr:{class:'text-2xl font-semibold '}}),
                box({element:'div',children:' ',attr:{class:'p-2'}})
            ],attr:{class:'flex justify-between items-center  mt-5 '}

            
          }),
          //shipmentheader
          box({element:'div',children:[
            box({element:'span',children:'Shipping Address',attr:{class:'text-2xl text-gray-500 '}}),
            box({element:'img',attr:{src:'pixar/edit-2.svg'}})
          ],attr:{class:'flex justify-between mt-5 '}}),
          ///ADDRESS BOX
          box({element:'div',children:[
            box({element:'div',children:'Bruno Fernandes',attr:{class:'w-full  flex   p-5  border-b-2 text-2xl font-bold fontn'}}),
            box({element:'p',children:'25 rue Robert Latouche, Nice, 06200, Côte Dazur, France',attr:{class:'py-2 px-5 text-lg text-gray-500 fontn'}})
          ],attr:{class:'flex flex-col bg-white mt-5 rounded-t-lg',style:'box-shadow: 0px 8px 40px 0px rgba(138, 149, 158, 0.20);'}}),
          //payment
          box({element:'div',children:[
            box({element:'span',children:'Payment',attr:{class:'text-2xl text-gray-500 fontn font-normal'}}),
            box({element:'img',attr:{src:'/pixar/edit-2.svg'}})
          ],attr:{class:'flex justify-between mt-9 '}}),
          ///master cart
          box({element:'div',children:[box({element:'div',children:[
            box({element:'img',attr:{src:'pixar/mastercard.jpg'}})
            ,box({element:'span',children:'**** **** **** 3947',})
          ],attr:{class:'w-full bg-white  mt-5 flex p-5  border-b-2 text-xl font-semibold fontn gap-5',style:'box-shadow: 0px 7px 40px 0px rgba(138, 149, 158, 0.20);'}})]})
          ///dilivery method
          ,box({element:'div',children:[
            box({element:'span',children:'Delivery method',attr:{class:'text-2xl text-gray-500 fontn font-normal'}}),
            box({element:'img',attr:{src:'/pixar/edit-2.svg'}})
          ],attr:{class:'flex justify-between mt-9 '}})


          ,box({element:'div',children:[box({element:'div',children:[
            box({element:'img',attr:{src:'pixar/dhl.jpg'}})
            ,box({element:'span',children:'Fast (2-3days)',})
          ],attr:{class:'w-full bg-white  mt-5 flex p-5  border-b-2 text-xl font-semibold fontn gap-5',style:'box-shadow: 0px 7px 40px 0px rgba(138, 149, 158, 0.20);'}})]})
          ///orderlistprice
          ,box({element:'div',children:[


            box({element:'div',children:[
              box({element:'span',children:'Order : ',attr:{class:'text-gray-500'}}),
              box({element:'span',children:'$ 95.00',attr:{class:'font-semibold '}})
            ],attr:{class:'flex justify-between p-5 text-xl'}}),
            box({element:'div',children:[
              box({element:'span',children:'Delivery : ',attr:{class:'text-gray-500'}}),
              box({element:'span',children:'$ 5.00',attr:{class:'font-semibold '}})
            ],attr:{class:'flex justify-between p-5 text-xl'}}),
            box({element:'div',children:[
              box({element:'span',children:'Total : ',attr:{class:'text-gray-500'}}),
              box({element:'span',children:'$ 100.00',attr:{class:'font-semibold '}})
            ],attr:{class:'flex justify-between p-5 text-xl',style:'box-shadow: 0px 8px 40px 0px rgba(138, 149, 158, 0.20);'}})



          ],attr:{class:'flex flex-col bg-white mt-5'}}),
          ///button
          box({element:'button',children:'SUBMIT ORDER',attr:{class:'p-4 bg-slate-900 text-white w-full rounded-lg fontn mt-9',onclick:endingrender}})



          










        ],
      }),
    ],
  });
};