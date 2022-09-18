import axios from '../axios.js'

const get = async (url) => {

    return await axios
        .get(url)
        .then((response) => {
            console.log(response.data)
            if (response.data.length) {
                return response.data[0];
            } else {
                return []
            }
        });
}

const post = async (url, data) => {

    return await axios
        .post(url, data)
        .then((response) => {
            console.log(response.data)
            if (response.data.length) {
                return response.data[0];
            } else {
                return []
            }
        });
}

const put = async (url, data) => {
    return await axios
        .put(url, data)
        .then((response) => {
            console.log(response.data)
            if (response.data.length) {
                return response.data[0];
            } else {
                return []
            }
        });
}

const deleted = async (url, data) => {
    return await axios
        .delete(url, data)
        .then((response) => {
            console.log(response.data)
            if (response.data.length) {
                return response.data[0];
            } else {
                return []
            }
        });
}


export default {get, post, put, deleted}