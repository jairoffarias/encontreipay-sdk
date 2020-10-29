export default class Transaction {
    id: string
    installments: number
    total: number
    name: string
    email: string
    card_holder: string
    card_number: string
    expiration_month: string
    expiration_year: string
    cvv: string

    constructor(
        id: string,
        installments: number,
        total: number,
        name: string,
        email: string,
        card_holder: string,
        card_number: string,
        expiration_month: string,
        expiration_year: string,
        cvv: string
    ) {
        this.id = id
        this.installments = installments
        this.total = total
        this.name = name
        this.email = email
        this.card_holder = card_holder
        this.card_number = card_number
        this.expiration_month = expiration_month
        this.expiration_year = expiration_year
        this.cvv = cvv
    }
}