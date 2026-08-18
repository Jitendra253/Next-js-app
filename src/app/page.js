import Image from "next/image";
import profile from "../../public/globe.svg";

export default function Home() {
  return (
    <div>
      <h1>Image Optimization in Next</h1>
{/* 
      <Image
        src={profile} 
        width={500}
        height={500}
        alt="example image"
      />
      <img src={profile.src}/> */}

      <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr7Q2-iOUXeta4efD3d8FAPLTOfSN1lKRhOGJInoa6mA&s=10"
       height={800} 
       width={800} alt="sample image" />
    </div>
  );
}