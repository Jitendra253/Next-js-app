'use client'
import Link from "next/link";
import styles from "./page.module.css";
import { useState } from "react";
import {useRouter} from 'next/navigation';

export default function Home() {
  const [name,setName] = useState("Papu");

  const router = useRouter();
  const navigate = (name)=>{
    router.push(name)
  }
  const apple=()=>{
    setName("raju")
  }
  const InnerCompt = () =>{
    return(
      <h1>Inner Component</h1>
    )
  }
  return (
    <div className={styles.page}>
      <main className={styles.main}>
          <h2>Events, function and State:{name}</h2>
          <button onClick={apple}>Click Me</button>
          <InnerCompt/>
          <Link href="/login">Login</Link>
          <Link href="/about">About</Link>
          <button onClick={()=>navigate("/login")}>Go to login Page</button>
          <button onClick={()=>navigate("/about")}>Go to about Page</button>
      </main>
    </div>
  );
}
