import axios from "axios";

export default class JobSeekerService {
    getJobSeekerByUserId(userId) {
        return axios.get(`http://localhost:8080/api/job-seekers/get-job-seeker-by-user-id/${userId}`);
    }
}
