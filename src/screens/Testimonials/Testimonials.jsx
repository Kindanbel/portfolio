import Sidebar from "../../ui/Sidebar";
import NavBar from "../../components/NavBar";
import Title from "../../components/Title";

const Testimonials = () => {
  return (
    <div className="flex gap-20">
    <div className="sidebar w-[350px] bg-[#964B00] h-[100vh]">
      <Sidebar />
    </div>
    <div className="body flex-1 py-10">
      <div className="title">
        <Title title="TESTMONIALS" />
      </div>
    </div>
    <div className="navbar py-[100px] pr-[2%]">
      <NavBar />
    </div>
  </div>
  )
}

export default Testimonials