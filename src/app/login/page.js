'use client'
import { useRouter } from "next/navigation";
const Login = () =>{
    const router = useRouter();
    return(
        <div>
            <h1>Hello login page</h1>
            <button onClick={()=>router.push("/")}>Go to Home page</button>
        </div>
    )
}

export default Login;