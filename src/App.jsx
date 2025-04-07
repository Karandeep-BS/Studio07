import Heading from "./Heading/heading";
import Hero from "./Hero/heroSection";
import Button from "./Hero/Buttom";
import Services from "./Services/Services";
import Work from "./work/work";
import Socials from "./Social/socials";
import "./App.css";
function App() {
  return (
    <div className="app bg-black">
      <Heading />
      <div  className="frame flex items-center justify-center h-full w-full p-[40px] gap-[10px] top-[64px] left-[3px] flex-col ">
        <Hero />
        <Button />
        <Services />
        <Work />
        {/* <Socials /> */}
      </div>
    </div>
  );
}

export default App;
