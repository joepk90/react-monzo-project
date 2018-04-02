import axios from 'axios';

export const FETCH_ACCOUNTS = 'FETCH_ACCOUNTS';
export const FETCH_TRANSACTIONS = 'FETCH_TRANSACTIONS';

const ROOT_URL = 'https://api.monzo.com/';
const ACCESS_TOKEN = '?key=sgjvwojsggowrgoworg';
const AUHTORISATION_CODE = ''
const CLIENT_ID = '';
const CLIENT_SECRET = '';
const REDIRECT_URI = '';


export function fetchAccounts() {
  const data = [
        {
            "id": "acc_00009237aqC8c5umZmrRdh",
            "description": "Peter Pan's Account",
            "created": "2015-11-13T12:17:42Z"
        },
        {
            "id": "acc_00009237aqC8c5umZmrRdh",
            "description": "Peter Pan's Account",
            "created": "2015-11-13T12:17:42Z"
        }
    ]
    const request = {data};

  return {
    type: FETCH_ACCOUNTS,
    payload: request
  };
}


export function fetchTransactions() {
  // const request = axios.get(`${ROOT_URL}/transactions/${ACCESS_TOKEN}`)
  // const request = axios.get(`${ROOT_URL}/oauth2/token/grant_type=authorization_code/client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&redirect_uri=$${REDIRECT_URI}&code=${AUHTORISATION_CODE}`)
  // const request = axios({ method: 'POST', url: ROOT_URL, headers: {autorizacion: localStorage.token}, data: { user: 'name' } })
  const data = [
        {
            "account_balance": 13013,
            "amount": -510,
            "created": "2015-08-22T12:20:18Z",
            "currency": "GBP",
            "description": "THE DE BEAUVOIR DELI C LONDON        GBR",
            "id": "tx_00008zIcpb1TB4yeIFXMzx",
            "merchant": "merch_00008zIcpbAKe8shBxXUtl",
            "metadata": {},
            "notes": "Salmon sandwich 🍞",
            "is_load": false,
            "settled": "2015-08-23T12:20:18Z",
            "category": "eating_out"
        },
        {
            "account_balance": 12334,
            "amount": -679,
            "created": "2015-08-23T16:15:03Z",
            "currency": "GBP",
            "description": "VUE BSL LTD            ISLINGTON     GBR",
            "id": "tx_00008zL2INM3xZ41THuRF3",
            "merchant": "merch_00008z6uFVhVBcaZzSQwCX",
            "metadata": {},
            "notes": "",
            "is_load": false,
            "settled": "2015-08-24T16:15:03Z",
            "category": "eating_out"
        },
        {
            "account_balance": 12334,
            "amount": -679,
            "created": "2015-08-23T16:15:03Z",
            "currency": "GBP",
            "description": "VUE BSL LTD            ISLINGTON     GBR",
            "id": "tx_00008zL2INM3xZ41THuRF3",
            "merchant": "merch_00008z6uFVhVBcaZzSQwCX",
            "metadata": {},
            "notes": "",
            "is_load": false,
            "settled": "2015-08-24T16:15:03Z",
            "category": "eating_out"
        },
        {
            "account_balance": 12334,
            "amount": -679,
            "created": "2015-08-23T16:15:03Z",
            "currency": "GBP",
            "description": "VUE BSL LTD            ISLINGTON     GBR",
            "id": "tx_00008zL2INM3xZ41THuRF3",
            "merchant": "merch_00008z6uFVhVBcaZzSQwCX",
            "metadata": {},
            "notes": "",
            "is_load": false,
            "settled": "2015-08-24T16:15:03Z",
            "category": "eating_out"
        },
        {
            "account_balance": 12334,
            "amount": -679,
            "created": "2015-08-23T16:15:03Z",
            "currency": "GBP",
            "description": "VUE BSL LTD            ISLINGTON     GBR",
            "id": "tx_00008zL2INM3xZ41THuRF3",
            "merchant": "merch_00008z6uFVhVBcaZzSQwCX",
            "metadata": {},
            "notes": "",
            "is_load": false,
            "settled": "2015-08-24T16:15:03Z",
            "category": "eating_out"
        },
    ]
    const request = {data};

  return {
    type: FETCH_TRANSACTIONS,
    payload: request
  };
}
