import axios from "axios";

export default class JobAdvertisementService {
    getJobAdvertisements() {
        return axios.get("http://localhost:8080/api/job-advertisements/getAll");
    }

    getJobAdvertisementsById(id) {
        return axios.get(`http://localhost:8080/api/job-advertisements/getById/${id}`);
    }


}
