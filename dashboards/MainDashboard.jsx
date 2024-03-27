// MainDashboard.jsx
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navi from "../layouts/Navi";
import Search from "../layouts/Search";
import Ads from "../pages/Ads";
import JobAdvertisementDashboard from "./JobAdvertisementDashboard";
import { Container, Row, Col } from 'react-bootstrap';
import './JobAdvertisementDashboard.css';
import './MainDashboard.css';
import ProfilDashboard from "./ProfilDashboard";

export default function MainDashboard() {
    const [filteredAds, setFilteredAds] = useState([]);

    return (
        <div>
            <Routes>
                <Route path="/" element={<Container className="job-advertisement-dashboard-container">
                    <Row>
                        <Col sm={4} className="search-col"> <Search setFilteredAds={setFilteredAds} /> </Col>
                        <Col sm={8} className="job-advertisements-col"> <Ads filteredAdvertisements={filteredAds} /> </Col>
                    </Row>
                </Container>} />

            </Routes>
        </div>
    );
}
