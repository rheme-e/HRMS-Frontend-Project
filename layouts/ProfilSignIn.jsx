import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './ProfilSignIn.css';

export default function ProfilSignIn({ signOut, profile }) {
    const userId = localStorage.getItem('userId');

    const handleCloseDropdown = () => {
        const dropdownMenu = document.querySelector('.dropdown-menu');
        if (dropdownMenu) {
            dropdownMenu.classList.remove('show');
        }
    };
    return (
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Profil
            </Dropdown.Toggle>
            <Dropdown.Menu>
                {/* Profil butonuna tıklandığında handleCloseDropdown fonksiyonunu çağırın */}
                <Dropdown.Item as={Link} to={`/profil-dashboard/${userId}`} onClick={() => { profile(); handleCloseDropdown(); }}>Profilim</Dropdown.Item>
                {/* Çıkış butonuna tıklandığında handleCloseDropdown fonksiyonunu çağırın */}
                <Dropdown.Item onClick={() => { signOut(); handleCloseDropdown(); }}>Çıkış Yap</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}
