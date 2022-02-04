import React from 'react';
import './button.css'

interface IButton{
  title:string
  onClick : ()=> void
}

export const Button = (props:IButton) => {
  return (
      <button className="" onClick={props.onClick}>{props.title}</button>
      )
};
