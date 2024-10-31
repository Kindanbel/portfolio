import What from "../components/What";

const AboutBody = () => {
  return (
    <div className="my-5 overflow-hidden">
      <div className="into">
        <div className="name text-[25px]">
          I&apos;m <span className="font-[500]">Abel Daniel Onah</span>,
          Software Developer / App Developer
        </div>
        <p className="pt-3">
          I am a Mid-level software developer with hands-on experience in web
          technologies including HTML5, CSS, JavaScript, ReactJS, NextJS,
          Node.js, Express.js, etc. Known for delivering efficient and scalable
          solutions, with a keen eye for detail and accuracy. Quick to adapt and
          also committed to contributing meaningfully in dynamic team
          environments. Proven track record in managing and executing projects
          from inception to completion.
        </p>
      </div>

      <div className="flex flex-col xl:flex-row gap-7 mt-10">
        <div className="tab w-[100%] xl:w-[60%] h-[400px] bg-[url('/images/bg-img.jpg')] bg-no-repeat bg-center bg-cover bg-blend-overlay bg-[rgba(10,10,10,0.65)] flex flex-col lg:flex-row gap-5 items-center lg:justify-between px-[5%] lg:py-32  ">
          <div className="section1 text-white flex flex-col items-center lg:border-r-2 lg:border-solid lg:border-white lg:pr-[20%]">
            <span className="text-[80px]">2+</span>
            <span className="text-[20px]">Years of Experience</span>
          </div>
          <div className="section2 text-white flex flex-col items-center">
            <span className="text-[80px]">6+</span>
            <span className="text-[20px]">Projects Completed</span>
          </div>
        </div>
        <div className="desc w-[100%] xl:w-[40%]">
          <div className="header text-[20px] font-[500] text-black">
            WHAT I DO ?
          </div>
          <div className="b flex flex-col gap-5">
            <What
              img="/images/webicon 1 1.png"
              title="Website design"
              para="I create user friendly and responsive websites using stacks like
                HTML, CSS, JavaScript, ReactJs and a whole lot more. My websites are
                always top notch"
            />
            <What
              img="/images/webappi 1 1.png"
              title="Web Application"
              para="I create web applications using stacks like
              ReactJs, Nodejs (for the backend) and a whole lot more."
            />
            <What
              img="/images/appicon 1 1.png"
              title="Mobile Application"
              para="I create mobile applications using stacks like
              React Native. My applications are always well built and organized."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBody;
