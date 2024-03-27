import React, { useEffect, useState } from "react";
import UserService from "../services/userService";
import './SignInDashboard.css';
import { useNavigate } from "react-router-dom";

export default function SignInDashboard() {
    const [users, setUsers] = useState([]);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        getUsersFromApi();
    }, []);

    const getUsersFromApi = async () => {
        try {
            const userService = new UserService();
            const result = await userService.getUsers();
            setUsers(result.data.data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const user = users.find((user) => user.email === email && user.password === password);
            if (user) {
                console.log("Giriş başarılı!");
                setErrorMessage("Giriş başarılı!");
                // Kullanıcının kimliğini localStorage'da sakla
                localStorage.setItem('userId', user.id);
                navigate(`/`);
            } else {
                setErrorMessage("Kullanıcı bulunamadı veya şifre yanlış!");
            }
        } catch (error) {
            console.error("Bir hata oluştu:", error);
            setErrorMessage("Bir hata oluştu, lütfen tekrar deneyin.");
        }
    };

    return (
        <div>
            <div className="dropdown-menu-container">
                <form className="px-4 py-3" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleDropdownFormEmail1">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            id="exampleDropdownFormEmail1"
                            placeholder="birisi@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleDropdownFormPassword1">Şifre</label>
                        <input
                            type="password"
                            className="form-control"
                            id="exampleDropdownFormPassword1"
                            placeholder="şifre"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="dropdownCheck"/>
                            <label className="form-check-label" htmlFor="dropdownCheck">
                                Beni Hatırla
                            </label>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary">Giriş Yap</button>
                    {errorMessage && <div className="text-danger">{errorMessage}</div>}
                </form>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">Hesabın yoksa hesap oluştur!</a>
                <a className="dropdown-item" href="#">Şifreni mi unuttun?</a>
            </div>
        </div>
    );
}
