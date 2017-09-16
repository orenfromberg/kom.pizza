import axios from 'axios';

export const FETCH_TOKEN = 'FETCH_TOKEN';
export const FETCH_ATHLETE = 'FETCH_ATHLETE';
export const FETCH_CLUB = 'FETCH_CLUB';
export const SET_IS_READY = 'SET_IS_READY';
export const DEAUTHORIZE = 'DEAUTHORIZE';

export const deauthorize = (token) => {
    const request = axios({
        method: 'POST',
        url: 'https://www.strava.com/oauth/deauthorize',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });

    return {
        type: DEAUTHORIZE,
        payload: request
    }
}

export const setIsReady = () => ({
    type: SET_IS_READY,
    payload: true
})

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

export const fetchAthlete = (token, id) => {
    const request = axios({
        method: 'GET',
        url: `https://www.strava.com/api/v3/athletes/${id}`,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })

    return {
        type: FETCH_ATHLETE,
        payload: request
    }
}

export const fetchClub = (token, clubId) => {
    const request = axios({
        method: 'GET',
        url: `https://www.strava.com/api/v3/clubs/${clubId}`,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })

    return {
        type: FETCH_CLUB,
        payload: request
    }
}