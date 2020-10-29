import ApiClient from '.'

export default class ApiAuth {

    private api: ApiClient

    constructor(api: ApiClient) {
        this.api = api
    }

    login(email: string, password: string) {
        return this.api.post(`/authentication/user_login`, { email, password })
    }
}