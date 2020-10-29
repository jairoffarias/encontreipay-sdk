import axios from 'axios'

function getClient(api_key: string) {
    const client = axios.create({
        baseURL: `https://encontreiapiv2.herokuapp.com`,
        headers: {
            'Authorization': `Bearer ${api_key}`,
        }
    })
    return client
}

export default class ApiPay {

    private client: any

    constructor(api_key: string) {
        this.client = getClient(api_key)
    }

    get(url: string, conf = {}) {
        return this.client.get(url, conf)
            .then(response => Promise.resolve(response))
            .catch(error => Promise.reject(error))
    }

    delete(url: string, conf = {}) {
        return this.client.delete(url, conf)
            .then(response => Promise.resolve(response))
            .catch(error => Promise.reject(error))
    }

    post(url: string, data = {}, conf = {}) {
        return this.client.post(url, data, conf)
            .then(response => Promise.resolve(response))
            .catch(error => Promise.reject(error))
    }

    put(url: string, data = {}, conf = {}) {
        return this.client.put(url, data, conf)
            .then(response => Promise.resolve(response))
            .catch(error => Promise.reject(error))
    }
}