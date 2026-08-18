 
"use client"
import { useState } from "react";
import style from "./style.module.css";


export default function Home(){
  const [color,setColor] = useState('red')
  const {red}= style;
  return(
    <div>
      <main>
        <h1 className={color=="red"?style.red:style.green}>Style and CSS with Next js</h1>
        <h2 style={{backgroundColor:color==="red"?'red':'green'}}>Heading 2 </h2>
        <h3 id={style.orange}>Heading 3 </h3>

        <h4 className={red}>Dummy Text 1</h4>
        <h4 className={red}>Dummy Text 2</h4>
        <h4 className={red}>Dummy Text 3</h4>
        <h4 className={red}>Dummy Text 4</h4>
        <button onClick={()=>setColor("green")} >Update color</button>
      </main>
    </div>
  )
}