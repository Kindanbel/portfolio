import Sidebar from "../../ui/Sidebar";
import NavBar from "../../components/NavBar";
import Title from "../../components/Title";
import PorfolioBody from "../../ui/PorfolioBody";

const Portfolio = () => {
  return (
    <div className="resume flex gap-20 overflow-scroll md:overflow-hidden bg-gray-100">
    <div className="sidebar hidden md:block w-[300px] h-[100vh]">
      <Sidebar />
    </div>
    <div className="body flex-1 py-10">
      <div className="title px-5 md:px-0">
        <Title title="PORTFOLIO" />
        <PorfolioBody />
      </div>
    </div>
    <div className="navbar navbar w-[100%] md:w-[5%] md:py-[150px] md:pr-[2%] fixed bottom-2 md:relative">
      <NavBar />
    </div>
  </div>
  )
}

export default Portfolio