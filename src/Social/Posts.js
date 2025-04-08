import More from "./MorePosts"
import Contact from "./Contact"
export default function Posts(){
    return (
        <div className="w-full h-[600px]  relative  ">
            <h4 className=" w-[306px] h-[92px] font-sansation font-bold text-[48px] flex flex-col -tracking-[-0.88px] leading-[50px] text-white">
                Our
                <span>Recent Post</span>
            </h4>

            <div
            className="w-[126px] h-[44px] absolute rounded-[18px] top-[1%] right-[1%] flex justify-ccenter items-center text-center"
            style={{
            background: 'linear-gradient(180deg, #FFFFFF -56.82%, rgba(74, 244, 55, 0.86) 100%)',
            }}>
                <h4 className="font-sansation font-normal text-[14px] leading-[150%] w-full text-white">VIEW All</h4>
            </div>

            <div className="w-full flex flex-row">
                <div className="w-[609px] h-[390px] rounded-[18px] mt-[1%]">
                    <img 
                    src="/images/Post_1.jpeg" 
                    alt="" 
                    className="w-full h-full object-cover rounded-[18px]"></img>
                </div>
                 
                 <div className="w-[500px] h-[390px] absolute mt-[1%] flex flex-col right-[1%]">
                    <div className="h-[16px] flex flex-row items-center">
                        <h4 className="font-sansation font-bold text-[12px] text-white leading-[150%]tracking-[0%] ">Trending</h4>
                        <h4 className="ml-[2%] leading-[150%] text-[#999999] text-[12px] font-sansation font-normal tracking-[0%] " >16 March 2025</h4>
                    </div>
                    <br></br>
                    <div className=" text-left">
                        <h4 className=" w-full h-[92px] font-sansation font-bold text-[32px] flex flex-col -tracking-[-2px] leading-[45px] text-white">
                        The Future of Graphic Design:
                            <span>Trends to Watch in 2025</span>
                        </h4>
                    </div>
                    <br></br>
                    <div className="w-[398px] h-[199px] relative">
                        <p className="text-[14px] font-sansation font-normal leading-[150%] tracking-[0%] text-[#666666]">
                        Graphic design is constantly evolving, with new trends emerging each year. As we step into 2025, here are some key trends shaping the industry:
                        1. AI-Driven Design – Artificial Intelligence is transforming design by offering automation and new creative possibilities. From AI-generated layouts to smart color palettes, designers can now create faster and smarter.
                        </p>
                        <div className="divs1 absolute bottom-[1%] w-[110px] h-[35px] border-[1px] border-[#ffff] rounded-[18px] flex justify-center items-center text-center ">
                            <h4 className="w-[110px] text-[14px] leading-[34px] font-normal text-white">Read More</h4>
                        </div> 
                    </div>
                 </div>
            </div>
            <br></br>
            <br></br>
            <More />
            <br></br>
            <Contact />
        </div>
    )
}