import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';


export interface IProps
{
    caption:string;
    id:number;
}

export default function Comp(props:IProps)
{
    return (<div>*{props.caption}*
    <input  onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{ 
      console.log( e.target.value)
    }}/>
    *{props.id}</div>)
} 

export const Comp2:React.FC<IProps>=(props)=>{

    return <div>Comp2{props.caption}Comp2</div>

}