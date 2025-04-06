import Info from "./info.js"
import Services_Ellipse from "../Ellipse/Services_Ellipse.js"

export default function Services(){
    return (
        <div className="services relative w-full h-[900px] p-32">
            <Services_Ellipse />
            <div className="w-[140px] h-[35px] top-[80px] absolute left-[] flex flex-row justify-around">
                <div className="flex flex-row justify-center items-center ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32"><path fill="#61FF00" d="M11.166 23.963L22.36 17.5c1.43-.824 1.43-2.175 0-3L11.165 8.037c-1.43-.826-2.598-.15-2.598 1.5v12.926c0 1.65 1.17 2.326 2.598 1.5z"/>
                    </svg>
                </div>
                    <h4 className="w-[116px] h-[35px] top-[] left-[]  font-sansation text-[20px] tracking-[0px]  text-[#61FF00] leading-[34px] font-[400] ">Services</h4>
            </div>
            <Info />
        </div>
    ) 
}