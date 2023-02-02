import axios from "axios"
import {setupCache} from "axios-cache-interceptor"

const dummyJSON = axios.create({
    baseURL: "https://dummyjson.com/"
})

export default setupCache(dummyJSON)