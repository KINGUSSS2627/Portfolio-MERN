import TextContent from "./TextContent";
import { CContainer, CRow, CCol } from "@coreui/react";
import Image from "./Image";


function Content(){
    
    return <>
        <div className="contentMain">
            <CContainer>
                <CRow>
                    <div className="contentContentMain">
                        <div>
                            <CCol><TextContent/></CCol>
                        </div>
                        <div className="photo">
                            <CCol><Image/></CCol>
                        </div>
                    </div>
                </CRow>
            </CContainer>    
        </div>
    </>
}


export default Content;