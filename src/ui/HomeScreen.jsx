const HomeScreen = () => {
  return (
    <div className="homeScreen w-[100%] md:w-[50%] flex flex-col gap-5 justify-center py-7 px-[7%] text-white bg-blend-overlay bg-[rgba(10,10,10,0.65)]">
      <div className="header flex flex-col gap-1">
        <span className="greeting text-[30px] md:text-[45px] font-[500]">HI THERE</span>
        <span className="name text-[30px] md:text-[45px] font-[500] ">
          I&apos;M <span className="text-[#FFDF00]">ABEL DANIEL ONAH</span>
        </span>
        <span className="role bg-[#1E4B29] px-5 text-white w-fit ">
          Software Developer/App Developer
        </span>
      </div>
      <p className="paragraph text-[15px] font-[500]">
          Let the DevKing solve all your programming problems today with his intelligent brain
          and his blessed fingers. That is me by the way.
      </p>
      <button className="btn  w-fit bg-[#1E4B29] text-white py-2 px-5 rounded-full">
        MORE ABOUT ME
      </button>
    </div>
  );
};

export default HomeScreen;
