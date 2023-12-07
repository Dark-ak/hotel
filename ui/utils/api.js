import axios from "axios"


const baseUrl = "http://localhost:3000"

const login = (data) => {
    const request = axios.post(`${baseUrl}/login`, data)
    return request.then(response => response)
}

const add = (data) => {
    const request = axios.post(`${baseUrl}/addHotel`, data)
    return request.then(response => response)
}

const get = () => {
    const request = axios.get(`${baseUrl}/getData`)
    return request.then(response => response)
}

export default { login, add, get }