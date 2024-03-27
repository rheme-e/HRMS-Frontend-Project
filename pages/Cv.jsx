import React, { useState } from 'react';
import './Cv.css';

export default function Cv() {
    const [cvData, setCvData] = useState({
        schoolExperiences: [],
        jobExperiences: [],
        languages: [],
        photo: null,
        githubUrl: '',
        linkedlnUrl: '',
        programmingLanguages: [],
        coverLetter: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCvData({ ...cvData, [name]: value });
    };

    const handleSchoolExperienceChange = (e, index) => {
        const { name, value } = e.target;
        const updatedSchoolExperiences = [...cvData.schoolExperiences];
        updatedSchoolExperiences[index][name] = value;
        setCvData({ ...cvData, schoolExperiences: updatedSchoolExperiences });
    };

    const handleJobExperienceChange = (e, index) => {
        const { name, value } = e.target;
        const updatedJobExperiences = [...cvData.jobExperiences];
        updatedJobExperiences[index][name] = value;
        setCvData({ ...cvData, jobExperiences: updatedJobExperiences });
    };

    const addSchoolExperience = () => {
        setCvData({ ...cvData, schoolExperiences: [...cvData.schoolExperiences, { schoolName: '', major: '', startYear: '', endYear: '' }] });
    };

    const removeSchoolExperience = (index) => {
        const updatedSchoolExperiences = [...cvData.schoolExperiences];
        updatedSchoolExperiences.splice(index, 1);
        setCvData({ ...cvData, schoolExperiences: updatedSchoolExperiences });
    };

    const addJobExperience = () => {
        setCvData({ ...cvData, jobExperiences: [...cvData.jobExperiences, { companyNames: '', position: '', startYear: '', endYear: '' }] });
    };

    const removeJobExperience = (index) => {
        const updatedJobExperiences = [...cvData.jobExperiences];
        updatedJobExperiences.splice(index, 1);
        setCvData({ ...cvData, jobExperiences: updatedJobExperiences });
    };

    const saveCv = () => {
        // Burada CV verilerini kaydetme işlemini gerçekleştir
        // Örneğin, bu verileri bir API'ye gönderebilirsiniz
        console.log("CV Data:", cvData);
    };

    return (
        <div>
            <h1 className="header">CV:</h1>
            <form>
                {cvData.schoolExperiences.map((experience, index) => (
                    <div key={index}>
                        <label>School Name:</label>
                        <input type="text" name="schoolName" value={experience.schoolName} onChange={(e) => handleSchoolExperienceChange(e, index)} />

                        <label>Major:</label>
                        <input type="text" name="major" value={experience.major} onChange={(e) => handleSchoolExperienceChange(e, index)} />

                        <label>Start Year:</label>
                        <input type="text" name="startYear" value={experience.startYear} onChange={(e) => handleSchoolExperienceChange(e, index)} />

                        <label>End Year:</label>
                        <input type="text" name="endYear" value={experience.endYear} onChange={(e) => handleSchoolExperienceChange(e, index)} />

                        <button type="button" onClick={() => removeSchoolExperience(index)}>Remove</button>
                    </div>
                ))}
                <button type="button" onClick={addSchoolExperience}>Add School Experience</button>

                {cvData.jobExperiences.map((experience, index) => (
                    <div key={index}>
                        <label>Company Name:</label>
                        <input type="text" name="companyName" value={experience.companyName} onChange={(e) => handleJobExperienceChange(e, index)} />

                        <label>Position:</label>
                        <input type="text" name="position" value={experience.position} onChange={(e) => handleJobExperienceChange(e, index)} />

                        <label>Start Year:</label>
                        <input type="text" name="startYear" value={experience.startYear} onChange={(e) => handleJobExperienceChange(e, index)} />

                        <label>End Year:</label>
                        <input type="text" name="endYear" value={experience.endYear} onChange={(e) => handleJobExperienceChange(e, index)} />

                        <button type="button" onClick={() => removeJobExperience(index)}>Remove</button>
                    </div>
                ))}
                <button type="button" onClick={addJobExperience}>Add Job Experience</button>

                {/* Diğer CV alanları buraya eklenebilir */}
                <label>Languages:</label>
                <input type="text" name="languages" value={cvData.languages} onChange={handleInputChange} />

                <label>Photo:</label>
                <input type="file" name="photo" onChange={handleInputChange} />

                <label>Github URL:</label>
                <input type="text" name="githubUrl" value={cvData.githubUrl} onChange={handleInputChange} />

                <label>LinkedIn URL:</label>
                <input type="text" name="linkedlnUrl" value={cvData.linkedlnUrl} onChange={handleInputChange} />

                <label>Programming Languages:</label>
                <input type="text" name="programmingLanguages" value={cvData.programmingLanguages} onChange={handleInputChange} />

                <label>Cover Letter:</label>
                <textarea name="coverLetter" value={cvData.coverLetter} onChange={handleInputChange}></textarea>

                <button type="button" onClick={saveCv}>CV'yi Kaydet</button>
            </form>
        </div>
    );
}
