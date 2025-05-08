import MainPage from "./components/MainPage";
import { HomePage } from "./components/HomePage";

export default function Home() {
  return (
    <div>
      <MainPage/>
      <div className=" mt-6">
      <HomePage/>
      </div>
      </div>
  );
}
