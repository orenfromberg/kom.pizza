import axios from 'axios';

export const FETCH_TOKEN = 'FETCH_TOKEN';

export const fetchToken = (code) => {
    const request = axios({
        method: 'POST',
        url: 'https://www.strava.com/oauth/token',
        data: {
            code,
            client_id: process.env.REACT_APP_CLIENT_ID,
            client_secret: process.env.REACT_APP_CLIENT_SECRET
        },
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })

    return {
        type: FETCH_TOKEN,
        payload: request
    }
}