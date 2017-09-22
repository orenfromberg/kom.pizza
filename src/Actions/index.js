import axios from 'axios';

export const FETCH_TOKEN = 'FETCH_TOKEN';
export const FETCH_ATHLETE = 'FETCH_ATHLETE';
export const FETCH_CLUB = 'FETCH_CLUB';
export const FETCH_ROSTER = 'FETCH_ROSTER';
export const SET_IS_READY = 'SET_IS_READY';
export const DEAUTHORIZE = 'DEAUTHORIZE';
export const FETCH_CLUB_ACTIVITIES = 'FETCH_CLUB_ACTIVITIES';
export const SET_IS_FETCHING_ACTIVITIES = 'SET_IS_FETCHING_ACTIVITIES';
export const CACHE_CLUB_ACTIVITIES = 'CACHE_CLUB_ACTIVITIES';
export const CACHE_CLUB_MEMBERS = 'CACHE_CLUB_MEMBERS';
export const FETCH_CURRENT_ATHLETE = 'FETCH_CURRENT_ATHLETE';

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

export const fetchCurrentAthlete = (token) => {
    const request = axios({
        method: 'GET',
        url: 'https://www.strava.com/api/v3/athlete',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });

    return {
        type: FETCH_CURRENT_ATHLETE,
        payload: request
    };
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

export const fetchRoster = (token, clubId) => {
    const request = axios({
        method: 'GET',
        url: `https://www.strava.com/api/v3/clubs/${clubId}/members`,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })

    return {
        type: FETCH_ROSTER,
        payload: request
    }
}

export const fetchClubMembers = (token, clubId) => (dispatch) => {
    return axios({
        method: 'GET',
        url: `https://www.strava.com/api/v3/clubs/${clubId}/members`,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
    .then(({ data }) => {
        if (data && data.length > 0) {
            dispatch(cacheClubMembers(clubId, data));
        }
    })
    .catch((error) => {
        console.error(error);
    })
}

const cacheClubMembers = (clubId, members) => {
    return {
        type: CACHE_CLUB_MEMBERS,
        payload: {
            clubId,
            members
        }
    }
}

export const cacheClubActivities = (clubId, activities) => {
    return {
        type: CACHE_CLUB_ACTIVITIES,
        payload: {
            clubId,
            activities
        }
    }
}

export const setIsFetchingActivities = (value) => {
    return {
        type: SET_IS_FETCHING_ACTIVITIES,
        payload: value
    }
}

export const fetchClubActivities = (token, clubId) => (dispatch) => {
    dispatch(setIsFetchingActivities(true));
    dispatch(fetchClubActivitiesByPage(token, clubId, 1, 200));
}

const fetchClubActivitiesByPage = (token, clubId, page, per_page) => (dispatch) => {
    return axios({
        method: 'GET',
        url: `https://www.strava.com/api/v3/clubs/${clubId}/activities?per_page=${per_page}&page=${page}`,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
    .then((response) => {
        if (response.data && response.data.length > 0) {
            dispatch(cacheClubActivities(clubId, response.data));
            dispatch(fetchClubActivitiesByPage(token, clubId, page + 1, per_page));                
        } else {
            dispatch(setIsFetchingActivities(false));
        }
    })
    .catch((error) => {
        console.error(error);
    })
}
