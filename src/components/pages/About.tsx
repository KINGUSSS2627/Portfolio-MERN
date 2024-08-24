import Header from "../partials/Header"
import { CContainer, CCol, CRow } from "@coreui/react"
import ReadBook from "../pagesAtoms/ReadBook"
import Skill from "../pagesAtoms/Skill"
import SkillSet from "../pagesAtoms/SkillSet"
import Experience from "../pagesAtoms/Experience"


function About()
{

    return <>
    
        <Header/>
        <CContainer className="alignCenter mt-20">


            <CRow> Something About Myself </CRow>
            <CRow className="text-5xl mt-3 mb-3"> About Me </CRow>
            <CRow> Linear Animation </CRow>
            <CRow className="flex mt-10"> 

                <div className="ml-10">
                    <div className="text-4xl"> Shreshth Gupta </div>
                    <div className="text-xl"> Competative Programmer & MERN Devloper</div>
                    <div > Detailed Oriented, Collaborator and a Enthusiast Learner </div>

                    <div className="textDet"> 
                        A proficient Mern Developer and Competative coder using C, C++, I am commited to write efficient and concise code. I am having hands on experience on TypeScript, JavaScript, Html, Css, Tailwind, MaterialUI, ReactJs, NodeJs, ExpressJs, MongoDb for devlopment.
                    </div>

                    <div>
                        <div> 9548204422 </div>
                        <div> harshgupta.dpn@gmail.com </div>
                    </div>
                </div>   

                <CCol className=""> 
                <img src="images/myself.jpg" alt="Personal Image" width={450} className="selfImgHolder"/> 
                </CCol>    

            </CRow> 


        </CContainer>

        <CContainer className="alignCenter mt-10">

            <CRow className="text-5xl mb-3">My Skills</CRow>
            <CRow className="flex mt-5">
                    

                <div className="mr-4 ml-10"> <Skill /> </div>
                <CCol className="skill mt-12"> <SkillSet/> </CCol>

            </CRow>

        </CContainer>

        <CContainer className="alignCenter mt-10 mb-20">

            <CRow className="text-5xl mb-3"> My Qualification </CRow>
            <CRow className="flex mt-5">

                <Experience/>
                <div className="right"> <ReadBook/>  </div>
                
            </CRow>

        </CContainer>

    </>
}

export default About;