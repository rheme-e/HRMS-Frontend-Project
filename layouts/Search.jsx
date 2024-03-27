import React, { useState, useEffect } from 'react';
import axios from "axios";
import './Search.css';
import JobAdvertisementService from "../services/jobAdvertisementService";
import JobPositionService from "../services/jobPositionService";

export default function Search({ setFilteredAds }) {
    const [cities, setCities] = useState([]);
    const [jobModels, setJobModels] = useState([]);
    const [jobTimes, setJobTimes] = useState([]);
    const [jobPositions, setJobPositions] = useState([]);
    const [jobAdvertisements, setJobAdvertisements] = useState([]); // jobAdvertisements'ı boş bir dizi olarak başlat

    useEffect(() => {
        getCitiesFromApi();
        getJobModelsFromApi();
        getJobTimesFromApi();
        getJobPositionsFromApi();
        getJobAdvertisementsFromApi(); // Yeni eklendi: jobAdvertisements'ı API'den al
    }, []);

    useEffect(() => {
        filterAdvertisements();
    }, [jobPositions, cities, jobModels, jobTimes, jobAdvertisements]); // jobAdvertisements, useEffect bağımlılıklarına eklendi

    const getCitiesFromApi = async () => {
        try {
            const response = await axios.get("http://localhost:8080/api/cities/all");
            setCities(response.data);
        } catch (error) {
            console.error("Error fetching cities:", error);
        }
    };

    const getJobModelsFromApi = async () => {
        try {
            const jobAdvertisementService = new JobAdvertisementService();
            const result = await jobAdvertisementService.getJobAdvertisements();
            const uniqueModels = [...new Set(result.data.data.map(item => item.model))];
            setJobModels(uniqueModels);
        } catch (error) {
            console.error('Error fetching job models:', error);
        }
    };

    const getJobTimesFromApi = async () => {
        try {
            const jobAdvertisementService = new JobAdvertisementService();
            const result = await jobAdvertisementService.getJobAdvertisements();
            const uniqueTimes = [...new Set(result.data.data.map(item => item.time))];
            setJobTimes(uniqueTimes);
        } catch (error) {
            console.error('Error fetching job times:', error);
        }
    };

    const getJobPositionsFromApi = async () => {
        try {
            const jobPositionService = new JobPositionService();
            const result = await jobPositionService.getJobPositions();
            setJobPositions(result.data.data);
        } catch (error) {
            console.error('Error fetching job positions:', error);
        }
    };

    const getJobAdvertisementsFromApi = async () => {
        try {
            const jobAdvertisementService = new JobAdvertisementService();
            const result = await jobAdvertisementService.getJobAdvertisements();
            setJobAdvertisements(result.data.data); // jobAdvertisements'ı API'den al ve ayarla
        } catch (error) {
            console.error('Error fetching job advertisements:', error);
        }
    };

    const filterAdvertisements = () => {
        // Seçilen filtreleri alın
        const selectedPosition = document.getElementById('job-positions').value;
        const selectedCity = document.getElementById('city').value;
        const selectedModel = document.getElementById('model').value;
        const selectedTime = document.getElementById('time').value;

        // Tüm ilanları alın
        let filteredAdvertisements = [...jobAdvertisements];

        // Pozisyon filtresi
        if (selectedPosition !== '') {
            filteredAdvertisements = filteredAdvertisements.filter(advertisement => advertisement.jobPositionName === selectedPosition);
        }

        // Şehir filtresi
        if (selectedCity !== '') {
            filteredAdvertisements = filteredAdvertisements.filter(advertisement => advertisement.city === selectedCity);
        }

        // Çalışma Modeli filtresi
        if (selectedModel !== '') {
            filteredAdvertisements = filteredAdvertisements.filter(advertisement => advertisement.model === selectedModel);
        }

        // Çalışma Şekli filtresi
        if (selectedTime !== '') {
            filteredAdvertisements = filteredAdvertisements.filter(advertisement => advertisement.time === selectedTime);
        }

        // Hiçbir filtreleme yapılmamışsa, tüm ilanları göster
        if (!selectedPosition && !selectedCity && !selectedModel && !selectedTime) {
            filteredAdvertisements = [...jobAdvertisements];
            setFilteredAds(filteredAdvertisements); // filteredAdvertisements'ı ayarla
            return; // Filtreleme tamamlandıktan sonra fonksiyondan çık
        }

        console.log(filteredAdvertisements)
        // Filtrelenmiş ilan listesini ayarla
        setFilteredAds(filteredAdvertisements);
    };


    // Handler for the "İş Bul" button click
    const handleSearch = (event) => {
        event.preventDefault(); // Varsayılan form gönderme davranışını engelle
        filterAdvertisements(); // filterAdvertisements fonksiyonunu çağır
    };

    return (
        <div>
            <form className="ui form">
                <div className="field">
                    <label htmlFor="job-positions">Pozisyon</label>
                    <select id="job-positions" name="job-positions" className="ui dropdown">
                        <option value="">Pozisyon Seçiniz</option>
                        {jobPositions.map((position, index) => (
                            <option key={index} value={position.positionName}>{position.positionName}</option>
                        ))}
                    </select>
                </div>
                <div className="field">
                    <label htmlFor="city">Şehir</label>
                    <select id="city" name="city" className="ui dropdown">
                        <option value="">Şehir Seçiniz</option>
                        {cities.length > 0 && cities.map(city => (
                            <option key={city.id} value={city.name}>{city.name}</option>
                        ))}
                    </select>
                </div>
                <div className="field">
                    <label htmlFor="model">Çalışma Modeli</label>
                    <select id="model" name="model" className="ui dropdown">
                        <option value="">Çalışma modeli seçiniz</option>
                        {jobModels.map((model, index) => (
                            <option key={index} value={model}>{model}</option>
                        ))}
                    </select>
                </div>
                <div className="field">
                    <label htmlFor="time">Çalışma Şekli</label>
                    <select id="time" name="time" className="ui dropdown">
                        <option value="">Çalışma şekli seçiniz</option>
                        {jobTimes.map((time, index) => (
                            <option key={index} value={time}>{time}</option>
                        ))}
                    </select>
                </div>
                <button className="ui button" type="submit" onClick={handleSearch}>İş Bul</button>
            </form>
        </div>
    );
}