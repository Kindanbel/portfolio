const HomeScreen = () => {
  return (
    <div className="screens w-[100%] md:w-[50%] flex flex-col gap-5 justify-center px-[7%]">
      <div className="header flex flex-col gap-1">
        <span className="greeting text-[30px] md:text-[45px] font-[500]">HI THERE</span>
        <span className="name text-[30px] md:text-[45px] font-[500] ">
          I&apos;M <span className="text-[#964B00]">ABEL DANIEL ONAH</span>
        </span>
        <span className="role bg-[#964B00] px-5 text-white w-fit ">
          Software Developer/App Developer
        </span>
      </div>
      <p className="paragraph text-[15px] font-[500]">
        I am a Mid-level software developer with hands-on experience in web
        technologies including HTML5, CSS, JavaScript, ReactJS, NextJS, Node.js,
        Express.js, etc. Known for delivering efficient and scalable solutions,
        with a keen eye for detail and accuracy. Quick to adapt and also
        committed to contributing meaningfully in dynamic team environments.
        Proven track record in managing and executing projects from inception to
        completion.
      </p>
      <button className="btn  w-fit bg-[#964B00] text-white py-2 px-5 rounded-full">
        MORE ABOUT ME
      </button>
    </div>
  );
};

export default HomeScreen;
