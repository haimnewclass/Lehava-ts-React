import React from 'react';
import logo from './logo.svg';
import './App.css';
import Item from './func1'
import {ReactFCComponent,ItemDetails} from './func1'
import Comp from './com';
import {IProps} from './com';
import {Comp2} from './com';

function App() {
  let d:string;
  const details:ItemDetails = {color:"Red",price:100,midName:"888"}

  const propsObj:IProps = {caption:'Supermarket',id:119};
  const propsObj1:IProps = {caption:'Zarchania',id:220};

  return (
    <div className="App">
      <Comp {...propsObj} ></Comp>
      <Comp {...propsObj1} ></Comp>
      <Comp2 {...propsObj1} ></Comp2>
    </div>
  );
}

export default App;
