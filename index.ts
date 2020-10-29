import ApiPay from './api'
import ApiAuth from './api/auth'
import ApiTransactions from './api/transactions'

export default class Pay {

    auth: ApiAuth
    transactions: ApiTransactions

    constructor(api_key: string) {

        const api_pay = new ApiPay(api_key)

        this.auth = new ApiAuth(api_pay)
        this.transactions = new ApiTransactions(api_pay)
    }
}