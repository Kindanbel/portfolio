const Resumetiles = (prop) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="year py-2 px-5 bg-[url('/images/bg-img.jpg')] bg-no-repeat bg-center bg-cover bg-blend-overlay bg-[rgba(10,10,10,0.65)] text-white ">{prop.year}</div>
      <div className="course text-[20px] font-[500]">{prop.text}</div>
      <div className="school text-[17px]">{prop.para}</div>
      <p className="font-[500]">{prop.desc}</p>
    </div>
  );
};

export default Resumetiles;
