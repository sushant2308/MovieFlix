import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/userSlice'
import { auth } from '../../firebase'
import Navbar from '../HomeScreen/Navbar'
import './Profile.css'
function Profile() {
    const user= useSelector(selectUser)
    return (
        <div className='profile'>
            <Navbar/>
            <div className='profile-body'>
                <h1>Edit profile</h1>
                <div className='profile-info'>
                    <img src="https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png" alt=""/>
                    <div className="profile-detail">
                        <h2>{user.email}</h2>
                        <div className="profile-plans">
                            <h3>plans</h3>
                            <button onClick={()=> auth.signOut()} className="profile-signout">Sign Out</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Profile
