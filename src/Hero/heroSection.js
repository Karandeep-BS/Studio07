import Hero_ellipse from "../Ellipse/Hero_Ellipse";
export default function Hero() {
    return (
        <div className="hero relative">
        <div className="MAIN w-[845px] h-[513px] top-[124px] left-[219px] flex -z-20">
        <Hero_ellipse />
            <h4 className="font-sansation w-[229px] h-[33px] -rotate-90 text-[20px] leading-[34px] tracking-[9px] text-[#BCB9B9] absolute top-[30%] left-[-60px]">
                Web Design
            </h4>

            <h4 className="w-[175px] h-[33px] absolute top-[20px] right-[19%] text-[20px] leading-[34px] text-[#D9D9D9] tracking-[4px] z-20">
                Development
            </h4>

            <h4 className="w-[175px] h-[33px] absolute bottom-[20px] left-[20px] text-[20px] leading-[34px] text-[#D9D9D9] tracking-[4px]">
                Branding
            </h4>

            <h4 className="w-[193px] h-[33px] absolute text-[20px] text-[#D9D9D9] tracking-[5px] leading-[34px] top-[50%] right-[-3%] z-20 ">
                App Design
            </h4>

            <h1 className="w-[714px] h-[317px] text-[128px] leading-[108px] tracking-[0px] font=Sansation text-white font-[700] right-[7%] bottom-[25%] absolute z-10">
                WE BUILD DIGITAL PRODUCTS
            </h1>

            <div className=" absolute w-[512px] h-[512px] left-[20%] -rotate-[24deg] ">
                    <img src="/images/Hero_back.png" 
                    alt="Hero Back"
                    className="w-full h-full absolute" />
            </div>

            <div className="relative w-full">
                <div className="bg-blue-700 w-[126px] h-[154px] absolute right-[5%]">
                    <img src="/images/development-hero.jpeg "
                    alt="" 
                    className="w-full h-full filter grayscale" />
                </div>
                <div className="bg-blue-700 w-[114px] h-[114px] absolute left-[2%] bottom-[10%]">
                <img src="/images/Branding_hero.jpeg" 
                    alt=""
                    className="w-full h-full absolute filter grayscale" />
                </div>
            </div>
        </div>
    </div>
    );
}
