import React, { useEffect, useState } from 'react';
import JobAdvertisementService from '../services/jobAdvertisementService';
import { useParams } from "react-router-dom";
import './ExaminedAdvertisement.css';

export default function ExaminedAdvertisement() {
    let { id } = useParams();
    const [jobAdvertisement, setJobAdvertisement] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const jobAdvertisementService = new JobAdvertisementService();
                const result = await jobAdvertisementService.getJobAdvertisementsById(id);
                setJobAdvertisement(result.data.data);
            } catch (error) {
                console.error('Error fetching job advertisements:', error);
            }
        };

        fetchData();
    }, [id]);

    return (
        <div className="container">
            <h1 className="job-title">{jobAdvertisement.jobPositionName} </h1>
            <p className="company">{jobAdvertisement.companyName} </p>
            <div className="details">
                <p><strong>Açık pozisyon:</strong> {jobAdvertisement.openPosition}</p>
                <p><strong>Yayınlanma Tarihi:</strong> {new Date(jobAdvertisement.releaseDate).toLocaleDateString()}</p>
                <p><strong>Son Başvuru
                    Tarihi:</strong> {new Date(jobAdvertisement.applicationDeadline).toLocaleDateString()}</p>
                <p><strong>Çalışma Modeli:</strong> {jobAdvertisement.model}</p>
                <p><strong>Çalışma şekli:</strong> {jobAdvertisement.time}</p>
                <p><strong>Lokasyon:</strong> {jobAdvertisement.city}</p>
                <p><strong>Detaylar:</strong> {jobAdvertisement.jobDescription}</p>
                <button>Başvur</button>

            </div>
        </div>
    );
}
