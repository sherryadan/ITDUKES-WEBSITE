import HomePage from "./components/HomePage";
import { NavBar } from "./components/NavBar";

export default function Home() {
  return (
    <div>
      <HomePage/>
      <div className=" mx-20 mt-6">
      <NavBar/>
      </div>
      </div>
  );
}
