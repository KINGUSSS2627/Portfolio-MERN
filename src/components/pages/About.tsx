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

                <CCol className="mr-10">
                     <CRow className="text-4xl"> Shreshth Gupta </CRow>
                    <CRow className="text-xl"> Competative Programmer & MERN Devloper</CRow>
                    <CRow> Desc </CRow>
                    <CRow> Desc 2</CRow>
                    <CRow>

                        <CCol> Phone </CCol>
                        <CCol> Email </CCol>

                    </CRow>
                </CCol>   

                <CCol className="ml-64"> Photo  </CCol>    

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