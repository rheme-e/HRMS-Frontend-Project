import React, { useState } from 'react';
import Navi from "../layouts/Navi";
import './SignUpDashboardEmployer.css';

export default function SignUpDashboardEmployer() {


    return (
        <div>
            <div className="dropdown-menu-container">

                <form className="px-4 py-3">
                    <div className="form-group">
                        <label htmlFor="exampleDropdownFormEmail1">Şirket Adı</label>
                        <input type="Şirket Adı" className="form-control" id="exampleDropdownFormCompanyName"
                               placeholder="ABC Company..."/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleDropdownFormEmail1">Website</label>
                        <input type="Website" className="form-control" id="exampleDropdownFormWebsite"
                               placeholder="www.abc.com.tr..."/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleDropdownFormEmail1">Telefon</label>
                        <input type="Telefon" className="form-control" id="exampleDropdownFormPhone"
                               placeholder="0312...."/>
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
