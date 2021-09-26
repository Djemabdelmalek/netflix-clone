import React from 'react';
import './Nav.css';
import {useEffect,useState} from 'react'
import { useHistory } from 'react-router';

function Nav() {

    const [show,handleShow] = useState(false);
    const history = useHistory();

    const transitionNAvBar = () => {
        if(window.scrollY > 100){
            handleShow(true);
        }else{
            handleShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNAvBar);
        return () => {
            window.removeEventListener("scroll",transitionNAvBar);
        }
    }, [])
 
    return (
        <div className={`nav ${show && "nav__black"}`}>
            <div className="nav__content">
                <img onClick={ () => history.push("/")} className="logo" src="https://logos-world.net/wp-content/uploads/2020/04/Netflix-Logo.png" alt="Logo" />
                <img onClick={ () => history.push("/profile")} className="avatar" src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt="profile" />
            </div>  
        </div>
    )
}

export default Nav
