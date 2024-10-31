import { IoIosHome } from "react-icons/io";
import { IoPersonSharp } from "react-icons/io5";
import { FaFile } from "react-icons/fa";
import { MdOutlineResetTv } from "react-icons/md";
import { IoMdContacts } from "react-icons/io";
import Arrow from "./Arrow";
import { NavLink } from "react-router-dom";

const navItems = [
  { id: 1, href: "/", icon: <IoIosHome /> },
  { id: 2, href: "/about", icon: <IoPersonSharp /> },
  { id: 3, href: "/resume", icon: <FaFile /> },
  { id: 4, href: "/portfolio", icon: <MdOutlineResetTv /> },
  { id: 5, href: "/contact", icon: <IoMdContacts /> },
];

const NavBar = () => {
  return (
    <nav className="navlinks w-[100%] lg:w-fit rounded-full bg-[url('/images/bg-img.jpg')] bg-no-repeat bg-center bg-cover bg-blend-overlay bg-[rgba(10,10,10,0.65)]">
      <ul className="lists flex flex-row lg:flex-col gap-3 lg:gap-5 py-2 px-10 lg:px-5 lg:py-5 items-center justify-between lg:justify-center">
        {navItems.map((item, index) => (
          <div key={item.id}>
            <li className="flex flex-col items-center lg:pb-5 pb-0">
              <NavLink
                to={item.href}
                className={({isActive}) => 
                  isActive ? "text-[25px] text-[#40E0D0]" : "text-[25px] text-white"
                } 
              >
                {item.icon}
              </NavLink>
            </li>
            {index < navItems.length - 1 && (
                <div className=" hidden lg:flex items-center justify-center">
                  <Arrow />
                </div>
              )}
          </div>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
