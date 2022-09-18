import axios from 'axios'
import {HOST} from '../utils/routes/routes'

export default axios.create({
    baseURL: HOST,
})