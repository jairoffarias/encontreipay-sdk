import ApiClient from '.'
import Transaction from '../models/Transaction'

export default class ApiTransactions {

    private api: ApiClient

    constructor(api: ApiClient) {
        this.api = api
    }
    /**
    * View transaction by ID
    */
    view(id: string) {
        return this.api.get(`/orders/${id}`)
    }
    /**
    * Create a transaction passing user and credit card data
    */
    create(data: Transaction) {
        return this.api.post(`/orders`, data)
    }
}