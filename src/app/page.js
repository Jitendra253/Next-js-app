import { Roboto } from "next/font/google";
const roboto = Roboto({
  weight:'100',
  subsets:['latin'],
  display:'swap'
})

export default function Home() {
  return (
    <div>
       <h1>Font Optimization</h1>
       {/* <h1 style={{fontFamily:"roboto",fontWeight:"100"}}>Font Optimization</h1> */}
       <h1 className={roboto.className}>Font withnext js font feature</h1>
    </div>
  );
}