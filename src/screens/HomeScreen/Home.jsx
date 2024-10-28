//mport NavBar from "../../components/NavBar"

import NavBar from "../../components/NavBar";
import HomeScreen from "../../ui/HomeScreen";

const Home = () => {
  return (
    <div className="flex flex-col gap-3 md:flex-row h-[100vh] relative">
      <HomeScreen />
      <div className="screen2 flex-1 w-[100%] h-[100vh] md:w-[50%] bg-blend-overlay bg-[rgba(10,10,10,0.65)] relative">
        <div className="absolute w-[100%] md:w-[7%] md:right-10 bottom-2 md:top-[100px]">
        <NavBar />
        </div>
      </div>
    </div>
  );
};

export default Home;
