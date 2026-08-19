'use client'
import Script from "next/script";

export default function Page(){
    return(
        <div>
            <Script src="/location.js" onLoad={()=>{
                console.log("file Loaded")
            }}/>
            <h1>Get User GeoLocation</h1>
        </div>
    )
}