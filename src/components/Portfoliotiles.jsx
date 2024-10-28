import portfolio from "../../Data/potfolios";
import { RiGithubFill } from "react-icons/ri";
import { IoLinkSharp } from "react-icons/io5";

const Portfoliotiles = (prop) => {
  return (
    <div className="mt-10 grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-3">
      {portfolio.map((port) => {
        if (prop.category === "All" || prop.category === port.category) {
          return (
            <div
              className="w-fit max-w-[100%] h-fit bg-[#964B00] p-2 rounded-lg text-white flex flex-col gap-2"
              key={port.id}
            >
              <div className=" font-[500] text-[20px]">{port.name}</div>
              <div className="description">{port.description}</div>
              <div className="stacks flex gap-2">
                {Array.isArray(port.stacks) &&
                  port.stacks.map((stack, index) => {
                    return (
                      <div className="" key={index}>
                        {stack}
                      </div>
                    );
                  })}
              </div>
              <div className="links flex gap-5 items-center">
                <span className="github">
                  <a
                    className="text-[25px]"
                    href={port.gitlink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <RiGithubFill />
                  </a>
                </span>
                <span className="livelink">
                  <a
                    className="text-[25px]"
                    href={port.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IoLinkSharp />
                  </a>
                </span>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Portfoliotiles;
