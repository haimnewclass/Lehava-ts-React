import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';

export interface ItemDetails{
    color:string;
    price:number;
    midName?:string
}

export default function Item(pros:ItemDetails)
{

const test:ItemDetails = {color:"red",price:123}

    let num1:number = 23;
      
    const [getA,setA] = useState<number>(8);
    const [getArr,setArr] = useState<string[]>([]);

    return <div>123{getA} 
    
    <input onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{
        
    }} />
    {pros.color}</div>
}



export const ReactFCComponent: React.FC<ItemDetails> = (details) => {
    return <div >FC {details.color}</div>
}