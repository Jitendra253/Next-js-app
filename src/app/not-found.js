import Link from "next/link";

export default function NotFound(){
    return(
        <div>
            <h1>This page is not Available <Link style={{color:'blue'}} href="/">click here</Link> to go to home page</h1>
        </div>
    )
}