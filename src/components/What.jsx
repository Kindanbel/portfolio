

const What = (prop) => {
  return (
    <div className="flex gap-4">
        <div className="icon w-[110px] h-[110px]">
            <img src={prop.img} alt="icon" className="w-[100%] h-[100%]" />
        </div>
        <div className="body w-[70%]">
            <div className="header text-[20px] font-[500] text-black uppercase">{prop.title}</div>
            <p className="desc text-[14px]">
                {prop.para}
            </p>
        </div>
    </div>
  )
}

export default What