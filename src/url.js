import axios from "axios"

export const request = axios.create({baseURL:"https://jsonplaceholder.typicode.com/"})
export const shopurl = axios.create({baseURL:'https://fakestoreapi.com/products'})
