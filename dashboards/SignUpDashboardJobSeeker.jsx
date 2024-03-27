import React, { useState } from 'react';
import Navi from "../layouts/Navi";
import './SignUpDashboardJobSeeker.css';

export default function SignUpDashboardJobSeeker() {


    return (
        <div>

            <div className="dropdown-menu-container">

                <form className="px-4 py-3">
                    <div className="form-group">
                        <label htmlFor="exampleDropdownFormEmail1">Ad</label>
                        <input type="Ad" className="form-control" id="exampleDropdownFormName"
                               placeholder="John..."/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleDropdownFormEmail1">Soyad</label>
                        <input type="Soyad" className="form-control" id="exampleDropdownFormLastName"
                               placeholder="Doe..."/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleDropdownFormEmail1">Tc Kimlik No</label>
                        <input type="tcNo" className="form-control" id="exampleDropdownFormtcNo"
                               placeholder="111...."/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleDropdownFormEmail1">Doğum Yılı</label>
                        <input type="birthDayYear" className="form-control" id="exampleDropdownFormBirthdayYear"
                               placeholder="1980..."/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleDropdownFormEmail1">Email</label>
                        <input type="email" className="form-control" id="exampleDropdownFormEmail1"
                               placeholder="birisi@example.com"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleDropdownFormPassword1">Şifre</label>
                        <input type="password" className="form-control" id="exampleDropdownFormPassword1"
                               placeholder="şifre"/>
                    </div>

                    <button type="submit" className="btn btn-primary">Kayıt Ol</button>
                </form>

            </div>
        </div>
    );
}
