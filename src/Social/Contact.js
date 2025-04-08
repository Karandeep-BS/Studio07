export default function Contact(){
    return (
        <div className="contact w-full h-[400px] relative ">
            <h1 className="w-[520px] h-[165px] text-[96px] font-sansation flex flex-col leading-[84px] tracking-[10px] text-white font-mormal top-[50%] ">
                    LET’S 
                    <span className="font-sansation font-normal">
                    GET IN 
                    </span>
                    <span className="font-sansation font-normal">
                    TOUCH 
                    </span>
            </h1>
            <div className=" w-[511px] h-[241px] absolute top-[1%] right-[1%] flex flex-col">
                <div className=" w-full h-[25%] border-b-[1px] ustify-end flex items-center justify-start border-[#ffff]">
                    <h4 className="font-sansation font-light text-[20px] leading-[34px] tracking-[0px] text-[#BCB9B9]">UI DESIGN</h4>
                </div>
                <div className=" w-full h-[25%] border-b-[1px] flex items-center justify-start border-[#ffff]">
                    <h4 className="font-sansation font-light text-[20px] leading-[34px] tracking-[0px] text-[#BCB9B9]">GRAPHIC DESIGN</h4>
                </div>
                <div className=" w-full h-[25%] border-b-[1px] flex justify-start items-center border-[#ffff]">
                    <h4 className="font-sansation font-light text-[20px] leading-[34px] tracking-[0px] text-[#BCB9B9]">ILLUSTRATION</h4>
                </div>
                <div className=" w-full h-[25%] border-b-[1px] border-[#ffff] justify-start flex items-center">
                    <h4 className="font-sansation font-light text-[20px] leading-[34px] tracking-[0px] text-[#BCB9B9]">MOTION</h4>
                </div>
            </div>


            <div
            className="w-[126px] h-[44px] absolute rounded-[18px] bottom-[1%] right-[1%] flex justify-ccenter items-center text-center"
            style={{
            background: 'linear-gradient(180deg, #FFFFFF -56.82%, rgba(74, 244, 55, 0.86) 100%)',
            }}>
                <h4 className="font-sansation font-normal text-[14px] leading-[150%] w-full text-white">SEND </h4>
            </div>
        </div>
    )
}