'use client'
import { useRouter } from "next/navigation";
const Login = () =>{
    const router = useRouter();
    const navigate = (page)=>{
        router.push("/login/"+page)
    }
    return(
        <div>
            <h1 className="heading">Hello login page</h1>
            <button onClick={()=>router.push("/")}>Go to Home page</button>
            <br></br>
            <br></br>
            <button onClick={()=>navigate("loginstudent")}>Go to Student Login page</button>
            <br></br>
            <br></br>
            <button onClick={()=>navigate("loginteacher")}>Go to Teacher Login page</button>
        </div>
    )
}

export default Login;