// Dependencies
import React, {useState, useEffect, useContext} from "react";
// Files
import ThemeContext from "../../contexts/ThemeContext";
import VideogamesImg from "../../img/Videogames.png";
import DigitalizArteImg from "../../img/DigitalizArte.png";
import PortfolioImg from "../../img/Portfolio.png";
import ComingSoonVideo from "../../img/ComingSoon.mp4";
import GitHubWhite from "../../img/GitHubWhite.png";
import Website from "../../img/Website.png";
import darkStyles from "./DarkProjects.module.css";
import lightStyles from "./LightProjects.module.css";


function Projects()
{
    const {theme} = useContext(ThemeContext);
    const [styles, setStyles] = useState(theme === "Dark" ? darkStyles : lightStyles);
    
    useEffect(() => {
        if(theme === "Dark")
        {
            setStyles(darkStyles);
        }
        else if(theme === "Light")
        {
            setStyles(lightStyles);
        };
    }, [theme]);
    
    return (
        <div className={styles.Container}>
            <div className={styles.Title}>
                <h1>Projects</h1>
            </div>
            
            <div className={styles.ProjectsContainer}>
                <div className={styles.Card}>
                    <img className={styles.Background} src={VideogamesImg} alt="Img"/>
                    
                    <div className={styles.Layer}>
                        <h2><a href="https://videogames-app-two.vercel.app">Videogames SPA</a></h2>
                        <p>
                            An encyclopedia of video games made as my individual project for <a href="https://www.soyhenry.com">Henry's</a> bootcamp.
                        </p>
                        
                        <div className={styles.Links}>
                            <a href="https://videogames-app-two.vercel.app"><img src={Website} alt="Website"/></a>
                            <a href="https://github.com/JuanPablo-Llorente/PI-Videogames-main"><img src={GitHubWhite} alt="GitHub"/></a>
                        </div>
                    </div>
                </div>
                
                <div className={styles.Card}>
                    <img className={styles.Background} src={DigitalizArteImg} alt="Img"/>
                    
                    <div className={styles.Layer}>
                        <h2><a href="https://pg-frontend-eight.vercel.app">DigitalizArte</a></h2>
                        <p>
                            An art e-commerce with a small social network system. Made with six more co-workers as final project for <a href="https://www.soyhenry.com">Henry's</a> bootcamp.
                        </p>
                        
                        <div className={styles.Links}>
                            <a href="https://pg-frontend-eight.vercel.app"><img src={Website} alt="Website"/></a>
                            <a href="https://github.com/BugalloF/PG-Backend"><img src={GitHubWhite} alt="GitHub"/></a>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className={styles.ProjectsContainer}>
                <div className={styles.Card}>
                    <img className={styles.Background} src={PortfolioImg} alt="Img"/>
                    
                    <div className={styles.Layer}>
                        <h2><a href="https://juanpablollorente.vercel.app">Portfolio</a></h2>
                        <p>
                            The current website.
                        </p>
                        
                        <div className={styles.Links}>
                            <a href="https://juanpablollorente.vercel.app"><img src={Website} alt="Website"/></a>
                            <a href="https://github.com/JuanPablo-Llorente/Portfolio"><img src={GitHubWhite} alt="GitHub"/></a>
                        </div>
                    </div>
                </div>
                
                <div className={styles.Card}>
                    {/* <img className={styles.Background} src={PortfolioImg} alt="Img"/> */}
                    <video className={styles.Background} autoPlay loop muted src={ComingSoonVideo}></video>
                    
                    <div className={styles.Layer}>
                        {/* <h2><a href="">Smoker's Log</a></h2> */}
                        <h2 className={styles.ComingSoonTitle}>Smoker's Log</h2>
                        <p>
                            A page to keep track of how many cigarettes you have been smoking.
                        </p>
                        <p>
                            This website isn't available yet.
                        </p>
                        
                        <div className={styles.Links}>
                            {/* <a href=""><img src={Website} alt="Website"/></a> */}
                            <img className={styles.ComingSoonIcons} src={Website} alt="Website"/>
                            {/* <a href=""><img src={GitHubWhite} alt="GitHub"/></a> */}
                            <img className={styles.ComingSoonIcons} src={GitHubWhite} alt="GitHub"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Projects;