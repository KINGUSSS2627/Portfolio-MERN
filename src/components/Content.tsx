import TextContent from "./TextContent";
import { CContainer, CRow, CCol } from "@coreui/react";
import Image from "./Image";


function Content(){
    
    return <>
        <div className="contentMain">
            <CContainer>
                <CRow>
                    <CCol><TextContent/></CCol>
                    <CCol><Image/></CCol>
                </CRow>
            </CContainer>    
        </div>
    </>
}


export default Content;