import Image from "next/image";
import { Navbar } from "./components/Navbar";
import { MainPage } from "./components/Main";
import { About } from "./components/About";
import Skillstech from "./components/Skillstech";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <MainPage />
      <About />
      <Skillstech />
      <Projects />
    </div>
  )

}
