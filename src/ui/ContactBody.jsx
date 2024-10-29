const ContactBody = () => {
  return (
    <div className="mt-10">
      <div className="header">
        <div className="message text-[30px] text-[rgba(0,0,0,0.55)]">
          feel{" "}
          <span className="span uppercase font-[500] text-black">FREE </span> to
          connect with me!!
        </div>
        <p>
            I am available and ready to work with you on whatever project. Send me a message today or even call me,
            I would be waiting to pick your calls and jump on that project. 
        </p>
      </div>

      <div className="contact flex flex-col lg:flex-row justify-between items-center mt-10">
        <div className="web flex flex-col lg:flex-row gap-7 items-center">
            <div className="image w-[300px] h-[200px]">
                <img src="/images/computer.jpg" alt="computer" className="w-[100%] h-[100%]" />
            </div>
            <div className="con flex flex-col gap-2 text-[17px] font-[500]">
                <span className="email"> <span>Email:</span> onahabel@yahoo.com</span>
                <span className="github"> <span>Github:</span> github.com/Kindanbel</span>
                <span className="twitter"> <span>x:</span> @_AbelDaniels</span>
            </div>
        </div>
        <div className="phone flex flex-col lg:flex-row gap-7 items-center">
        <div className="image w-[300px] h-[300px]">
                <img src="/images/phone.jpg" alt="computer" className="w-[100%] h-[100%]" />
            </div>
            <div className="con flex flex-col gap-2 text-[17px] font-[500]">
                <span className="email"> <span>Tel:</span> +234 9066257597</span>
                <span className="github"><span>WhatsApp:</span> +234 9025126355</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ContactBody;
