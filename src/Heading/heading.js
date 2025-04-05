export default function Heading() {
    return (
        <div className="text-nowrap w-full h-[64px] flex border-[1px] justify-between px-[98px] py-[8px] items-center top-[8px] right-[98px] bottom-[8px] left-[98px] bg-[#1e1e1e] border-[#1e1e1e]">
            <div className="text h-[24px] w-[100px] text-[#4af437]">
                <h1 className="text-center font-fugaz top-[24px] left-[98px] font-[400] text-[20px] leading-[24px]  tracking-[0.15px]">STUDIO07</h1>
            </div>
            <div className="text-white flex w-[424px] gap-[48px] font-montserrat font-[400] text-[14px] justify-center leading-[24px] tracking-[0.5px]">
                <h4 className="w-[45px] h-[24px] ">Home</h4>
                <h4 className="w-[69px] h-[24px] ">About us</h4>
                <h4 className="w-[59px] h-[24px] ">Contact</h4>
                <div className="text-white text-center flex h-[24px] rounded-[50px] flex-row border-[1px] border-[#4AF437] border-opacity-[36%] px-[20px] py-[0px] gap-[10px] items-center">
                    <h4 className=" text-center text-[14px] leading-[24px] tracking-tight ">Book call</h4>
                </div>
            </div>
        </div>
    );
  }