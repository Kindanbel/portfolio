import Portfoliotiles from "../components/Portfoliotiles";
import { useState } from "react";

const filters = ["All", "Website", "Web Application"];

const PorfolioBody = () => {
  const [category, setCategory] = useState("All")
  return (
    <div className="mt-10">
      <div className="filters flex gap-10 mdgap-20 items-center justify-center">
        {filters.map((filter, index) => {
          return <button onClick={() => setCategory(prev => prev === filter ? "All" : filter)} className="text-[20px] font-[bold]" key={index}>{filter}</button>;
        })}
      </div>
      <div className="tab">
        <Portfoliotiles category={category} />
      </div>
    </div>
  );
};

export default PorfolioBody;
