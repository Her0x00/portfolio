import Image from "next/image";
import { Navbar } from "./components/Navbar";
import { MainPage } from "./components/Main";
import { About } from "./components/About";

export default function Home() {
  return (
    <div>
      <Navbar />
      <MainPage />
      <About />
    </div>
  )
    
}
