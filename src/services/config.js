import axios from 'axios'

export const http = axios.create({
    baseURL: 'https://teste-morpheus-backend.herokuapp.com/'
})