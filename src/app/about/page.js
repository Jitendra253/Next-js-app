'use client';
import Link from "next/link";
import { useRouter } from "next/navigation";
const About = () => {
    const router = useRouter();
    return (
        <div>
            <h1>Hello About us page</h1>
            <button onClick={()=>router.push("/")}>Go to Home Page</button>
        </div>

    )
}

export default About;