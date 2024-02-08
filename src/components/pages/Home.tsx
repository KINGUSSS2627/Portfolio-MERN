import React from "react"
import Header from "../partials/Header"
import CodeImageAnimation from "../pagesAtoms/CoderImageAnimation"
import { CContainer, CRow, CCol } from "@coreui/react"
import 'animate.css';


function Home()
{   

    const [color, setColor] = React.useState("black");
    const [seconds, setSeconds] = React.useState(0);

    setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);

        if (seconds % 4 === 0) {
            setColor("red");
        }else if(seconds % 2 === 0){
            setColor("blue");
        }else{
            setColor("Orange");
        }
    }, 1000);

    const styleName ={
        color: color,
        transition: "color 0.60s ease-in-out",
    }
    
    return <>
    
        <Header/>
        <CContainer>
            <CRow className="flex">
                <CCol className="contentMe">
                    <div className="greet animate__animated animate__slideInRight"> Hello, I'am </div>
                    <div className="name animate__animated animate__slideInLeft" style={styleName}> Shreshth Gupta </div>
                    <div className="title animate__animated animate__slideInRight"> A Coding Enthusiast </div>
                    <div className="intro animate__animated animate__slideInLeft"> A proficient Mern Developer and Competative coder using C, C++, I am commited to write efficient and concise code. I am having hands on experience on TypeScript,  JavaScript,  Html, Css, Tailwind, MaterialUI, ReactJs, NodeJs, ExpressJs, MongoDb for devlopment.</div>
                </CCol>

                <CCol className="sizeXl animate__animated animate__backInUp">
                    <CodeImageAnimation/> 
                </CCol>
            </CRow>
        </CContainer>
        

    </>
}

export default Home;