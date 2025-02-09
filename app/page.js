import Navbar from "../src/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen w-full brightness-125 bg-cover bg-center" style={{ backgroundImage: "url('https://static.vecteezy.com/system/resources/thumbnails/011/412/771/small_2x/abstract-vector-background-bg-purple-blue-pink-gradient-dots-pattern-curve-lines-photo.jpg')" }}>           
      <div className="h-full">
      <Navbar/> 
      </div>
    </div>
  );
}
