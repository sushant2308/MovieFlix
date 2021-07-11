import React,{ useState,useEffect} from 'react'
import './Navbar.css'
import logo from  './images/WHITE.png'
function Navbar() {

    const [show,handleshow] = useState(false)
    const transitionshow = () => {
        if(window.screenY >100){
            handleshow(true);
        }
        else{
            handleshow(false);
        }
    }
    useEffect(() => {
        window.addEventListener("scroll",transitionshow)
        return() =>{
            window.removeEventListener("scroll",transitionshow)
        }
    }, [])
    return (
        <div className={`nav ${show && "nav-black"}`}> 
            <div className="nav-content">
                <img className="nav-logo" src={logo} alt="logo"/>
                <img  className="nav-avatar" src="https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png" alt="male_boy_person_people_avatar_icon_159358"/>
            </div>
            
        </div>
    )
}

export default Navbar
