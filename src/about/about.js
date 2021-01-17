import './about.css';
import PierreEdimo from '../PierreEdimo.png';
import Footer from '../footer/footer';

function About() {
    return (
        <div>
            <div className="about-container" >
                <div className="container" >
                    <div className="col col-left" >
                        <img src={PierreEdimo} alt="my-Image" />
                    </div>
                    <div className="vertical-spacing" ></div>
                    <div className="col col-right" >
                        <p className="bold-title" >Hi , I am Pierre Patrice Edimo</p>
                        <p>
                            I like programming, and i like improving as a programmer. I started learning
                            programming with java at the university. I felt in love with it , but i felt it was not
                            enough, i wanted to learn more. I started learning html, css, and Javascript on my free
                            time. When i felt confident, i started to learn more about frameworks, i tried React, and
                            liked it, because of how easy it is to apprehend.But i wanted to build mobile application
                            too. I first started native development with Java but i was not confortable with xml. So
                            i tried cross-platform with Flutter. It was great to see how Flutter is quick. Because i
                            had basics knowledge in Java, i talked myself a backend language as well. At first i tried
                            java ee, but it wasn't doing what i hoped it would, so i decided to try with c#. Since then
                            i have been building web-apis with ASP.net core. I am constantly trying to extend my knowledge,
                            and to improve myself. It is the reason why i have been learning how to use Node js lately.
                            I am always open to knew challenges.
                   </p>

                    </div>
                </div>
            </div>
            <Footer />
        </div>

    );
}

export default About; 