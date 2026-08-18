import custom from "./custom.module.css"
import other from "./other.module.css"
import outside from '@/style/outside.module.css'
export default function Home(){
  return(
    <div>
      <main>
        <h1 className={custom.main}>Style and CSS with Next js</h1>
        <h2 className={other.main}>Style and CSS with Next js</h2>
        <h3 className={outside.main}>outside Style and css with next js</h3>
      </main>
    </div>
  )
}