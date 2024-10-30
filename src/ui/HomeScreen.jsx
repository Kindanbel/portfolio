import { RiGithubFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { Link } from "react-router-dom";

const socials = [
  { id: 1, href: "https://github.com/Kindanbel", icon: <RiGithubFill /> },
  { id: 2, href: "https://x.com/AbelDaniels_", icon: <FaXTwitter /> },
  { id: 3, href: "https://www.linkedin.com/in/abel-daniel-932194252/", icon: <IoLogoLinkedin /> },
];

const HomeScreen = () => {
  return (
    <div className="homeScreen w-[100%] md:w-[50%] flex flex-col gap-5 justify-center py-7 px-[3%] lg:px-[7%] text-white bg-blend-overlay bg-[rgba(10,10,10,0.65)]">
      <div className="header flex flex-col gap-1">
        <span className="greeting text-[30px] md:text-[45px] font-[500]">
          HI THERE
        </span>
        <span className="name text-[30px] md:text-[45px] font-[500] ">
          I&apos;M <span className="text-[#FFDF00]">ABEL DANIEL ONAH</span>
        </span>
        <span className="role bg-[#1E4B29] px-5 text-white w-fit ">
          Software Developer/App Developer
        </span>
      </div>
      <p className="paragraph text-[15px] font-[500]">
        Let the DevKing solve all your programming problems today with his
        intelligent brain and his blessed fingers. That is me by the way.
      </p>
      <div className="flex gap-10 items-center">
      {socials.map((social) => {
        return (
            <Link className="text-[20px]" key={social.id} to={social.href}>
              {social.icon}
            </Link>
        );
      })}
      </div>
      <button className="btn  w-fit bg-[#1E4B29] text-white py-2 px-5 rounded-full">
        MORE ABOUT ME
      </button>
    </div>
  );
};

export default HomeScreen;
