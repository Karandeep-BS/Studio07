import Heading from "./Heading/heading";
import Hero from "./Hero/heroSection";
import Button from "./Hero/Buttom";
import "./App.css";
function App() {
  return (
    <div className="app bg-black">
      <Heading />
      <div  className="frame flex items-center justify-center h-full w-full p-[40px] gap-[10px] top-[64px] left-[3px] flex-col ">
        <Hero />
        <Button />
      </div>
    </div>
  );
}

export default App;
