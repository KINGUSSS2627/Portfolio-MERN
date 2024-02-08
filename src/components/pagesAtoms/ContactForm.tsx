import { CContainer, CRow, CCol } from '@coreui/react';
import FloatingInput from './FloatingInput';
import TextArea from './TextArea';
import MailIcon from '@mui/icons-material/Mail';
import Person4Icon from '@mui/icons-material/Person4';
import SubjectIcon from '@mui/icons-material/Subject';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import PlaceIcon from '@mui/icons-material/Place';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Button from '@mui/material-next/Button';
import 'animate.css';


function ContactForm()
{
    return <>

        <CContainer className='mt-20 lg:flex-col'>

            <CRow className='centerData animate__animated animate__fadeInDown'>
                <CRow className='centerContent m-1 mainHeading'>Feel Free To Contact Me</CRow>
                <CRow className='centerContent m-1'>Loader Animation</CRow>
            </CRow>



            <CRow className='flex justify-center md:space-x-12 coloumnView animate__animated animate__fadeInUp'>
                <CCol className='inline floatSize'>
                    <CRow className='mr-5 mt-5 heading'>Contact Me</CRow>
                    <CRow className='mr-5 mt-5'>
                        <CRow className=''>
                            <CCol className=''>
                                <FloatingInput startDecorator={MailIcon} placeholder="Enter your Name" />
                            </CCol>
                            <CCol className='mt-5'>
                                <FloatingInput startDecorator={Person4Icon} placeholder="Enter your Email"/>
                            </CCol>
                        </CRow>
                        
                    </CRow>
                    <CRow className='mr-5 mt-5'><FloatingInput startDecorator={SubjectIcon} placeholder="Subject"/></CRow>
                    <CRow className='mr-5 mt-5'><TextArea/></CRow>
                </CCol>
                <CCol className='inline info'>
                    <CRow className='ml-5 mt-5 heading'>Contact Information</CRow>
                    <CRow className='ml-5 mt-5'><Person4Icon className='mr-1'/> Shreshth Gupta </CRow>
                    <CRow className='ml-5 mt-5'><LocalPhoneIcon className='mr-1'/> 9548204422</CRow>
                    <CRow className='ml-5 mt-5'><MailIcon className='mr-1'/> harshgupta.dpn@gmail.com</CRow>
                    <CRow className='ml-5 mt-5'><PlaceIcon className='mr-1'/>Firozabad, UttarPradesh India</CRow>
                    
                    <CRow className='m-5'>
                        <LinkedInIcon className='mr-2'/> 
                        <GitHubIcon className='mr-2'/>
                        <InstagramIcon className='mr-2'/>
                        <WhatsAppIcon className='mr-2'/>
                    </CRow>

                </CCol>
            </CRow>
        </CContainer>

        <div className='submit animate__animated animate__fadeInRight'>
            <Button color="tertiary" size="large" variant="elevated" className='p-1'> Send Request</Button>
        </div>
        
        
    
    </>
}

export default ContactForm;