import {useNavigate, useParams} from "react-router-dom";
import React, { useEffect, useState } from "react";
import JobSeekerService from "../services/jobSeekerService";

export default function ProfilDashboard() {
    const userId = localStorage.getItem('userId');
    const [jobSeeker, setJobSeeker] = useState({});
    const navigate = useNavigate();

    useEffect(() => {

        const fetchData = async () => {
            try {
                if (!userId) return; // id değeri undefined ise işlem yapma

                const jobSeekerService = new JobSeekerService();
                const result = await jobSeekerService.getJobSeekerByUserId(userId);
                setJobSeeker(result.data.data);
            } catch (error) {
                console.error('Error fetching job advertisements:', error);
            }
        };

        fetchData();
    }, [userId]); // useEffect'in bağımlılık listesine id'yi ekleyin
    const handleCreateCV = () => {
        // Burada CV oluşturma işlemlerini gerçekleştirin.
        // Örneğin, bir API çağrısı yapabilir ve CV oluşturma işlemlerini sunucu tarafında gerçekleştirebilirsiniz.
        // Ardından kullanıcıyı oluşturulan CV'nin detaylarını görmesi için ilgili sayfaya yönlendirebilirsiniz.

        // Örnek bir yönlendirme:
        navigate('/cv'); // Kullanıcıyı CV oluşturma sayfasına yönlendir
    };


    return (
        <div>
            <h1 className="header">Profil Bilgileri:</h1>
            <div className="profile-info">
                <p><strong>Ad:</strong> {jobSeeker.name}</p>
                <p><strong>Soyad:</strong> {jobSeeker.lastName}</p>
                <p><strong>Doğum Yılı:</strong> {jobSeeker.birthDayYear}</p>
                {/* Diğer profil bilgilerini ekleyebilirsiniz */}
            </div>
            <button className="btn btn-primary" onClick={() => handleCreateCV()}>CV Oluştur</button>
        </div>
    );

}
