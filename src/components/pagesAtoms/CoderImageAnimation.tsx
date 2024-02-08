import {motion} from "framer-motion"
import Lottie from "react-lottie"
import coding from "../../../public/json/coding.json"




function Image() 
{
    
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: coding
    };
    
    return <>
    
        <div className="">
            <motion.div>
                <Lottie options={defaultOptions}/>
            </motion.div>
        </div>
    
    </>
}

export default Image;