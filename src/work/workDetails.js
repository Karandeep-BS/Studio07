import Maintext from "./Maintext"
import Work_ellipse from "../Ellipse/work_Ellipse"
import Work1 from "./workDetails_1"
import O1 from "./O1"
import O2 from "./O2"
import O3 from "./O3"
export default function WorkDetails (){
    return (
        <div className="w-full">
            <Work_ellipse />
            <div className="WorkDetail relative mt-[5%]">
            <Maintext />
            <Work1 />
            
            </div >
            <O1 />
            <div className="w-full">
            <O2 />
            <O3 />
            </div>
        </div>
    )
}