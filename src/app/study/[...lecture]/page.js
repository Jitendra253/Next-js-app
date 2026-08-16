
'use client'
import { use } from "react"
export default function Lecture({params}){
    let {lecture} = use(params)
    console.log(lecture)
    return(
        <div>
            <h1>Day of college {lecture[0]}</h1>
            <h2>Lecture number {lecture[1]}</h2>
        </div>
    )
}