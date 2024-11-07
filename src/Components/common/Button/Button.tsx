import React from "react"

type Buttonprops={
    children:React.ReactNode;
    classname:string;
    onclick?:()=>void;
    Type?:"submit"|"button"
}
const Button:React.FC<Buttonprops> = ({children,classname,onclick,Type}) => {
  return (
    <button
    className={classname}
    onClick={onclick}
    type={Type}
    >
     {children}
    </button>
  )
}

export default Button
