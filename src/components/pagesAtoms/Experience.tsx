import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';

function Experience()
{

    return <>
    
        <div className="ml-10 cardHolder"> 
            
            <div>
                <Card variant="outlined" sx={{ minWidth: 340}}>
                    <Typography level="h4"> B-Tech (2025)</Typography>
                    <Typography> CSE Cgpa : 9.10</Typography>
                    <Typography>National Institute Of Technology Bhopal</Typography>
                </Card>
            </div>
            

            <div className='midCard mt-5 mb-5'>
                <Card variant="outlined" sx={{ minWidth: 340}}>
                    <Typography level="h4"> Higher Secondary (2020) </Typography>
                    <Typography> CBSE %Age : 87.6% </Typography>
                    <Typography>Kautilya Sr. Sec. School Kota</Typography>
                </Card>
            </div>
            
            <div>
                <Card variant="outlined" sx={{ minWidth: 340}}>
                    <Typography level="h4"> Secondary School (2018) </Typography>
                    <Typography> CBSE %Age : 81.33% </Typography>
                    <Typography>Kids Corner Sr. Sec. School Firozabad</Typography>
                </Card>
            </div>
            

        </div>
    
    </>
    
}

export default Experience;