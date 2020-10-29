[![N|Solid](https://i.ibb.co/pf6RM31/logo.png)](https://encontreipay.com)

# Encontrei Pay SDK Client

Encontrei Pay is a javascript library for payments.

## Installation

Use the package manager *npm* to install Encontrei Pay SDK.

```bash
npm install encontreipay-sdk
```
Or *yarn*

```bash
yarn add encontreipay-sdk
```

## Usage

First start the client by passing API_KEY as a parameter.

```javascript
import Pay from 'encontreipay-sdk'

const api = new Pay('API_KEY')
```

## Documentation

#### Authentication

For authentication you must send an email and password.

When something goes wrong, an error object will be returned in the response. If all is well, the API return will come within a data object in the response.

```javascript
const response = await api.auth.login('test@example.com', '12345')

if (!response.error) {
    console.log(response.data)
    // do something...
} else {
    console.log(response.error)
}

```

#### Transactions

Example:

```javascript

// get transaction by ID
const view = await api.transactions.view('5099803df3f4948bd2f98391')

// create a transaction

const  data = {
    id: '54f078d6976787n37n723', // User ID that will receive the transaction amount
    installments: 1, // Card installments
    total: 5800, // Total in cents
    name: 'John Doe', // Payer name
    email: 'john@example.com', // Payer email
    card_holder: 'JOHN DOE', // Name of card holder
    card_number: '4242424242424242', // Card number
    expiration_month: '03', // Card expiration month
    expiration_year: '2025', // Card expiration year
    cvv: '123' // Card CVV/CVC
}

const create = await api.transactions.create(data)

```

`ACCESS TO SOME RESOURCES IN THE API WILL DEPEND ON YOUR ACCESS LEVEL.`

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)