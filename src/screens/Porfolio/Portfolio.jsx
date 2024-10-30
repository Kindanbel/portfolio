import Sidebar from "../../ui/Sidebar";
import NavBar from "../../components/NavBar";
import Title from "../../components/Title";
import PorfolioBody from "../../ui/PorfolioBody";

const Portfolio = () => {
  return (
    <div className="resume flex lg:gap-5 2xl:gap-20 overflow-scroll md:overflow-hidden bg-gray-100">
      <div className="sidebar hidden lg:block w-[300px] h-[100vh]">
        <Sidebar />
      </div>
      <div className="body flex-1 py-10 overflow-scroll lg:pr-5 xl:pr-0">
        <div className="title px-5 lg:px-0">
          <Title title="PORTFOLIO" />
          <PorfolioBody />
        </div>
      </div>
      <div className="navbar w-[100%] lg:w-[5%] lg:py-[100px] lg:pr-[2%] md:px-5 lg:px-0 fixed bottom-2 lg:hidden xl:block xl:relative">
        <NavBar />
      </div>
    </div>
  );
};

export default Portfolio;
