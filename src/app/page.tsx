import Image from "next/image";
import { Navbar } from "./components/Navbar";
import { MainPage } from "./components/Main";

export default function Home() {
  return (
    <div>
      <Navbar />
      <MainPage />
    </div>
  )
    
}
