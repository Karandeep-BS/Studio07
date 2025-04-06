import Images from "./images"

export default function Info(){
    return (
        <div className="idea relative mt-[5%]">
            <div>
                <h1 className="w-[520px] h-[165px] text-[96px] flex flex-col leading-[84px] tracking-[-4px] text-white font-[300] top-[50%] ">
                    From idea 
                    <span className="font-[400]">
                    to design
                    </span>
                </h1>
    
                <div className="Number flex flex-col justify-between mt-20 space-y-4">
                    <div className="flex flex-row">
                        <div className="flex flex-col space-y-2 items-center w-[10%]">
                            <div className="circle w-[59px] h-[59px] bg-[#909090CC] rounded-full flex justify-center items-center">
                              <h4 className="text-white text-lg font-bold">1</h4>
                            </div>
                            <div className="line h-[47px] w-[1px] bg-[#909090]"></div>
                            <div className="circle w-[59px] h-[59px] bg-[#909090CC] rounded-full flex justify-center items-center">
                              <h4 className="text-white text-lg font-bold">2</h4>
                            </div>
                            <div className="line h-[47px] w-[1px] bg-[#909090]"></div>
                            <div className="circle w-[59px] h-[59px] bg-[#909090CC] rounded-full flex justify-center items-center">
                              <h4 className="text-white text-lg font-bold">3</h4>
                            </div>
                        </div>
    
                        <div className="text ml-10">
                            <div className="mb-[12px]">
                                <h3 className="text-white text-[24px]">Ideation</h3>
                                <p className="w-[296px] leading-[20px] tracking-[0px] text-white">
                                We research, brainstorm, and conceptualize unique design solutions tailored to your needs.
                                </p>
                            </div>
                             
                            <div className="my-[12px]">
                                <h3 className="text-white text-[24px]">Design Process</h3>
                                <p className="w-[296px] leading-[20px] tracking-[0px] text-white">
                                Turning ideas into visuals, we sketch, prototype, and refine to create stunning and functional designs.
                                </p>
                            </div>
    
                            <div className="my-[12px]">
                                <h3 className="text-white text-[24px]">Completed</h3>
                                <p className="w-[296px] leading-[20px] tracking-[0px] text-white">
                                Final touches, optimization, and delivery of high-quality designs that align perfectly with your vision.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <Images />
            </div>
        </div>
    ) 
}