import './header.css'; 
import {Link} from 'react-router-dom'; 

function AppHeader (){
    return (
        <header className="app-header">
            <div className=" app-header-content" >
                <Link to="/" >Home</Link>
                <Link to="/about" >About</Link>
                <a href="www.facebook.com" >Portfolio</a>
                <a href="www.facebook.com" >Contact</a>
                <a href="www.facebook.com" >Blog</a>
            </div>
        </header>
    ); 
}

export default AppHeader; 