import { box } from "../../lib/box";

type InputMakerTypes = {
  placeholder?: string;
  label?: string;
  for?: string;

  inputattr:any,
  lebelattr:any,src?:string
};

export const inputMaker = (props: InputMakerTypes) => {
  
  
    return box({
      element: 'div',
      children: [
        box({
          element: 'label',
          children:props.label,
          attr: {
            for:props.for,
            ...props.lebelattr,
            text: props.label,
          },
        }),
        box({
  
          element: 'input',
          attr: {placeholder:props.placeholder,
            for:props.for,
            ...props.inputattr,
          },
        }),
      ],
      attr:{class:'flex flex-col gap-3 w-full '}
    });
  }

;