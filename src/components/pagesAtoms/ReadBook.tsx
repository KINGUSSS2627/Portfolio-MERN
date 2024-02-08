import {motion} from "framer-motion"
import Lottie from "react-lottie"
import readingbook from "../../../public/json/reading-book.json"



function ReadBook() 
{
    
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: readingbook
    };
    
    return <>
    
        <div className="ImageSize setImage">
            <motion.div>
                <Lottie options={defaultOptions}/>
            </motion.div>
        </div>
    
    </>
}

export default ReadBook;