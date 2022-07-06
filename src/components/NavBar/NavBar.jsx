// Dependencies
import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
// Files
import {scrollToAbout, scrollToStack, scrollToProjects, scrollToContact} from "../../handlers/handlers";
import CloseTagIcon from "../../img/CloseTagIcon.png";
import About from "../../img/About.png";
import Stack from "../../img/Stack.png";
import Projects from "../../img/Projects.png";
import Contact from "../../img/Contact.png";
import styles from "./NavBar.module.css";


function NavBar()
{
    const navigate = useNavigate();
    
    const [height, setHeight] = useState(window.innerHeight);
    const [width, setWidth] = useState(window.innerWidth);
    const [actualHeight, setActualHeight] = useState(window.visualViewport.pageTop);
    
    const aboutIndicator = height - 70;
    const stackIndicator = width <= 1024 ? height * 3 - 70 : height * 2 - 70;
    const projectsIndicator = width <= 1024 ? height * 5 - 70 : height * 3 - 70;
    const contactIndicator = projectsIndicator + height;
    const homeLocation = window.location.pathname === "/home" ? true : false;
    
    window.addEventListener("scroll", () => {
        setActualHeight(window.visualViewport.pageTop);
        setHeight(window.innerHeight);
        setWidth(window.innerWidth);
    });
    
    async function handleScrollAbout()
    {
        navigate("/home");
        scrollToAbout();
    };
    
    async function handleScrollStack()
    {
        await navigate("/home");
        scrollToStack();
    };
    
    async function handleScrollProjects()
    {
        await navigate("/home");
        scrollToProjects();
    };
    
    async function handleScrollContact()
    {
        await navigate("/home");
        scrollToContact();
    };
    
    return (
        <div className={styles.Container}>
            <div className={styles.NavBar}>
                <div className={styles.Icon}>
                    <Link to="/">
                        <img src={CloseTagIcon} alt="Landing" />
                    </Link>
                </div>
                
                <div className={styles.Menu}>
                    <button onClick={handleScrollAbout} className={homeLocation && actualHeight < aboutIndicator ? styles.ActiveButton : styles.Button}>
                        {
                            width <= 550 ? <img src={About} alt="About" />
                            :
                            "About"
                        }
                    </button>
                    
                    <button onClick={handleScrollStack} className={homeLocation && actualHeight >= aboutIndicator && actualHeight < stackIndicator ? styles.ActiveButton : styles.Button}>
                        {
                            width <= 550 ? <img src={Stack} alt="Stack" />
                            :
                            "Stack"
                        }
                    </button>
                    
                    <button onClick={handleScrollProjects} className={homeLocation && actualHeight >= stackIndicator && actualHeight < projectsIndicator ? styles.ActiveButton : styles.Button}>
                        {
                            width <= 550 ? <img src={Projects} alt="Projects" />
                            :
                            "Projects"
                        }
                    </button>
                    
                    <button onClick={handleScrollContact} className={homeLocation && actualHeight >= projectsIndicator && actualHeight < contactIndicator ? styles.ActiveButton : styles.Button}>
                        {
                            width <= 550 ? <img src={Contact} alt="Contact" />
                            :
                            "Contact"
                        }
                    </button>
                </div>
                
                <div className={styles.SwitcherContainer}>
                    <input type="checkbox" id={styles.Switcher}/>
                    <label for={styles.Switcher} className={styles.SwitchLabel}>
                        <label htmlFor={styles.SwitchLabel} className={styles.SwitchLabelIcon}></label>
                    </label>
                </div>
            </div>
        </div>
    );
};


export default NavBar;