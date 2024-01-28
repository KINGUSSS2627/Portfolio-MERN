import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


function Header(){
    return <>
    
        <header className="header">

            <div className='title'>
                <h1>Portfolio</h1>
            </div>

            <div className='NavItem'>
                <Stack spacing={10} direction="row">
                    <Button variant="text"><a href="#">Home</a></Button>
                    <Button variant="text"><a href="#">About</a></Button>
                    <Button variant="text"><a href="#">Services</a></Button>
                    <Button variant="text"><a href="#">Contact</a></Button>
                </Stack>
            </div>

        </header>
    
    </>
}

export default Header;