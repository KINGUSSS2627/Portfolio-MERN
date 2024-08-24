import { CRow } from "@coreui/react"
import { FaHtml5, FaCss3Alt, FaNodeJs, FaReact, FaBootstrap, FaGithub} from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiExpress, SiMongodb} from "react-icons/si";




function SkillSet()
{
    return <>

        <CRow className="text-2xl"> Languages </CRow>
        <CRow className="flex"> 
            <FaHtml5 className="text-orange-600 m-1 mr-3 card" size={35}/>
            <FaCss3Alt className="text-blue-400 m-1 mr-3 card" size={35}/>
            <SiJavascript className="text-yellow-500 rounded m-1 mr-3 card" size={32}/>
            <FaNodeJs className="text-green-600 m-1 card" size={34.5}/> 
        </CRow>

        <CRow className="text-2xl"> Libraries & FrameWork </CRow>
        <CRow  className="flex"> 
            <FaReact className="text-cyan-400 m-1 mr-3 card" size={32}/>
            <FaBootstrap className="text-indigo-600 m-1 mr-3 card" size={32}/>
            <SiTailwindcss className="text-cyan-400 m-1 mr-3 card" size={32}/>
            <SiExpress className="text-neutral m-1 mr-3 card" size={30}/>
        </CRow>

        <CRow className="text-2xl"> Tools & Technologies </CRow>
        <CRow  className="flex"> 
            <SiMongodb className="text-green-500 m-1 mr-3 card" size={32}/>
            <FaGithub className="text-black m-1 mr-3 card" size={32}/>
        </CRow>
    
    </>
}

export default SkillSet;