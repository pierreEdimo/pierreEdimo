import './footer.css'; 
import {Link} from 'react-router-dom'; 

function Footer (){
    return (
        <footer className="app-footer">
        <Link to="/contact" className="outline-button-grey" >Contact Me!</Link>
        <a href="http://www.freepik.com">Image designed by rawpixel.com / Freepik</a>
        <p> website coded by mysefl</p>
    </footer>
    ); 
}

export default Footer; 