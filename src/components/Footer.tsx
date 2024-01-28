

function Footer(){
    
    const year = new Date().getFullYear();
    
    return <>
        <footer className="footer">
            <p>Created by Shreshth Gupta © {year}</p>
        </footer>
    </>
}

export default Footer;