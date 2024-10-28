import { NavLink } from "react-router-dom";
//import Arrow from "../components/Arrow";

const links = [
  {
    id: 1,
    name: "Home",
    href: "/",
  },
  {
    id: 2,
    name: "About Me",
    href: "/about",
  },
  {
    id: 3,
    name: "Resume",
    href: "/resume",
  },
  {
    id: 4,
    name: "Portfolio",
    href: "/portfolio",
  },
  {
    id: 6,
    name: "Contact",
    href: "/contact",
  },
];

const Sidebar = () => {
  return (
    <div className="h-[100vh]">
      <div className="sidebarimg w-[300px] h-[300px] bg-blend-overlay bg-[rgba(10,10,10,0.65)]">
        
      </div>
      <div className="links">
        <ul className="list flex flex-col gap-7 items-center justify-center h-[50vh] py-52">
          {links.map((link) => {
            return (
              <div key={link.id}>
                <li className="">
                  <NavLink to={link.href} className={({isActive}) => 
                    isActive ? "font-[500] text-[17px] text-[#40E0D0] uppercase" : "font-[500] text-[17px] text-white uppercase"
                  } >{link.name}</NavLink>
                </li>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
