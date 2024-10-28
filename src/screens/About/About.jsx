import Sidebar from "../../ui/Sidebar";
import NavBar from "../../components/NavBar";
import Title from "../../components/Title";
import AboutBody from "../../ui/AboutBody";

const About = () => {
  return (
    <div className="flex gap-20 relative">
      <div className="sidebar hidden md:block w-[300px] bg-[#964B00] h-[100vh]">
        <Sidebar />
      </div>
      <div className="body flex-1 py-10">
        <div className="title px-5 md:px-0">
          <Title title="ABOUT ME" />
          <AboutBody />
        </div>
      </div>
      <div className="navbar w-[100%] md:w-[5%] md:py-[100px] md:pr-[2%] fixed bottom-2 md:relative">
        <NavBar />
      </div>
    </div>
  );
};

export default About;
