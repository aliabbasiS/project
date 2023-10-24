import { BoxProps } from "./boxprops";

export const box = (props: BoxProps) => {
    const el = document.createElement(props.element);
  
    if (props.attr) {
      Object.entries(props.attr).forEach(([key, value]) => {
        if (key.startsWith("on") && typeof value === "function") {
          const eventName = key.slice(2).toLowerCase();
          el.addEventListener(eventName, value);
        } else {
          el.setAttribute(key, value);
        }
      });
    }
  
    if (props.children) {
      if (Array.isArray(props.children)) {
        el.append(...props.children)}
      else{
        el.append(props.children)
      }
      //   for (const child of props.children) {
      //     if (typeof child === "string") {
      //       el.append(child);
      //     } else {
      //       el.append(box(child));
      //     }
      //   }
      // } else if (typeof props.children === "string") {
      //   el.append(props.children);
      // } else {
      //   el.append(box(props.children));
      // }
    }
  
    return el;
  };