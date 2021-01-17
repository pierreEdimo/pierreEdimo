import './landing.css';
import mobileImage from '../mobileImage.jpg';
import computer from '../computer.PNG';
import { Link } from 'react-router-dom';
import Footer from '../footer/footer';
import uservoice from '../uservoice.PNG';
import newsroom from '../newsroom.PNG';

function Landing() {
    return (
        <div>

            <div className="banner ">
                <div className="container banner-intro" >
                    <h1 className="title main-title "  >Patrice Edimo</h1>
                    <h2 className="title seconde-title" >Full-Stack Developper from Fulda</h2>
                    <h2 className="title seconde-title" > I develop web-and Mobile(cross-platform) Application </h2>
                </div>
                <div class="w3-display-bottommiddle">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z" />
                        </svg>
                        scroll
                    </span>
                </div>
            </div>

            <div className="project-container" >
                <div className="container">
                    <div className="col col-left ">
                        <img src={mobileImage} alt="phone" />
                    </div>
                    <div className="vertical-spacing" ></div>
                    <div className="col col-right">
                        <p>Passionate about programming and learning new programming languages, i strive to develop innovative mobile- and webapplication for the user</p>
                        <a href="https://github.com/pierreEdimo" >visit my Github</a>
                    </div>
                </div>
            </div>

            <div className="work-container">
                <div className="container" >
                    <div className="col col-left" >
                        <div className="image-container left" >
                            <img src={newsroom} alt="phone" />
                        </div>
                        <a className="work-title" href="">Newsroom</a>
                        <p className="description" >An application where registered Authors can share articles
                        about multiple. Users can
                        login, logout, and bookmark their favorites articles
                             </p>
                        <p>Personal Project.Stack: Flutter, ASP.net Core </p>
                    </div>
                    <div className="vertical-spacing" ></div>
                    <div className="col col-right" >
                        <div className="image-container right">
                            <img src={uservoice} alt="phone" />
                        </div>

                        <a className="work-title" href="">Uservoice</a>
                        <p className="description" >An application where registered users can review and rate
                        diverses items like video Games, Movies, tv show , comics
                        and books
                             </p>
                        <p>Personal Project.Stack: Flutter, ASP.net Core </p>
                    </div>
                </div>
            </div>

            <div className="about-container" >
                <div className="container" >
                    <div className="col col-left" >
                        <img src={computer} alt="my personal Picture" />
                    </div>
                    <div className="vertical-spacing" ></div>
                    <div className="col col-right" >
                        <p>  Being a Fullstack programmer,  i focus mysefl developping mobile application with Flutter using Node or Asp.net core as a backend.
                        But i can also build webapplications using some of the most modern Framework like React and Nodejs
                             </p>
                        <Link to="/about" className="outlined-gry" >More about me</Link>

                    </div>
                </div>
            </div>

            <Footer />

        </div>
    )
}


export default Landing; 