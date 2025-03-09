"use client"

import {StyledButton} from "./Button.styles"
type ButtonProps ={
    handleClick?:()=>void
    title:string 
    status?: "subscribed" | "notsubscribed"
}
export default function Button({title, handleClick,status}: ButtonProps) {
  return (
    <StyledButton $status={status} onClick={handleClick}>{title}</StyledButton>
  )
}

