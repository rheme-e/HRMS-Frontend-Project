// Navi.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProfilSignIn from './ProfilSignIn.jsx';

import './Navi.css';

export default function Navi() {
    const navigate = useNavigate();

    function handleSignOut() {
        navigate("/sign-in");
    }

    function handleProfile() {
        navigate('/profil-dashboard');
    }

    return (
        <div className="navi" style={{ backgroundImage: "url('https://i.imgur.com/f10FU84.jpeg')" }}>
            <a className="item" style={{ float: 'left' }}>
                <img className="ui avatar image" src="https://i.imgur.com/lULxviV.jpeg" alt="Logo"/>
            </a>
            <div className="right menu" style={{ display: 'flex', alignItems: 'center' }}>
                <ProfilSignIn signOut={handleSignOut} profile={handleProfile} />
            </div>
        </div>
    );
}
