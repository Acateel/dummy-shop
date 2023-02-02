import axios from "axios"
import {setupCache} from "axios-cache-interceptor"

const dymmyJSON = axios.create({
    baseURL: "https://dummyjson.com/"
})

export default setupCache(dymmyJSON)