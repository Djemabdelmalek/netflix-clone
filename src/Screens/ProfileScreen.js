import React from 'react'
import Nav from '../Nav';
import './ProfileScreen.css';
import { selectUser } from '../features/userSlice'
import { useSelector } from 'react-redux';
import { auth } from '../firebase';

function ProfileScreen() {
    const user = useSelector(selectUser);

    return (
        <div className="ProfileScreen">
            <Nav /> 
            <div className="ProfileScreen_body">
                <h1>Edit Profile</h1>
                <div className="ProfileScreen_info">
                    <img src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt="" />
                    <div className="ProfileScreen_details">
                        <h2>{user.email}</h2>
                        <div className="ProfileScreen_plans">
                        <h3>Plans</h3>
                        </div>                        
                        <button onClick={() => auth.signOut() } className="ProfileScreen_signOut">Sign Out</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileScreen
