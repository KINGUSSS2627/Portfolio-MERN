import {motion} from "framer-motion"
import Lottie from "react-lottie"
import skill from "../../../public/json/skill.json"




function PersonFloat() 
{
    
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: skill,
    };
    
    return <>
    
        <div className="ImageSize setImage">
            <motion.div>
                <Lottie options={defaultOptions}/>
            </motion.div>
        </div>
    
    </>
}

export default PersonFloat;