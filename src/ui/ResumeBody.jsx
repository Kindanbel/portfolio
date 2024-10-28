import Resumetiles from "../components/Resumetiles";
import Resumetitle from "../components/Resumetitle";

const ResumeBody = () => {
  return (
    <div className="mt-10">
      <div className="education flex flex-col gap-5 border-b-2 border-solid border-[rgba(0,0,0,0.55)] pb-10">
        <Resumetitle title="Education" />
        <div className="tiles grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
          <Resumetiles
            year="2018 - 2024"
            text="Biochemistry"
            para="Benue State University, Makurdi, Nigeria"
          />
          <Resumetiles
            year="2010 - 2016"
            text="West African Senior School Certificate"
            para="McRoyal College, Obawole, Iju, Lagos State"
          />
          <Resumetiles
            year="2004 - 2010"
            text="First School Leaving Certificate "
            para="Gibraltar Nursing and Primary School"
          />
        </div>
      </div>
      {/*Experience*/}
      <div className="experience mt-10 flex flex-col gap-5 ">
        <Resumetitle title="EXperience" />
        <div className="tiles grid grid-cols-1 lg:grid-cols-2 gap-5 ">
          <Resumetiles
            year="2024"
            text="Frontend Developer"
            para="Korabs-Tech Innovation"
            desc="Developed and maintained dynamic user interfaces using NextJS. Collaborated with backend developers to integrate RESTful APIs, optimizing performance and responsiveness. Participated in code reviews and contributed to the design and implementation of new features for client-facing projects."
          />
          <Resumetiles
            year="2024"
            text="Funnel Builder"
            para="Brandoxel Media"
            desc="Spearheaded the creation and optimization of landing pages, email campaigns, and other elements of sales funnels to drive performance improvements. Led sales pipeline projects from planning to execution, providing timely updates and maintaining transparent communication among stakeholders."
          />
        </div>
      </div>
    </div>
  );
};

export default ResumeBody;
