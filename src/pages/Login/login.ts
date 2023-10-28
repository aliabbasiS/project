import { FormLogin } from "../../component/forms/loginform";
import { box } from "../../lib/box";



export const Login = () => box({
    element: 'div',
    attr: {
        class: 'flex justify-center items-center h-screen',
    },
    children: [
        box({
            element: 'div',
            attr: {
                class: 'w-1/2 h-1/2  bg-gray-50 flex flex-col rounded-xl pt-5',
            },
            children: [
                //up side
                box({
                    element: 'div',

                    children: [
                        box({ element: 'div', attr: { style: 'width: 8.5625rem;height: 0.0625rem;border-radius: 0.125rem;border: 1px solid #000;background: var(--Gray-4, #BDBDBD);' } }),
                        box({ element: 'img', attr: { src: 'public/pixar/group.jpg', class: 'justify-center flex' } }),

                        box({ element: 'div', attr: { style: 'width: 8.5625rem;height: 0.0625rem;border-radius: 0.125rem;border: 1px solid #000;background: var(--Gray-4, #BDBDBD);' } }),
                    ],


                    attr: {
                        class: 'text-4xl flex justify-center items-center gap-6 py-30 font-semibold',
                    },
                }),
                //hello there
                box({ element: 'h1', children: 'Hello !', attr: { class: 'text-4xl fontm pl-4', style: 'color: var(--grey-2, #909090);font-size: 1.875rem;font-style: normal;font-weight: 400;line-height: 2.8125rem; /* 150% */' } }),
                box({ element: 'h1', children: 'WELLCOME BACK ', attr: { style: 'color: var(--Black-font, #303030);font-size: 1.5rem;font-style: normal;line-height: 2.8125rem;letter-spacing: 0.075rem;font-weight: 700;', class: 'fontm mb-5 pl-4' } }),
                box({
                    element: 'div', children: [
                        box({ element: 'div', children: FormLogin() }),box({element:'a',children:'Forget Password',attr:{class:'text-lg font-semibold  flex justify-center mt-8'}}),
                        box({
                            element: 'div', children: [
                                box({ element: 'button', children: 'Log in', attr: { class: 'fontm items-center flex justify-center text-xl font-bold mt-10 w-1/2 p-4 bg-slate-900 rounded-xl text-white', style: 'background: var(--Primary, #242424);box-shadow: 0px 10px 20px 0px rgba(48, 48, 48, 0.25);' } }),
                            ],attr:{class:'flex justify-center'}
                        }),box({element:'a',children:'Sign Up',attr:{class:'text-lg font-semibold  flex justify-center mt-8'}})
                    ], attr: { class: 'bg-white h-4/5 mr-10  mb-10 justify-center flex flex-col p-8', style: 'box-shadow: 0px 7px 30px 0px rgba(138, 149, 158, 0.20);' }
                })
                
            ],
        }),
    ],
});