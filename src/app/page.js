import { API_BASE_URL } from "@/config/constant";
export default function Home() {
  console.log(process.env.NODE_ENV)
  console.log(process.env.SERVER_PASSWORD)
  return (
    <div>
      {
      process.env.NODE_ENV=="development"?
      <h1>You are in developement Mode</h1>
      :
      <h1>You are on Production Mode</h1>

      }
       <h1>Environment Varialbes IN Next js</h1>
       {
        API_BASE_URL
       }
    </div>
  );
}