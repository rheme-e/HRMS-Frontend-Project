// Ads.jsx

import React, { useState, useEffect } from 'react';
import './Ads.css';
import Pagination from './Pagination';
import { Link } from 'react-router-dom'; // Sayfalama bileşeni

export default function Ads({ filteredAdvertisements }) {
    const [jobAdvertisements, setJobAdvertisements] = useState([]); // jobAdvertisements başlangıçta boş bir dizi olarak başlatıldı
    const [currentPage, setCurrentPage] = useState(1); // Şu anki sayfa numarası
    const [jobAdvertisementsPerPage] = useState(5); // Sayfa başına gösterilecek iş ilanı sayısı

    useEffect(() => {
        setJobAdvertisements(filteredAdvertisements || []); // filteredAdvertisements'ı jobAdvertisements'a ayarla, eğer filteredAdvertisements undefined ise boş bir dizi olarak ayarla
    }, [filteredAdvertisements]); // filteredAdvertisements değiştiğinde useEffect'i yeniden çalıştır

    // Mevcut sayfadaki iş ilanlarını al
    const indexOfLastJob = currentPage * jobAdvertisementsPerPage;
    const indexOfFirstJob = indexOfLastJob - jobAdvertisementsPerPage;
    const currentJobAdvertisements = jobAdvertisements.slice(indexOfFirstJob, indexOfLastJob);

    // Sayfa değiştirme işlevi
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div>
            <div className="ui fixed table">
                <table>
                    <thead>
                    <tr>
                        <th>Şirket Adı</th>
                        <th>Pozisyon</th>
                        <th>Açık Pozisyon</th>
                        <th>Yayınlanma Tarihi</th>
                        <th>Son Başvuru</th>
                        <th>Çalışma Şekli</th>
                        <th>Çalışma Tercihi</th>
                        <th>Şehir</th>
                        <th>Aktif</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {currentJobAdvertisements.map((jobAdvertisement, index) => (
                        <tr key={index}>
                            <td>
                                <Link to={`/job-dashboard/${jobAdvertisement.id}`}>
                                    {jobAdvertisement.companyName}
                                </Link>
                            </td>
                            <td>{jobAdvertisement.jobPositionName}</td>
                            <td>{jobAdvertisement.openPosition}</td>
                            <td>{new Date(jobAdvertisement.releaseDate).toLocaleDateString('tr-TR')}</td>
                            <td>{new Date(jobAdvertisement.applicationDeadline).toLocaleDateString('tr-TR')}</td>
                            <td>{jobAdvertisement.model}</td>
                            <td>{jobAdvertisement.time}</td>
                            <td>{jobAdvertisement.city}</td>
                            <td>{jobAdvertisement.id}</td>
                            <td>
                                <a href={`/job-dashboard/${jobAdvertisement.id}`} className="ui button">
                                    İncele
                                </a>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <Pagination
                    jobAdvertisementsPerPage={jobAdvertisementsPerPage}
                    totalJobAdvertisements={jobAdvertisements.length}
                    currentPage={currentPage}
                    paginate={paginate}
                />
            </div>
        </div>
    );
}
