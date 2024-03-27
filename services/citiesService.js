import axios from "axios"
export default class citiesService{
    getCities(){
        return axios.get("http://localhost:8080/api/cities/all")
    }
}